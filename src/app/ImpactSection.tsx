"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function ImpactSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-[#f5f5f7] dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden">
      {/* Floating glowing orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-20 w-52 h-52 bg-blue-400/10 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Our <span className="text-[#FDC500]">Impact</span> Speaks
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16"
        >
          From zero to brilliance — we’ve empowered hundreds of creators, designers, and innovators to craft their future.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { number: "1.2k+", label: "Students Trained" },
            { number: "150+", label: "Projects Launched" },
            { number: "95%", label: "Graduate Success Rate" },
          ].map((item, i) => (
            <Tilt key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 transform transition-all hover:-translate-y-2"
              >
                <h3 className="text-4xl font-extrabold text-[#FDC500] mb-3">{item.number}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">{item.label}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
              }
    
