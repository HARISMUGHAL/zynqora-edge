import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 70% 40%, rgba(123,97,255,0.1), transparent 40%),
          radial-gradient(circle at 30% 70%, rgba(30,144,255,0.08), transparent 50%),
          #050A18
        `,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: "'Inter', sans-serif",
        textAlign: 'center',
      }}
    >
      {/* 404 number */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontSize: 'clamp(6rem, 20vw, 12rem)',
          fontFamily: "'Sora', sans-serif",
          fontWeight: 800,
          lineHeight: 1,
          background: 'linear-gradient(90deg, #1E90FF, #7B61FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
          userSelect: 'none',
        }}
      >
        404
      </motion.div>

      {/* Message */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '1rem',
          letterSpacing: '-0.5px',
        }}
      >
        Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          color: '#6B7280',
          fontSize: '1rem',
          maxWidth: '420px',
          lineHeight: 1.65,
          marginBottom: '2.5rem',
        }}
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.a
        href="/"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #1E90FF, #7B61FF)',
          color: '#ffffff',
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '1.1rem 3rem',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          boxShadow: '0 0 24px rgba(30,144,255,0.35)',
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(30,144,255,0.55)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 24px rgba(30,144,255,0.35)'}
      >
        Go Home
      </motion.a>
    </div>
  );
};

export default NotFound;
