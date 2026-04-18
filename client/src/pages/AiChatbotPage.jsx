import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'framer-motion';

const AiChatbotPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden', background: '#050A18' }}>
      <Navbar />
      <main style={{ flex: 1, padding: 'clamp(6rem, 15vw, 10rem) clamp(1.25rem, 5vw, 5rem)', maxWidth: '1000px', margin: '0 auto', color: '#fff' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem' }}>
            Custom <span className="gradient-text">AI Chatbots</span> for Modern Businesses
          </h1>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E90FF', marginBottom: '1rem' }}>What is it?</h2>
              <p>Our custom AI Chatbots are intelligent conversational agents designed to act as your 24/7 digital team members. Powered by advanced natural language processing and customized to your specific business data, these chatbots can understand complex inquiries, guide users through sales funnels, and resolve customer support issues in real time without human intervention. They learn from interactions to continuously improve.</p>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E90FF', marginBottom: '1rem' }}>Who needs it?</h2>
              <p>Any business that handles a significant volume of customer inquiries, generates leads online, or needs round-the-clock support can benefit from an AI chatbot. E-commerce stores needing product recommendations, real estate agencies pre-qualifying buyers, B2B companies looking for automated lead generation, and service businesses managing appointment bookings are ideal candidates for this technology.</p>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E90FF', marginBottom: '1rem' }}>Benefits</h2>
              <ul>
                <li style={{ marginBottom: '0.5rem' }}><strong>24/7 Availability:</strong> Never miss a lead or customer query, even outside of business hours.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Instant Responses:</strong> Provide immediate answers, drastically reducing customer wait times and improving satisfaction.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Cost Reduction:</strong> Automate routine tasks, reducing the dependency on large human support teams.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Scalability:</strong> Handle thousands of concurrent conversations effortlessly during traffic spikes.</li>
              </ul>
            </section>
            <section>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E90FF', marginBottom: '1rem' }}>Take the Next Step</h2>
              <p>Ready to automate your customer interactions and boost conversions?</p>
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

export default AiChatbotPage;
