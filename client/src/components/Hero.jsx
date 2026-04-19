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
    <section className="relative w-full min-h-screen flex items-center bg-[#030712] text-white overflow-hidden">
      
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

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
        {/* Glow behind media */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none z-0"></div>

        {/* Media container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl z-10 hidden lg:block">
          {/* Using existing video source inside the styling block */}
          <video
            autoPlay loop muted playsInline
            className="w-full h-full object-cover hover:scale-105 transition duration-500 opacity-80"
          >
            <source src="/assets/hero-animation.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* === Desktop fade overlay: left → right === */}
      <div
        className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/70 to-transparent pointer-events-none z-10"
      />

      {/* === VIDEO — Mobile: bottom strip === */}
      <div
        className="lg:hidden absolute bottom-0 left-0 w-full h-[35%] z-0 overflow-hidden"
      >
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-55"
        >
          <source src="/assets/hero-animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/60 to-[#030712]/10 z-10" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-20 w-full pt-[80px] pb-[clamp(5rem,10vw,8rem)] px-[clamp(1.25rem,5vw,6rem)]">
        <div className="max-w-[600px] w-full mx-auto lg:mx-0 text-center lg:text-left">

          {/* Badge */}
          {step >= 1 && (
            <motion.div {...fadeUp(0)} className="mb-4 flex justify-center lg:justify-start">
              <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm backdrop-blur tracking-widest text-gray-200 uppercase font-semibold">
                • AI AGENCY — PAKISTAN
              </div>
            </motion.div>
          )}

          {/* H1 Heading */}
          {step >= 1 && (
            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2"
            >
              Transform Ideas Into{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block pb-2">
                Intelligent Systems
              </span>
            </motion.h1>
          )}

          {/* Subtext 1 */}
          {step >= 2 && (
            <motion.p
              {...fadeUp(0.1)}
              className="mt-6 text-gray-400 font-medium text-base sm:text-lg"
            >
              AI Agents • Automation • SaaS & Mobile Apps
            </motion.p>
          )}

          {/* Subtext 2 */}
          {step >= 2 && (
            <motion.p
              {...fadeUp(0.15)}
              className="mt-2 text-gray-500 text-sm sm:text-base italic mb-4"
            >
              Built for businesses ready to grow with AI.
            </motion.p>
          )}

          {/* Buttons */}
          {step >= 3 && (
            <motion.div
              {...fadeUp(0.15)}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-all shadow-lg shadow-blue-500/30 text-white font-semibold text-sm sm:text-base cursor-pointer"
              >
                BOOK FREE AI STRATEGY CALL
              </button>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all text-white font-semibold text-sm sm:text-base cursor-pointer"
              >
                CONTACT US
              </button>
            </motion.div>
          )}

          {/* Social row */}
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-gray-500 text-xs sm:text-sm font-inter tracking-wider">
                Or reach us →
              </span>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923125186728"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10 hover:shadow-[0_0_14px_rgba(34,197,94,0.25)] group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors">
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
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-pink-500/50 hover:bg-pink-500/10 hover:shadow-[0_0_14px_rgba(236,72,153,0.25)] group"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors">
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
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-[#030712] pointer-events-none z-30" />
    </section>
  );
};

export default Hero;
