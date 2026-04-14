import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSelector from '../components/ProblemSelector';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';
import ChatWidget from '../components/ChatWidget';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      <main>
        <Hero />
        <ProblemSelector />
        <Services />
        <CaseStudies />
        <Testimonials />
        <TechStack />
        <Process />
        <FinalCTA />
      </main>

      <ChatWidget />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#050A18' }}>
        {/* Connect row */}
        <div style={{
          padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(2rem,4vw,3rem)',
        }}
          className="md:flex-row md:justify-between"
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }} className="md:items-start">
            <div style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: '1.25rem', fontWeight: 800,
              background: 'linear-gradient(90deg, #1E90FF, #7B61FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.5px',
            }}>
              Zynqora Edge
            </div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.58rem', color: 'rgba(156,163,175,0.35)', textTransform: 'uppercase', letterSpacing: '0.28em', fontWeight: 700 }}>
              Intelligence That Scales
            </div>
          </div>

          {/* Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.6rem', fontWeight: 700, color: 'rgba(156,163,175,0.4)', textTransform: 'uppercase', letterSpacing: '0.3em' }}>
              Connect With Us
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              {[
                {
                  href: 'https://www.instagram.com/zynqora.edge',
                  title: 'Instagram', hoverColor: 'rgba(236,72,153,0.5)', hoverBg: 'rgba(236,72,153,0.08)', hoverShadow: '0 0 16px rgba(236,72,153,0.25)',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="3.5"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://wa.me/923125186728',
                  title: 'WhatsApp', hoverColor: 'rgba(34,197,94,0.5)', hoverBg: 'rgba(34,197,94,0.08)', hoverShadow: '0 0 16px rgba(34,197,94,0.25)',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.104.543 4.077 1.495 5.796L.057 23.882l6.297-1.408A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.625-.48-5.158-1.323l-.368-.219-3.738.835.847-3.647-.24-.373A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                  ),
                },
                {
                  href: 'mailto:irtaza@zynqoraedge.com',
                  title: 'Email', hoverColor: 'rgba(30,144,255,0.5)', hoverBg: 'rgba(30,144,255,0.08)', hoverShadow: '0 0 16px rgba(30,144,255,0.25)',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <polyline points="2,4 12,13 22,4"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.facebook.com/share/1DHdXz6gCZ/?mibextid=wwXIfr',
                  title: 'Facebook', hoverColor: 'rgba(59,130,246,0.5)', hoverBg: 'rgba(59,130,246,0.08)', hoverShadow: '0 0 16px rgba(59,130,246,0.25)',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.095 24 18.1 24 12.073z"/>
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  title={item.title}
                  style={{
                    width: '44px', height: '44px',
                    borderRadius: '0.75rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(156,163,175,0.5)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = item.hoverColor;
                    e.currentTarget.style.background = item.hoverBg;
                    e.currentTarget.style.boxShadow = item.hoverShadow;
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.color = 'rgba(156,163,175,0.5)';
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '1.25rem clamp(1.25rem,5vw,5rem)', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'rgba(156,163,175,0.25)' }}>
            © 2026 Zynqora Intelligence Systems. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
