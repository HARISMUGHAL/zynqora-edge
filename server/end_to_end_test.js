const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const Lead = require('./models/Lead');
const ChatHistory = require('./models/ChatHistory');

async function postRequest(options, data) {
    return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => resolve({ statusCode: res.statusCode, body: JSON.parse(body) }));
        });
        req.on('error', reject);
        req.write(JSON.stringify(data));
        req.end();
    });
}

async function verify() {
    try {
        console.log('--- 🚀 Starting End-to-End Verification ---');

        // 1. Connect to DB to check counts before
        await mongoose.connect(process.env.MONGO_URI);
        const startLeadCount = await Lead.countDocuments();
        const startChatCount = await ChatHistory.countDocuments();
        console.log(`Initial Counts -> Leads: ${startLeadCount}, Chats: ${startChatCount}`);

        // 2. Test Contact API
        console.log('\nTesting POST /api/v1/contact...');
        const contactRes = await postRequest({
            hostname: 'localhost',
            port: 5000,
            path: '/api/v1/contact',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }, {
            name: "EndToEnd Proof",
            email: "proof@zynqora.io",
            message: "Verifying production stability and custom sanitizer."
        });
        console.log(`Status: ${contactRes.statusCode}`, contactRes.body);

        // 3. Test Chat API
        console.log('\nTesting POST /api/v1/chat...');
        const chatRes = await postRequest({
            hostname: 'localhost',
            port: 5000,
            path: '/api/v1/chat',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }, {
            message: "Alpha protocol verification"
        });
        console.log(`Status: ${chatRes.statusCode}`, chatRes.body);

        // 4. Verify DB Persistence
        console.log('\n--- 📊 Database Verification ---');
        const endLeadCount = await Lead.countDocuments();
        const endChatCount = await ChatHistory.countDocuments();
        
        console.log(`Final Counts -> Leads: ${endLeadCount}, Chats: ${endChatCount}`);
        
        if (endLeadCount > startLeadCount && endChatCount > startChatCount) {
            console.log('\n✅ VERIFICATION COMPLETE: Data successfully persisted.');
            
            const latestLead = await Lead.findOne({ email: "proof@zynqora.io" }).sort({ createdAt: -1 });
            console.log('Latest Lead saved:', latestLead);
        } else {
            console.log('\n❌ VERIFICATION FAILED: Counts did not increase.');
        }

        await mongoose.disconnect();
        process.exit(0);

    } catch (err) {
        console.error('\n❌ ERROR DURING VERIFICATION:');
        console.error(err);
        process.exit(1);
    }
}

verify();
