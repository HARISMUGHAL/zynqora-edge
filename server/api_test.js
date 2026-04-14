const BASE = 'http://localhost:5000';

async function run() {
  // Test 1: Health check
  try {
    const r = await fetch(BASE + '/health');
    const d = await r.json();
    console.log('[TEST 1] ✅ Health:', JSON.stringify(d));
  } catch (e) { console.error('[TEST 1] ❌ Health FAILED:', e.message); }

  // Test 2: Contact form (valid)
  try {
    const r = await fetch(BASE + '/api/v1/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Security Audit', email: 'audit@zynqoraedge.com', message: 'Backend audit test' }),
    });
    const d = await r.json();
    console.log('[TEST 2] ✅ Contact:', JSON.stringify(d));
  } catch (e) { console.error('[TEST 2] ❌ Contact FAILED:', e.message); }

  // Test 3: Contact validation (missing email)
  try {
    const r = await fetch(BASE + '/api/v1/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test', message: 'No email' }),
    });
    const d = await r.json();
    console.log('[TEST 3] ✅ Validation Guard (should be 400):', r.status, JSON.stringify(d));
  } catch (e) { console.error('[TEST 3] ❌ Validation FAILED:', e.message); }

  // Test 4: Chat API
  try {
    const r = await fetch(BASE + '/api/v1/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'How can AI help my business?' }),
    });
    const d = await r.json();
    console.log('[TEST 4] ✅ Chat:', JSON.stringify(d));
  } catch (e) { console.error('[TEST 4] ❌ Chat FAILED:', e.message); }

  // Test 5: 404 handler
  try {
    const r = await fetch(BASE + '/api/v1/nonexistent');
    const d = await r.json();
    console.log('[TEST 5] ✅ 404 Handler (should be 404):', r.status, JSON.stringify(d));
  } catch (e) { console.error('[TEST 5] ❌ 404 FAILED:', e.message); }

  console.log('\n--- All tests completed ---');
}

run();
