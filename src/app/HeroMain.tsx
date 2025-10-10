"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const playCurtain = async () => {
      // Play whoosh first
      const whoosh = new Audio("https://tim-academy.pxxl.pro/sounds/curtain-whoosh.mp3");
      whoosh.volume = 0.6;
      whoosh.play().catch(() => {});

      // Open curtain animation
      await controls.start("open");

      // Then play chime
      const chime = new Audio("https://tim-academy.pxxl.pro/sounds/welcome.mp3");
      chime.volume = 0.4;
      chime.play().catch(() => {});
    };

    playCurtain();
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden 
      bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center"
    >
      {/* 🌈 Ambient shimmer light */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_80%)]"
      />

      {/* 🎭 Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        variants={{
          open: {
            x: "-120%",
            transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
          },
        }}
        className="absolute top-0 left-0 w-1/2 h-full z-30 
        bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600
        shadow-[inset_-12px_0_25px_rgba(0,0,0,0.3)]
        [mask-image:radial-gradient(circle_at_left_center,black_70%,transparent_100%)]
        animate-curtainWave"
      />

      {/* 🎭 Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        variants={{
          open: {
            x: "120%",
            transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
          },
        }}
        className="absolute top-0 right-0 w-1/2 h-full z-30 
        bg-gradient-to-l from-blue-900 via-blue-700 to-blue-600
        shadow-[inset_12px_0_25px_rgba(0,0,0,0.3)]
        [mask-image:radial-gradient(circle_at_right_center,black_70%,transparent_100%)]
        animate-curtainWave"
      />

      {/* ✨ Sparkle effect after reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [1, 1.3, 1] }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)] z-20 pointer-events-none"
      />

      {/* 🪩 Hero Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
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

      {/* 🌫 Light aura pulse */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
      />

      {/* 👇 Keyframes for wave movement */}
      <style>{`
        @keyframes curtainWave {
          0%, 100% { transform: translateX(0) scaleX(1); filter: brightness(1); }
          50% { transform: translateX(5px) scaleX(1.02); filter: brightness(1.05); }
        }
        .animate-curtainWave {
          animation: curtainWave 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
