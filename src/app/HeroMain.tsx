"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const play = async () => {
      await controls.start("open");
      // Optional chime sound
      const audio = new Audio("https://tim-academy.pxxl.pro/sounds/welcome.mp3");
      audio.play().catch(() => {});
    };
    play();
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center"
    >
      {/* ✨ Ambient light glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.2, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_80%)]"
      />

      {/* 🎭 Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        variants={{
          open: {
            x: "-100%",
            transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] },
          },
        }}
        className="absolute top-0 left-0 w-1/2 h-full z-30 
        bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 
        bg-[length:200%_100%] animate-[curtainWave_3s_infinite_ease-in-out]
        shadow-[inset_-10px_0_20px_rgba(0,0,0,0.3)]"
      />

      {/* 🎭 Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        variants={{
          open: {
            x: "100%",
            transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] },
          },
        }}
        className="absolute top-0 right-0 w-1/2 h-full z-30 
        bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 
        bg-[length:200%_100%] animate-[curtainWave_3s_infinite_ease-in-out]
        shadow-[inset_10px_0_20px_rgba(0,0,0,0.3)]"
      />

      {/* ✨ Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-20 max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-4 drop-shadow-md">
          Where Style Meets Skill.
        </h1>
        <p className="text-gray-600 md:text-lg mb-8">
          Step into elegance. Learn the craft of fashion design, tailoring, and
          creativity from Nigeria’s leading instructors.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition duration-300 hover:scale-105"
        >
          Begin Your Journey
        </a>
      </motion.div>

      {/* Soft ambient glow pulse */}
      <motion.div
        animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
      />

      {/* 👇 Tailwind keyframe for curtain wave */}
      <style>{`
        @keyframes curtainWave {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 0%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
