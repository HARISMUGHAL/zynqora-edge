import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'CEO, TechStart PK',
    quote: 'Working with Zynqora completely transformed how we handle leads. We went from manually following up to having an AI do it 24/7. Our conversion doubled within the first month.',
    avatar: 'AR',
    color: '#1E90FF',
  },
  {
    name: 'Sarah Malik',
    role: 'Founder, GrowthBase',
    quote: 'They built exactly what we needed — a smart system that qualifies leads and books calls automatically. The ROI was clear within weeks. Highly recommend.',
    avatar: 'SM',
    color: '#7B61FF',
  },
  {
    name: 'Usman Khan',
    role: 'Operations Manager, NovaBridge',
    quote: 'Our team was drowning in manual tasks. Zynqora automated the entire dispatch and reporting process. We saved over 20 hours a week from day one.',
    avatar: 'UK',
    color: '#00C9A7',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-24 md:py-28 px-6 bg-white/5 overflow-hidden">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="section-label">Client Results</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-3 text-white font-sora">
            What Our <span className="bg-gradient-to-r from-[#1E90FF] to-[#7B61FF] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real feedback from businesses we've helped grow.
          </p>
        </div>

        {/* Trust line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
          <div style={{ height: '1px', width: '48px', background: 'rgba(255,255,255,0.08)' }} />
          <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.6rem', fontWeight: 700, color: 'rgba(156,163,175,0.4)', textTransform: 'uppercase', letterSpacing: '0.28em', textAlign: 'center' }}>
            Trusted by startups &amp; growing businesses worldwide
          </p>
          <div style={{ height: '1px', width: '48px', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(0.875rem,2vw,1.5rem)',
        }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:-translate-y-1"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1.5px',
                background: `linear-gradient(90deg, ${t.color}55, transparent)`,
              }} />

              {/* Quote mark */}
              <div style={{ color: t.color, fontSize: '2rem', lineHeight: 1, opacity: 0.35, fontFamily: 'Georgia, serif' }}>"</div>

              {/* Quote text */}
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(156,163,175,0.85)', fontSize: '0.9rem', lineHeight: 1.72, flex: 1, fontStyle: 'italic' }}>
                {t.quote}
              </p>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" style={{ width: '13px', height: '13px', color: t.color }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}66)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.75rem', fontWeight: 700, color: 'white', flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: '#ffffff', fontSize: '0.875rem' }}>{t.name}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(156,163,175,0.5)', fontSize: '0.75rem', marginTop: '2px' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
