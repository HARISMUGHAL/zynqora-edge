import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'framer-motion';

const AutomationPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden', background: '#050A18' }}>
      <Navbar />
      <main style={{ flex: 1, padding: 'clamp(6rem, 15vw, 10rem) clamp(1.25rem, 5vw, 5rem)', maxWidth: '1000px', margin: '0 auto', color: '#fff' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem' }}>
            Intelligent <span className="gradient-text">Automation Workflow</span>
          </h1>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#7B61FF', marginBottom: '1rem' }}>What is it?</h2>
              <p>Business Automation involves connecting your software stack and streamlining repetitive processes using AI. From data entry and invoice generation to multi-step lead nurturing campaigns, our custom automation solutions eliminate manual work. We build interconnected systems where platforms communicate seamlessly, creating an ecosystem that works on autopilot.</p>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#7B61FF', marginBottom: '1rem' }}>Who needs it?</h2>
              <p>If your team spends more than a few hours a week doing repetitive tasks like copying data between spreadsheets, manually sending emails, organizing files, or updating CRMs, you need automation. Agencies, e-commerce brands, real estate firms, and scaling startups frequently rely on our workflow automation to remove bottlenecks.</p>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#7B61FF', marginBottom: '1rem' }}>Benefits</h2>
              <ul>
                <li style={{ marginBottom: '0.5rem' }}><strong>Zero Human Error:</strong> Automated workflows perform flawlessly every time, eliminating typos and forgotten tasks.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Time Savings:</strong> Free up hundreds of hours every month for your team to focus on high-value, strategic work.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Faster Turnaround:</strong> Processes that took days can now be completed in seconds without manual intervention.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Better Integration:</strong> Break down data silos by making your different software natively talk to one another.</li>
              </ul>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#7B61FF', marginBottom: '1rem' }}>Ready to Scale Faster?</h2>
              <p>Stop doing manual work. Let us help you automate your most tedious processes.</p>
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

export default AutomationPage;
