"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Run animation when component mounts
    controls.start("open");

    // Optional: play welcome chime (must be triggered by user in most browsers)
    const audio = new Audio("/sounds/welcome.mp3");
    setTimeout(() => {
      audio.play().catch(() => {});
    }, 800);
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center"
    >
      {/* Curtain Panels */}
      <motion.div
        initial={{ width: "50%" }}
        animate={controls}
        variants={{
          open: {
            width: 0,
            transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] },
          },
        }}
        className="absolute top-0 left-0 h-full bg-blue-700 z-30"
      />
      <motion.div
        initial={{ width: "50%" }}
        animate={controls}
        variants={{
          open: {
            width: 0,
            transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] },
          },
        }}
        className="absolute top-0 right-0 h-full bg-blue-600 z-30"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-20 max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 leading-tight mb-4">
          Where Style Meets Skill.
        </h1>
        <p className="text-gray-600 md:text-lg mb-8">
          Learn the art of fashion design, tailoring, and creativity from experts who’ve shaped Nigeria’s fashion scene.
        </p>
        <a
          href="#application"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Begin Your Journey
        </a>
      </motion.div>

      {/* Optional subtle background animation */}
      <motion.div
        animate={{ opacity: [0.6, 0.8, 0.6], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
      />
    </section>
  );
};

export default Hero;
