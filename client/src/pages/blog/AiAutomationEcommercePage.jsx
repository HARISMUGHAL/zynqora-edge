import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FinalCTA from '../../components/FinalCTA';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AiAutomationEcommercePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden', background: '#050A18' }}>
      <Navbar />
      <main style={{ flex: 1, padding: 'clamp(6rem, 15vw, 10rem) clamp(1.25rem, 5vw, 5rem)', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7B61FF', fontWeight: 700 }}>
            <span>Blog</span> • <span>E-commerce</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.2 }}>
            Maximizing E-commerce Profitability with AI Automation
          </h1>
          
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p>
              In the highly competitive world of e-commerce, margins are tight and customer expectations are sky-high. Relying purely on manual processes for order fulfillment, customer support, and inventory management leads to costly errors and stunted growth. The solution? Embedding comprehensive AI automation into the core of your e-commerce operations.
            </p>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>1. Smart Inventory Management</h2>
              <p>
                Running out of stock during a peak sales window is a nightmare. Overstocking ties up valuable cash flow. AI automation systems can predict demand patterns by analyzing historical sales data, seasonal trends, and even social media sentiment. This allows you to dynamic reorder products correctly, minimizing storage costs while preventing stockouts.
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>2. Dynamic Pricing Algorithms</h2>
              <p>
                In a volatile market, your pricing strategy needs to adapt instantly. AI systems monitor competitor prices, inventory levels, and demand to automatically adjust your product pricing in real-time. This dynamic pricing approach maximizes profit margins during high demand and moves stagnant inventory during slow periods.
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>3. Automated Order Workflows</h2>
              <p>
                From the moment a customer clicks "Buy," a multitude of background tasks must occur: payment verification, warehouse notification, shipping label generation, and customer email updates. Automating this entire sequence eliminates manual bottlenecks, ensuring that orders pack and ship exponentially faster with zero typographical errors.
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>4. Personalized Product Recommendations</h2>
              <p>
                Have you noticed how top e-commerce platforms seemingly read your mind? This is driven by AI automation engines that analyze past purchases and current browsing behavior to surface highly relevant cross-sell and upsell products. Implementing this leads to a predictable, substantial increase in Average Order Value (AOV).
              </p>
            </section>
            
            <section>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>Scale Your Store Without Scaling Your Headcount</h2>
              <p>
                E-commerce growth shouldn't necessitate an oversized workforce performing repetitive tasks. By embracing automation, you build an operationally resilient enterprise ready to scale on demand.
              </p>
              <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(123,97,255,0.05)', border: '1px solid rgba(123,97,255,0.2)', borderRadius: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#7B61FF', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Sora', sans-serif" }}>Want to automate your e-commerce workflows?</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
                  Explore how our <Link to="/automation" style={{ color: '#fff', textDecoration: 'underline' }}>Intelligent Automation services</Link> can optimize your entire business backend.
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

export default AiAutomationEcommercePage;
