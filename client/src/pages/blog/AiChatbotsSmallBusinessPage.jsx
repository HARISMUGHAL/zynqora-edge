import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FinalCTA from '../../components/FinalCTA';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AiChatbotsSmallBusinessPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden', background: '#050A18' }}>
      <Navbar />
      <main style={{ flex: 1, padding: 'clamp(6rem, 15vw, 10rem) clamp(1.25rem, 5vw, 5rem)', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1E90FF', fontWeight: 700 }}>
            <span>Blog</span> • <span>AI Chatbots</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.2 }}>
            Why Every Small Business Needs an AI Chatbot in 2026
          </h1>
          
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p>
              In a digital world that never sleeps, customers expect instant answers. However, for most small businesses, fielding inquiries 24/7 with a human team is financially unfeasible. Enter the AI chatbot—a sophisticated digital assistant that works round the clock to ensure you never miss a lead or lose a frustrated customer.
            </p>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>1. 24/7 Availability Translates to More Revenue</h2>
              <p>
                Potential customers browsing your site at 2 AM are often ready to buy but might have a small hesitation about shipping, pricing, or product specifications. An AI chatbot handles these queries instantly. This continuous availability directly impacts your conversion rate, effectively capturing leads while you sleep.
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>2. Drastic Cost Reduction</h2>
              <p>
                Hiring support staff to cover multiple shifts is expensive. By automating routine inquiries—such as "What are your business hours?" "What is your return policy?" or "Where is my order?"—an AI chatbot frees up your human employees to focus on complex, high-value tasks. You get enterprise-level support at a fraction of the cost.
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>3. Data Collection and Lead Generation</h2>
              <p>
                Modern chatbots aren't just answering machines; they are proactive sales agents. Through automated conversational flows, AI chatbots can collect names, emails, phone numbers, and specific user preferences. This gathered lead data flows directly into your CRM, enabling targeted remarketing campaigns and streamlined sales processes.
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>4. Personalized Customer Experiences</h2>
              <p>
                Utilizing advanced natural language processing, today's AI chatbots understand intent and context. They can pull data from past interactions, recommend products based on browsing history, and converse in multiple languages. This level of personalization fosters a deeper connection and enhances brand loyalty.
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>Implementing Your Own Chatbot</h2>
              <p>
                Adding an AI chatbot to your small business is no longer a challenging technical hurdle. With customized solutions tailored specifically for your operational needs, integration is seamless and fast.
              </p>
              <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(30,144,255,0.05)', border: '1px solid rgba(30,144,255,0.2)', borderRadius: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#1E90FF', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Sora', sans-serif" }}>Ready to automate your support?</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
                  Learn how our <Link to="/ai-chatbot" style={{ color: '#fff', textDecoration: 'underline' }}>AI Chatbot solutions</Link> can transform your customer service experience.
                </p>
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

export default AiChatbotsSmallBusinessPage;
