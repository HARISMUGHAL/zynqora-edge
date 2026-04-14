import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { label: 'Home',       href: '#' },
    { label: 'Services',   href: '#services' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Contact',    href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href === '#' ? 'body' : href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(5,10,24,0.95)' : 'rgba(5,10,24,0.75)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>

            {/* Logo */}
            <button onClick={() => handleNavClick('#')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                fontWeight: 800,
                background: 'linear-gradient(90deg, #1E90FF, #7B61FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.5px',
              }}>
                Zynqora Edge
              </div>
              <div style={{
                fontSize: '0.55rem',
                fontWeight: 700,
                color: 'rgba(156,163,175,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                marginTop: '2px',
              }}>
                Intelligence That Scales
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2.5rem' }}>
              {links.slice(0, 3).map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'rgba(156,163,175,0.75)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.22em',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(156,163,175,0.75)'}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, rgba(30,144,255,0.85), rgba(123,97,255,0.85))',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 18px rgba(30,144,255,0.2)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1E90FF, #7B61FF)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(30,144,255,0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(30,144,255,0.85), rgba(123,97,255,0.85))';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 18px rgba(30,144,255,0.2)';
                }}
              >
                Contact Us
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '44px',
                height: '44px',
                gap: '6px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                zIndex: 1100,
              }}
            >
              {[0,1,2].map(i => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    background: 'white',
                    height: '2px',
                    borderRadius: '2px',
                    transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                    width: i === 1 ? (mobileOpen ? '0px' : '16px') : '24px',
                    opacity: i === 1 ? (mobileOpen ? 0 : 1) : 1,
                    transform: mobileOpen
                      ? i === 0 ? 'translateY(8px) rotate(45deg)' : i === 2 ? 'translateY(-8px) rotate(-45deg)' : 'none'
                      : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(5,10,24,0.98)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      >
        {/* Logo in mobile menu */}
        <div style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: '1.2rem',
          fontWeight: 800,
          background: 'linear-gradient(90deg, #1E90FF, #7B61FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
        }}>
          Zynqora Edge
        </div>

        {/* Divider */}
        <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />

        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.85)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#1E90FF'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          className="btn-primary"
          style={{ marginTop: '1rem' }}
        >
          Get Started
        </a>
      </div>
    </>
  );
};

export default Navbar;
