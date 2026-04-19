import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    client: 'Nebula Logistics',
    tag: 'Automation',
    problem: "Manual processes were delaying deliveries and burning operational hours every week.",
    solution: 'We built an automated dispatch system that assigns, tracks, and scales deliveries in real time.',
    result: '40% faster operations and zero dispatch delays within 60 days.',
    accent: '#1E90FF',
  },
  {
    client: 'Vertex FinTech',
    tag: 'AI Agents',
    problem: "Leads were dropping off during onboarding — the team couldn't follow up fast enough.",
    solution: 'We deployed AI agents that qualify leads instantly and guide them through onboarding automatically.',
    result: '150% increase in conversion rate and 18% higher client lifetime value.',
    accent: '#7B61FF',
  },
];

const highlight = (text) =>
  text.replace(/(\d+%|\d+ days)/g, (m) => `<strong style="color:#ffffff">${m}</strong>`);

const CaseStudies = () => {
  return (
    <section
      id="cases"
      className="py-20 sm:py-24 md:py-28 px-6 overflow-hidden"
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="section-label">Real Results</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-3 text-white font-sora">
            What We've <span className="bg-gradient-to-r from-[#1E90FF] to-[#7B61FF] bg-clip-text text-transparent">Built</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(1rem,2vw,2rem)',
        }}>
          {cases.map((c, idx) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:-translate-y-1"
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: '0', right: '0',
                height: '2px',
                background: `linear-gradient(90deg, ${c.accent}, transparent)`,
              }} />

              {/* Case ID + tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.6rem', fontWeight: 700,
                  color: 'rgba(156,163,175,0.35)',
                  textTransform: 'uppercase', letterSpacing: '0.3em',
                }}>
                  Case 0{idx + 1}
                </span>
                <span style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.6rem', fontWeight: 700,
                  color: c.accent,
                  textTransform: 'uppercase', letterSpacing: '0.2em',
                  background: `${c.accent}14`,
                  border: `1px solid ${c.accent}28`,
                  padding: '0.2rem 0.6rem', borderRadius: '100px',
                }}>
                  {c.tag}
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(1.2rem,2.5vw,1.5rem)',
                fontWeight: 700, color: '#ffffff',
                marginBottom: '1.5rem',
                letterSpacing: '-0.3px',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                {c.client}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Challenge */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#EF4444', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.6rem', fontWeight: 700, color: 'rgba(239,68,68,0.7)', textTransform: 'uppercase', letterSpacing: '0.25em' }}>The Challenge</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(156,163,175,0.65)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {c.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: c.accent, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.6rem', fontWeight: 700, color: `${c.accent}cc`, textTransform: 'uppercase', letterSpacing: '0.25em' }}>What We Built</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(156,163,175,0.8)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {c.solution}
                  </p>
                </div>

                {/* Result */}
                <div style={{
                  background: `${c.accent}08`,
                  border: `1px solid ${c.accent}18`,
                  borderRadius: '0.875rem',
                  padding: '1rem 1.25rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.85rem' }}>✨</span>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.6rem', fontWeight: 700, color: c.accent, textTransform: 'uppercase', letterSpacing: '0.25em' }}>The Result</span>
                  </div>
                  <p
                    style={{ fontFamily: "'Sora', sans-serif", color: '#ffffff', fontSize: 'clamp(1rem,2vw,1.15rem)', fontWeight: 700, letterSpacing: '-0.2px', lineHeight: 1.4 }}
                    dangerouslySetInnerHTML={{ __html: highlight(c.result) }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
