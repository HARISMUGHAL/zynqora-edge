import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [step, setStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isMobile = useRef(window.innerWidth < 1024);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 900);
    const t3 = setTimeout(() => setStep(3), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isMobile.current) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    const handleResize = () => { isMobile.current = window.innerWidth < 1024; };
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay },
  });

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 70% 35%, rgba(123,97,255,0.14), transparent 42%),
          radial-gradient(circle at 28% 72%, rgba(30,144,255,0.11), transparent 50%),
          #050A18
        `,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* === VIDEO — Desktop only, parallax === */}
      <motion.div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          top: 0,
          right: '-8%',
          width: '72%',
          height: '100%',
          zIndex: 0,
          willChange: 'transform',
        }}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 55, damping: 22, mass: 0.9 }}
      >
        {/* Glow behind video */}
        <div style={{
          position: 'absolute',
          top: '15%', left: '8%',
          width: '60%', height: '65%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30,144,255,0.12) 0%, rgba(123,97,255,0.08) 50%, transparent 75%)',
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        <video
          autoPlay loop muted playsInline
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.82,
            filter: 'brightness(1.1) contrast(1.08)',
          }}
        >
          <source src="/assets/hero-animation.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* === Desktop fade overlay: left → right === */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #050A18 32%, rgba(5,10,24,0.72) 58%, rgba(5,10,24,0.18) 80%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* === VIDEO — Mobile: bottom strip === */}
      <div
        className="lg:hidden"
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: '100%',
          height: '35%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, filter: 'brightness(1.1)' }}
        >
          <source src="/assets/hero-animation.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, #050A18 0%, rgba(5,10,24,0.6) 55%, rgba(5,10,24,0.15) 100%)',
          zIndex: 1,
        }} />
      </div>

      {/* === CONTENT === */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        paddingTop: '80px',
        paddingLeft: 'clamp(1.25rem, 5vw, 6rem)',
        paddingRight: 'clamp(1.25rem, 5vw, 6rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
      }}>
        <div style={{ maxWidth: '600px', width: '100%' }} className="mx-auto lg:mx-0 text-center lg:text-left">

          {/* Badge */}
          {step >= 1 && (
            <motion.div {...fadeUp(0)} style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }} className="lg:justify-start">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(30,144,255,0.08)',
                border: '1px solid rgba(30,144,255,0.2)',
                borderRadius: '100px',
                padding: '0.35rem 1rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1E90FF', display: 'block', boxShadow: '0 0 8px #1E90FF' }} />
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.65rem', fontWeight: 700, color: '#1E90FF', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                  AI Agency — Pakistan
                </span>
              </div>
            </motion.div>
          )}

          {/* H1 Heading */}
          {step >= 1 && (
            <motion.h1
              {...fadeUp(0.1)}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.5px',
                color: '#ffffff',
                marginBottom: '1.25rem',
                textShadow: '0 0 80px rgba(30,144,255,0.07)',
              }}
            >
              <span style={{ fontStyle: 'italic', fontWeight: 600 }}>Transform Ideas</span>
              {' '}Into{' '}
              <br className="hidden sm:block" />
              {/* Glow + gradient text */}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{
                  position: 'absolute', inset: '-8px -4px',
                  background: 'radial-gradient(ellipse, rgba(30,144,255,0.22) 0%, rgba(123,97,255,0.12) 55%, transparent 80%)',
                  filter: 'blur(22px)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }} />
                <span style={{
                  position: 'relative', zIndex: 1,
                  fontWeight: 800,
                  background: 'linear-gradient(95deg, #1E90FF 0%, #7B61FF 60%, #00E5FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Intelligent Systems
                </span>
              </span>
            </motion.h1>
          )}

          {/* Subtext */}
          {step >= 2 && (
            <motion.p
              {...fadeUp(0.1)}
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(156,163,175,0.85)',
                fontWeight: 500,
                lineHeight: 1.65,
                marginBottom: '0.5rem',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              }}
            >
              AI Agents · Automation · SaaS & Mobile Apps
            </motion.p>
          )}

          {step >= 2 && (
            <motion.p
              {...fadeUp(0.15)}
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(156,163,175,0.45)',
                fontWeight: 400,
                fontSize: '0.82rem',
                marginBottom: '2.5rem',
                fontStyle: 'italic',
              }}
            >
              Built for businesses ready to grow with AI.
            </motion.p>
          )}

          {/* Buttons */}
          {step >= 3 && (
            <motion.div
              {...fadeUp(0.15)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                alignItems: 'stretch',
                marginBottom: '2rem',
              }}
              className="sm:flex-row sm:items-center"
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{ textDecoration: 'none', textAlign: 'center' }}
              >
                Book Free AI Strategy Call
              </motion.a>

              <motion.button
                className="btn-ghost"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </motion.button>
            </motion.div>
          )}

          {/* Social row */}
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
              className="lg:justify-start"
            >
              <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(156,163,175,0.4)', fontSize: '0.72rem' }}>
                Or reach us →
              </span>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923125186728"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                style={{
                  width: '40px', height: '40px', borderRadius: '0.625rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'; e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; e.currentTarget.style.boxShadow = '0 0 14px rgba(34,197,94,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px', color: 'rgba(156,163,175,0.6)' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.104.543 4.077 1.495 5.796L.057 23.882l6.297-1.408A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.625-.48-5.158-1.323l-.368-.219-3.738.835.847-3.647-.24-.373A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zynqora.edge"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                  width: '40px', height: '40px', borderRadius: '0.625rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.5)'; e.currentTarget.style.background = 'rgba(236,72,153,0.08)'; e.currentTarget.style.boxShadow = '0 0 14px rgba(236,72,153,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', color: 'rgba(156,163,175,0.6)' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </motion.div>
          )}

        </div>
      </div>

      {/* Bottom gradient blend into next section */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, transparent, #050A18)',
        zIndex: 3,
        pointerEvents: 'none',
      }} />
    </section>
  );
};

export default Hero;
