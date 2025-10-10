"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  
  return (
    <section className="relative py-28 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white text-center overflow-hidden">
      {/* Subtle glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Ready to Begin Your <span className="text-white/90 underline decoration-white/40">Fashion Journey?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-lg text-blue-100 max-w-2xl mx-auto mb-10"
        >
          Join hundreds of aspiring designers shaping the future of fashion with Tim Fashion Academy.
          Let’s make your creativity your career.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="bg-white text-blue-700 font-semibold py-4 px-10 rounded-full shadow-xl hover:bg-blue-50 transition-all duration-300"
        >
          <a href="#contact" >Get In Touch</a>
        </motion.button>

        {/* Subtle wave motion under button */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute left-0 right-0 bottom-0 h-32 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"
        />
      </div>
    </section>
  );
}
