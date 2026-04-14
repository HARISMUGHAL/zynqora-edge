import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  { id: 1, title: 'No Leads',    status: 'critical', desc: "You're not getting enough quality leads.", icon: '📉' },
  { id: 2, title: 'Manual Work', status: 'warning',  desc: 'Too much time wasted on repetitive tasks.', icon: '⚙️' },
  { id: 3, title: 'Low Sales',   status: 'critical', desc: 'Visitors are not converting into customers.', icon: '💸' },
  { id: 4, title: 'Not Scaling', status: 'warning',  desc: 'Your business is stuck and not growing.', icon: '🚧' },
];

const statusStyles = {
  critical: { border: 'rgba(239,68,68,0.2)',  text: '#EF4444', bg: 'rgba(239,68,68,0.07)',  dot: '#EF4444' },
  warning:  { border: 'rgba(245,158,11,0.2)', text: '#F59E0B', bg: 'rgba(245,158,11,0.07)', dot: '#F59E0B' },
};

const ProblemSelector = () => {
  return (
    <section style={{ padding: 'clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,5rem)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <div className="section-label">Common Pain Points</div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.75rem,4vw,3.25rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.5px',
            lineHeight: 1.15,
            marginTop: '0.75rem',
          }}>
            What's Holding Your{' '}
            <span className="gradient-text">Business Back?</span>
          </h2>
          <p style={{ color: 'rgba(156,163,175,0.6)', marginTop: '1rem', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>
            Common problems we fix with AI systems.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'clamp(0.875rem,2vw,1.5rem)',
        }}>
          {problems.map((p, idx) => {
            const s = statusStyles[p.status];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.25,0.46,0.45,0.94] }}
                className="glass card-hover"
                style={{
                  padding: 'clamp(1.5rem,3vw,2.5rem)',
                  borderRadius: 'clamp(1.25rem,2vw,1.75rem)',
                  cursor: 'default',
                }}
              >
                {/* Status badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    border: `1px solid ${s.border}`,
                    background: s.bg,
                    borderRadius: '100px',
                    padding: '0.25rem 0.75rem',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: s.dot, display: 'block' }} />
                    <span style={{ fontSize: '0.6rem', fontWeight: 700, color: s.text, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Sora', sans-serif" }}>
                      {p.status}
                    </span>
                  </div>
                  <span style={{ fontSize: '1.4rem', opacity: 0.25 }}>{p.icon}</span>
                </div>

                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 'clamp(1.25rem,2.5vw,1.75rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.3px',
                }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(156,163,175,0.65)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSelector;
