import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* 🔥 BACKGROUND GRADIENT + GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-70" />

      {/* 🔥 GLOW ORB */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-30"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center pt-24 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
            <span className="font-sora text-[0.65rem] font-bold text-blue-500 uppercase tracking-widest">
              AI Agency — Pakistan
            </span>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight font-sora"
        >
          <span className="italic font-semibold text-white">Transform Ideas</span>{' '}Into{' '}
          <br className="hidden sm:block" />
          <span className="relative inline-block mt-2 sm:mt-0">
            <span className="absolute inset-[-8px_-4px] bg-[radial-gradient(ellipse,rgba(30,144,255,0.22)_0%,rgba(123,97,255,0.12)_55%,transparent_80%)] blur-[22px] -z-10"></span>
            <span className="relative z-10 font-extrabold bg-gradient-to-r from-[#1E90FF] via-[#7B61FF] to-[#00E5FF] text-transparent bg-clip-text">
              Intelligent Systems
            </span>
          </span>
        </motion.h1>

        {/* SUBTEXT 1 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-sm sm:text-lg font-medium font-inter"
        >
          AI Agents · Automation · SaaS & Mobile Apps
        </motion.p>
        
        {/* SUBTEXT 2 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm italic font-inter"
        >
          Built for businesses ready to grow with AI.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 transition-all shadow-lg shadow-blue-500/30 text-white font-medium text-center"
          >
            Book Free AI Strategy Call
          </motion.a>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl border border-gray-500 hover:bg-white hover:text-black transition-all text-white font-medium text-center"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4 flex-wrap"
        >
          <span className="font-inter text-gray-400/80 text-xs">
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors duration-300">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors duration-300">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="3.5"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </motion.div>

        {/* 🔥 VIDEO / VISUAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 relative max-w-4xl mx-auto"
        >
          <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[250px] sm:h-[450px] object-cover"
            >
              <source src="/assets/hero-animation.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
