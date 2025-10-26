"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  
  return (
    <section 
      id="cta"
      className="relative py-32 bg-gradient-to-br from-violet-950 via-violet-900 to-black text-white text-center overflow-hidden border-t border-fuchsia-600/50"
    >
      {/* Subtle Glowing Orbs (Fuchsia/Violet Theme) */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-96 h-96 bg-fuchsia-600/10 blur-3xl rounded-full opacity-60 pointer-events-none" 
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-violet-600/10 blur-3xl rounded-full opacity-60 pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter drop-shadow-lg"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-white">
            Ready to Design
          </span> Your Future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-xl text-violet-200 max-w-2xl mx-auto mb-12 font-light"
        >
          Join hundreds of aspiring designers shaping the future of fashion with B Fashion Academy. 
          Let’s transform your creativity into a premium career.
        </motion.p>

        <motion.a
          href="#contact"
          role="button"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.9)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-black text-xl py-4 px-12 rounded-full 
          shadow-2xl shadow-fuchsia-400/50 transition-all duration-300 transform 
          uppercase tracking-wider cursor-pointer border border-fuchsia-300"
        >
          Enroll Now & Start Creating
        </motion.a>

        {/* Dynamic Wave Effect Below Button */}
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.9, 1.1, 0.9] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="mt-12 w-full h-8 bg-fuchsia-500/10 rounded-full blur-xl pointer-events-none"
        />
      </div>
    </section>
  );
}
