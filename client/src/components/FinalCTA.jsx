import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const resp = await fetch(`${API_URL}/api/v1/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await resp.json().catch(() => ({}));
      
      if (resp.ok || data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,100vw)] h-[min(700px,100vw)] bg-[radial-gradient(circle,rgba(30,144,255,0.05),rgba(123,97,255,0.04),transparent_70%)] blur-[60px] rounded-full pointer-events-none z-0" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(2.5rem,5vw,4rem)',
          alignItems: 'start',
        }}>

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.25,0.46,0.45,0.94] }}
          >
            <div className="section-label">Get In Touch</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-3 text-white font-sora">
              Let's Build Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI System</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-[400px]">
              Tell us what you need — we'll design the solution and get it built fast.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', marginRight: '0.25rem' }}>
                {['#1E90FF', '#7B61FF', '#00C9A7'].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      border: '2px solid #050A18',
                      background: `linear-gradient(135deg, ${color}, ${color}88)`,
                      marginLeft: i > 0 ? '-10px' : 0,
                    }}
                  />
                ))}
              </div>
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.7rem', fontWeight: 700, color: 'rgba(156,163,175,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Trusted by startups &amp; scaling businesses
              </span>
            </div>

            {/* Benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Fast Turnaround', 'AI-Powered & Scalable', 'No Commitment Required'].map((b, i) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0,
                    background: i === 0 ? '#1E90FF' : i === 1 ? '#7B61FF' : '#00C9A7',
                    boxShadow: `0 0 8px ${i === 0 ? '#1E90FF' : i === 1 ? '#7B61FF' : '#00C9A7'}66`,
                  }} />
                  <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: 'rgba(156,163,175,0.6)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25,0.46,0.45,0.94] }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:shadow-xl relative overflow-hidden"
          >
            {/* Glow corner */}
            <div style={{
              position: 'absolute', top: '-40px', right: '-40px',
              width: '150px', height: '150px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(30,144,255,0.12), transparent 70%)',
              pointerEvents: 'none',
            }} />

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Sora', sans-serif", fontSize: '0.62rem', fontWeight: 700, color: 'rgba(156,163,175,0.5)', textTransform: 'uppercase', letterSpacing: '0.28em', marginBottom: '0.6rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Sora', sans-serif", fontSize: '0.62rem', fontWeight: 700, color: 'rgba(156,163,175,0.5)', textTransform: 'uppercase', letterSpacing: '0.28em', marginBottom: '0.6rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  placeholder="john@company.com"
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Sora', sans-serif", fontSize: '0.62rem', fontWeight: 700, color: 'rgba(156,163,175,0.5)', textTransform: 'uppercase', letterSpacing: '0.28em', marginBottom: '0.6rem' }}>
                  What Do You Need?
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                  placeholder="Tell us about your business and what you want to automate or build..."
                  style={{ resize: 'vertical', minHeight: '110px' }}
                />
              </div>

              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-[1.05] transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-purple-500/30 font-semibold mt-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </span>
                ) : 'Book Free Consultation'}
              </button>

              <p style={{ fontFamily: "'Inter', sans-serif", textAlign: 'center', color: 'rgba(156,163,175,0.35)', fontSize: '0.75rem', marginTop: '-0.25rem' }}>
                No commitment. Just a quick strategy call.
              </p>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: '0.875rem', padding: '0.875rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontFamily: "'Sora', sans-serif", color: '#4ade80', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    ✓ Message sent — we'll be in touch within 24 hours
                  </p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.2)',
                    borderRadius: '0.875rem', padding: '0.875rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontFamily: "'Sora', sans-serif", color: '#f87171', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Something went wrong — please try again
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Spinner keyframe */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default FinalCTA;
