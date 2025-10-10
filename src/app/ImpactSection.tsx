"use client";

import { motion, useAnimation } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";

const stats = [
  { number: 1200, label: "Students Trained" },
  { number: 150, label: "Projects Launched" },
  { number: 95, label: "Graduate Success Rate (%)" },
];

export default function ImpactSection() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.number / 80;
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.number) {
            newCounters[index] = Math.min(stat.number, newCounters[index] + increment);
          }
          return newCounters;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-950 overflow-hidden">
      {/* Floating blue orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-20 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-8"
        >
          Our <span className="text-blue-500">Impact</span> Speaks
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
          {stats.map((item, i) => (
            <Tilt key={i} tiltMaxAngleX={6} tiltMaxAngleY={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-blue-200 dark:border-blue-800 rounded-2xl shadow-lg p-10 transform transition-all hover:-translate-y-2"
              >
                {/* Spinner Coil Animation */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"
                />

                <h3 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-3">
                  {Math.floor(counters[i]).toLocaleString()}
                  {item.label.includes("%") ? "%" : "+"}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                  {item.label}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
