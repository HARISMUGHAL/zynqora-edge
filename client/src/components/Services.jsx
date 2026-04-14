import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    category: 'Automation',
    title: 'AI Agents',
    desc: 'Automate customer support, lead follow-up, and repetitive tasks — so your team focuses on what matters.',
    icon: '🤖',
    accent: '#1E90FF',
  },
  {
    category: 'Software',
    title: 'Product Development',
    desc: 'We build SaaS and mobile apps with AI built in — products that work smarter as your business scales.',
    icon: '🚀',
    accent: '#7B61FF',
  },
  {
    category: 'Presence',
    title: 'Web & Digital Systems',
    desc: 'Websites and digital systems that convert visitors into leads — designed to grow your revenue.',
    icon: '🌐',
    accent: '#00C9A7',
  },
  {
    category: 'Strategy',
    title: 'AI Consultancy',
    desc: 'We audit your business and give you a clear, practical plan for using AI to save time and grow faster.',
    icon: '🎯',
    accent: '#F59E0B',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      style={{
        padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,5rem)',
        background: 'rgba(255,255,255,0.015)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(1.5rem,3vw,2rem)',
          marginBottom: 'clamp(2.5rem,5vw,4.5rem)',
        }}
          className="lg:flex-row lg:justify-between lg:items-end"
        >
          <div>
            <div className="section-label">What We Do</div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(2rem,5vw,4.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              marginTop: '0.75rem',
            }}>
              Real Solutions <br className="hidden lg:block" />
              <span className="gradient-text">That Deliver</span>
            </h2>
          </div>
          <p style={{
            maxWidth: '360px',
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(156,163,175,0.7)',
            fontSize: '1rem',
            lineHeight: 1.7,
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            paddingLeft: '2rem',
          }}
            className="hidden lg:block"
          >
            We build the AI systems that let you focus on growing your business — not managing it.
          </p>
        </div>

        {/* Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(0.875rem,2vw,1.25rem)',
        }}>
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}
              className="glass card-hover"
              style={{
                padding: 'clamp(1.75rem,3vw,2.5rem)',
                borderRadius: 'clamp(1.25rem,2vw,2rem)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner glow */}
              <div style={{
                position: 'absolute',
                top: '-30px', right: '-30px',
                width: '100px', height: '100px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${s.accent}22, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Icon + category */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '0.875rem',
                  background: `${s.accent}14`,
                  border: `1px solid ${s.accent}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem',
                  flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <span style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  color: s.accent,
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  opacity: 0.85,
                }}>
                  {s.category}
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(1.25rem,2vw,1.75rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '0.875rem',
                letterSpacing: '-0.3px',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(156,163,175,0.65)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
              }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
