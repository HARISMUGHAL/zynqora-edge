const { z } = require('zod');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const nodemailer = require('nodemailer');
const Lead = require('../models/Lead');
const ChatHistory = require('../models/ChatHistory');

// ─── Zod Validation Schemas ────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().max(1000).optional(),
});

const chatSchema = z.object({
  message: z.string().min(1, 'Message is required').max(500),
});

// ─── Nodemailer Transporter (create once, reuse — more efficient) ──────────────
const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER?.trim(),
      pass: process.env.EMAIL_PASS?.trim(),
    },
  });

// ─── Google Sheets Webhook URL ────────────────────────────────────────────────
const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwvHf0z6pwZ_yUdofI1CaiSixlJafJJ-o8N4Vl-YL--3EiJ2y9fMCrnQd4MmSljkBSy/exec';

// ─── @desc    Handle contact form submission ───────────────────────────────────
// ─── @route   POST /api/v1/contact ────────────────────────────────────────────
const submitContact = async (req, res) => {
  try {
    // 1. Validate input
    const validatedData = contactSchema.parse(req.body);

    // 2. Save to MongoDB (primary — must succeed)
    const lead = await Lead.create({
      ...validatedData,
      status: 'new',
    });

    // 3. Email notification (non-blocking — never breaks the API response)
    setImmediate(async () => {
      try {
        const subject = 'New Lead 🚀';
        const html = `
          <div style="font-family:Inter,sans-serif;max-width:500px;margin:auto">
            <h2 style="color:#1E90FF">🚀 New Lead Received</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px;color:#555;font-weight:600">Name</td><td style="padding:8px">${validatedData.name}</td></tr>
              <tr><td style="padding:8px;color:#555;font-weight:600">Email</td><td style="padding:8px">${validatedData.email}</td></tr>
              <tr><td style="padding:8px;color:#555;font-weight:600">Message</td><td style="padding:8px">${validatedData.message || 'N/A'}</td></tr>
            </table>
          </div>
        `;
        const text = `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage: ${validatedData.message || 'N/A'}`;
        const toEmail = 'irtaza@zynqoraedge.com';

        let emailSent = false;
        
        // --- LAYER 1: PRIMARY → Resend ---
        if (process.env.RESEND_API_KEY) {
          try {
            const fetchFn = typeof fetch !== 'undefined' ? fetch : require('node-fetch');
            const resendResp = await fetchFn('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY.trim()}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                from: process.env.EMAIL_FROM || 'Zynqora Edge <onboarding@resend.dev>',
                to: [toEmail],
                subject: subject,
                html: html,
                text: text
              })
            });

            if (resendResp.ok) {
              console.log('[Email] ✅ Sent via Resend');
              emailSent = true;
            }
          } catch (resendErr) {
            // Silently catch to trigger fallback without noisy logs
          }
        }

        // --- LAYER 2: FALLBACK → Gmail (nodemailer) ---
        // --- LAYER 3: RETRY → Exponential Backoff ---
        if (!emailSent) {
          console.log('[Email] ⚠️ Falling back to Gmail');
          const transporter = createTransporter();
          
          let attempts = 0;
          const maxAttempts = 3; // 1 fallback try + 2 retries
          const delay = (ms) => new Promise(res => setTimeout(res, ms));
          
          while (attempts < maxAttempts) {
            try {
              await transporter.sendMail({
                from: `"Zynqora Edge" <${process.env.EMAIL_USER?.trim()}>`,
                to: toEmail,
                subject: subject,
                text: text,
                html: html,
              });
              console.log('[Email] ✅ Sent via Gmail fallback');
              emailSent = true;
              break;
            } catch (gmailErr) {
              attempts++;
              if (attempts >= maxAttempts) {
                console.log('[Email] ❌ Failed after retries');
                break;
              }
              // Attempt 1 -> 1s, Attempt 2 -> 2s
              await delay(attempts * 1000);
            }
          }
        }
      } catch (emailErr) {
        console.log('[Email] ❌ Critical email failure');
      }
    });

    // 4. Google Sheets integration (non-blocking)
    setImmediate(async () => {
      try {
        const fetchFn = typeof fetch !== 'undefined' ? fetch : require('node-fetch');
        const response = await fetchFn(SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: validatedData.name,
            email: validatedData.email,
            message: validatedData.message || '',
          }),
        });
        
        if (response.ok) {
          console.log('[Sheets] ✅ Synced successfully');
        } else {
          console.log('[Sheets] ❌ Sync failed');
        }
      } catch (sheetErr) {
        console.log('[Sheets] ❌ Sync failed');
      }
    });

    // 5. Respond immediately — email & sheets run in background
    return res.status(201).json({
      success: true,
      message: 'Lead captured successfully',
      data: {
        id: lead._id,
        name: lead.name,
        email: lead.email,
        status: lead.status,
        createdAt: lead.createdAt,
      },
    });

  } catch (error) {
    // Zod validation error
    if (error?.errors && Array.isArray(error.errors) && error.errors.length > 0) {
      return res.status(400).json({ error: error.errors[0]?.message || 'Validation failed' });
    }
    console.error('[Contact] ❌ Submission Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// ─── Gemini AI Setup ──────────────────────────────────────────────────────────
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'MISSING_KEY');

const SYSTEM_INSTRUCTION = `You are an AI consultant for Zynqora Edge.
Your role:
- Understand user business needs
- Suggest AI solutions (high-level only)
- Explain benefits and outcomes

STRICT RULES:
- Do NOT provide code
- Do NOT give step-by-step technical solutions
- Do NOT act like a free developer

Instead:
- Focus on business value
- Keep responses concise and premium
- Encourage user to take action / book a consultation

Tone: Confident, Professional, Persuasive.
Goal: Convert visitors into paying clients.`;

// ─── @desc    Handle AI chat interaction ──────────────────────────────────────
// ─── @route   POST /api/v1/chat ───────────────────────────────────────────────
const getAiResponse = async (req, res) => {
  try {
    const { message } = chatSchema.parse(req.body);

    // Chatbot disabled message
    const aiResponse = 'AI assistant is currently under development. It will be available soon.';

    // Save to ChatHistory
    await ChatHistory.create({
      message,
      response: aiResponse,
    });

    return res.status(200).json({
      success: true,
      reply: aiResponse,
    });

  } catch (error) {
    if (error?.errors && Array.isArray(error.errors) && error.errors.length > 0) {
      return res.status(400).json({ error: error.errors[0]?.message || 'Validation failed' });
    }
    console.error('[Chat] ❌ API Error:', error.message);
    return res.status(500).json({ error: 'Chat Processing Error' });
  }
};

module.exports = { submitContact, getAiResponse };
