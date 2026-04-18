import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'framer-motion';

const SaasDevelopmentPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden', background: '#050A18' }}>
      <Navbar />
      <main style={{ flex: 1, padding: 'clamp(6rem, 15vw, 10rem) clamp(1.25rem, 5vw, 5rem)', maxWidth: '1000px', margin: '0 auto', color: '#fff' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem' }}>
            Next-Gen <span className="gradient-text">SaaS Development</span>
          </h1>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#00C9A7', marginBottom: '1rem' }}>What is it?</h2>
              <p>Software as a Service (SaaS) development involves creating cloud-based applications accessible to your customers via the web. We specialize in building AI-infused SaaS platforms from the ground up—from conceptualization and UI/UX design to scalable backend architecture, database integration, and secure billing infrastructure. Our products are designed precisely to align with modern user aesthetic expectations.</p>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#00C9A7', marginBottom: '1rem' }}>Who needs it?</h2>
              <p>Founders with a vision to build software products, established enterprises wanting to digitize internal processes, and agencies looking to create custom portals for their clients. If you have an idea for a recurring revenue platform or a custom internal tool, you need expert SaaS development.</p>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#00C9A7', marginBottom: '1rem' }}>Benefits</h2>
              <ul>
                <li style={{ marginBottom: '0.5rem' }}><strong>Recurring Revenue:</strong> Build a scalable product that generates consistent monthly and yearly subscriptions.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Global Accessibility:</strong> Your users can access the software from anywhere in the world on any device.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Built-In AI:</strong> We infuse modern AI capabilities directly into your SaaS application for competitive advantage.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Secure & Scalable:</strong> Robust architecture that natively handles growth without crashing or slowing down.</li>
              </ul>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#00C9A7', marginBottom: '1rem' }}>Bring Your Idea to Life</h2>
              <p>Ready to build the next big thing? Let's discuss your product roadmap.</p>
              <div style={{ marginTop: '1.5rem' }}>
                <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Get Free Consultation</a>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
      <FinalCTA />
    </div>
  );
};

export default SaasDevelopmentPage;
