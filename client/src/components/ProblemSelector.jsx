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
    <section className="py-20 sm:py-24 md:py-28 px-6 overflow-hidden">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="section-label">Common Pain Points</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 mt-3 text-white font-sora">
            What's Holding Your{' '}
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#7B61FF] bg-clip-text text-transparent">Business Back?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
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
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_30px_rgba(30,144,255,0.06)]"
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

                <h3 className="font-sora text-xl lg:text-2xl font-bold text-white mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
