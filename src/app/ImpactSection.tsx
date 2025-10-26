"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
// Removed Tilt dependency

const stats = [
  { number: 1200, label: "Students Trained", icon: "🎓" },
  { number: 150, label: "Projects Launched", icon: "✂️" },
  { number: 95, label: "Graduate Success Rate", unit: "%", icon: "✨" },
];

export default function ImpactSection() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const controls = useAnimation();

  // --- Theme Constants ---
  const PRIMARY_TEXT = "text-violet-900";
  const ACCENT_COLOR = "text-fuchsia-600";
  const LIGHT_BG = "from-white via-violet-50 to-fuchsia-50"; 
  const CARD_BG = "bg-white/90 backdrop-blur-md";
  const ACCENT_SHADOW = "shadow-violet-400/60";

  // Counter animation logic
  useEffect(() => {
    const startCounting = () => {
      const intervals = stats.map((stat, index) => {
        // Set up the interval for smooth counting
        const increment = stat.number / 100; // 100 steps
        return setInterval(() => {
          setCounters((prev) => {
            const newCounters = [...prev];
            if (newCounters[index] < stat.number) {
              // Ensure we don't exceed the target number
              newCounters[index] = Math.min(stat.number, newCounters[index] + increment);
            } else {
              // Clear interval once target is reached
              clearInterval(intervals[index]);
            }
            return newCounters;
          });
        }, 20); // Fast interval for smooth counting
      });
    };

    // Use Intersection Observer for trigger, but for simplicity, we'll auto-start after a delay
    const timeout = setTimeout(startCounting, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  // Format the counter for display
  const formatCounter = (value, unit) => {
    const rounded = Math.floor(value);
    const suffix = unit === '%' ? '' : '+';
    
    // Add commas for thousands
    return `${rounded.toLocaleString()}${unit || suffix}`;
  };

  return (
    <section id="impact" className={`relative py-32 ${LIGHT_BG} overflow-hidden`}>
      {/* 🔮 Dramatic Background Glows and Orbs */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-fuchsia-400/10 blur-3xl rounded-full animate-slow-pulse" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-violet-400/10 blur-3xl rounded-full animate-slow-pulse delay-1000" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-5xl md:text-7xl font-extrabold ${PRIMARY_TEXT} mb-4 uppercase tracking-tight drop-shadow-md`}
        >
          Impact <span className={ACCENT_COLOR}>Speaks Loudest</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-gray-700 max-w-3xl mx-auto mb-20 font-light"
        >
          Beyond the classroom, our metrics define a legacy of **high achievement** and **industry placement**.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className={`
                relative ${CARD_BG} border border-violet-200 
                rounded-3xl shadow-xl p-10 
                transform transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl hover:${ACCENT_SHADOW}
                group overflow-hidden
              `}
            >
              {/* Decorative Accent Ring (The "Mad" Design) */}
              <div 
                className={`
                  absolute inset-0 m-[-2px] rounded-[30px] opacity-0 group-hover:opacity-100 
                  bg-gradient-to-br from-fuchsia-400 to-violet-500 
                  transition-opacity duration-500 z-0
                `}
                style={{ clipPath: 'inset(1px round 30px)' }} // Creates the glowing border effect
              />

              <div className="relative z-10">
                {/* Icon Circle */}
                <div className={`
                  w-16 h-16 mx-auto mb-5 
                  bg-fuchsia-100/70 border-2 border-fuchsia-300
                  rounded-full flex items-center justify-center text-4xl
                  ${ACCENT_COLOR} shadow-inner shadow-fuchsia-200
                `}>
                  {item.icon}
                </div>

                {/* Animated Counter */}
                <h3 className={`text-5xl md:text-6xl font-extrabold ${PRIMARY_TEXT} mb-3 tracking-tighter drop-shadow-sm`}>
                  {formatCounter(counters[i], item.unit)}
                </h3>
                
                {/* Label */}
                <p className="text-gray-700 text-xl font-semibold uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="text-center mt-20">
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          href="#alumni"
          className={`inline-flex items-center px-10 py-4 font-bold rounded-full text-white shadow-xl
          bg-violet-800 hover:bg-violet-900 transition duration-300 transform hover:scale-[1.05] ring-4 ring-transparent hover:ring-fuchsia-400/50`}
        >
          Read Alumni Success Stories &rarr;
        </motion.a>
      </div>
    </section>
  );
}
