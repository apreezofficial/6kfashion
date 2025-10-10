"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const playCurtain = async () => {
      // Play sound at the same time the curtain opens
      const audio = new Audio("https://tim-academy.pxxl.pro/sounds/welcome.mp3");
      audio.volume = 0.5;
      audio.play().catch(() => {});
      // Start the curtain animation
      await controls.start("open");
    };
    playCurtain();
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden 
      bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center"
    >
      {/* ✨ Ambient gradient pulse */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_80%)]"
      />

      {/* 🎭 Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        variants={{
          open: {
            x: "-110%",
            transition: {
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
            },
          },
        }}
        className="absolute top-0 left-0 w-1/2 h-full z-30 
        bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 
        shadow-[inset_-8px_0_20px_rgba(0,0,0,0.25)] 
        will-change-transform"
      />

      {/* 🎭 Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        variants={{
          open: {
            x: "110%",
            transition: {
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
            },
          },
        }}
        className="absolute top-0 right-0 w-1/2 h-full z-30 
        bg-gradient-to-l from-blue-900 via-blue-700 to-blue-600 
        shadow-[inset_8px_0_20px_rgba(0,0,0,0.25)] 
        will-change-transform"
      />

      {/* ✨ Hero Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        className="relative z-20 max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-4 drop-shadow-sm">
          Where Style Meets Skill.
        </h1>
        <p className="text-gray-600 md:text-lg mb-8">
          Step into elegance. Learn the craft of fashion design, tailoring, and
          creativity from Nigeria’s leading instructors.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full 
          shadow-lg hover:shadow-blue-500/30 transition duration-300 hover:scale-105"
        >
          Begin Your Journey
        </a>
      </motion.div>

      {/* 🔵 Light aura pulse */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
      />
    </section>
  );
};

export default Hero;
