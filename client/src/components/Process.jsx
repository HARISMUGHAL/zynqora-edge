import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Discovery',    desc: 'In-depth audit of operational bottlenecks and scaling potential.', icon: '🔍' },
  { id: '02', title: 'Architecture', desc: 'Designing custom AI node networks and system integration layers.', icon: '🏗️' },
  { id: '03', title: 'Development',  desc: 'High-performance engineering of your unique AI ecosystem.', icon: '⚡' },
  { id: '04', title: 'Integration',  desc: 'Seamless deployment and real-time scaling of your new agents.', icon: '🚀' },
];

const Process = () => {
  return (
    <section
      id="process"
      style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,5rem)', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <div className="section-label">How We Work</div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.75rem,4vw,3.25rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.5px',
            lineHeight: 1.15,
            marginTop: '0.75rem',
          }}>
            The <span className="gradient-text">Roadmap</span>
          </h2>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: 'clamp(1.25rem,3vw,2.5rem)',
          position: 'relative',
        }}>
          {steps.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}
              style={{ position: 'relative' }}
            >
              {/* Step number circle */}
              <div style={{
                width: '56px', height: '56px',
                borderRadius: '1rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(30,144,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Sora', sans-serif",
                fontSize: '0.85rem', fontWeight: 800,
                color: '#1E90FF',
                marginBottom: '1.25rem',
                boxShadow: '0 0 20px rgba(30,144,255,0.07)',
                position: 'relative',
              }}>
                {s.id}
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden lg:block"
                    style={{
                      position: 'absolute',
                      left: '100%',
                      top: '50%',
                      width: 'calc(100% + 2.5rem)',
                      height: '1px',
                      background: 'linear-gradient(90deg, rgba(30,144,255,0.2), transparent)',
                      marginLeft: '0.5rem',
                    }}
                  />
                )}
              </div>

              <h3 style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(1.1rem,2vw,1.35rem)',
                fontWeight: 700, color: '#ffffff',
                marginBottom: '0.625rem',
                letterSpacing: '-0.3px',
              }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(156,163,175,0.6)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
