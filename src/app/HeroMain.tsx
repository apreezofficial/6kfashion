"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const playCurtain = async () => {
      try {
        const audio = new Audio("https://tim-academy.pxxl.pro/sounds/welcome.mp3");
        audio.volume = 0.7;
        // Small delay before playing for sync
        setTimeout(() => audio.play().catch(() => {}), 200);

        // Start curtain animation
        await controls.start("open");
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    };
    playCurtain();
  }, [controls]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden 
      bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center"
    >
      {/* 🌈 Ambient glow pulse */}
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_80%)]"
      />

      {/* 🎭 Left Curtain */}
      <motion.div
        initial={{ x: 0, skewX: 0 }}
        animate={controls}
        variants={{
          open: {
            x: "-105%",
            skewX: -4,
            transition: {
              duration: 0.9,
              ease: [0.77, 0, 0.175, 1],
            },
          },
        }}
        className="absolute top-0 left-0 w-1/2 h-full z-30 
        bg-[linear-gradient(100deg,#002b64_0%,#004ba0_50%,#003a80_100%)]
        shadow-[inset_-10px_0_25px_rgba(0,0,0,0.4)]
        [mask-image:radial-gradient(circle_at_center,black_80%,transparent_100%)]
        overflow-hidden"
      >
        {/* 💫 Curtain folds / ripples */}
        <motion.div
          animate={{ x: ["0%", "-2%", "0%"], skewY: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-[linear-gradient(to-right,rgba(255,255,255,0.1)_10%,transparent_50%,rgba(255,255,255,0.1)_90%)] mix-blend-overlay"
        />
      </motion.div>

      {/* 🎭 Right Curtain */}
      <motion.div
        initial={{ x: 0, skewX: 0 }}
        animate={controls}
        variants={{
          open: {
            x: "105%",
            skewX: 4,
            transition: {
              duration: 0.9,
              ease: [0.77, 0, 0.175, 1],
            },
          },
        }}
        className="absolute top-0 right-0 w-1/2 h-full z-30 
        bg-[linear-gradient(260deg,#002b64_0%,#004ba0_50%,#003a80_100%)]
        shadow-[inset_10px_0_25px_rgba(0,0,0,0.4)]
        [mask-image:radial-gradient(circle_at_center,black_80%,transparent_100%)]
        overflow-hidden"
      >
        {/* 💫 Curtain folds / ripples */}
        <motion.div
          animate={{ x: ["0%", "2%", "0%"], skewY: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-[linear-gradient(to-left,rgba(255,255,255,0.1)_10%,transparent_50%,rgba(255,255,255,0.1)_90%)] mix-blend-overlay"
        />
      </motion.div>

      {/* ✨ Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        className="relative z-20 max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-4 drop-shadow">
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

      {/* 💎 Soft Light Aura */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
      />
    </section>
  );
};

export default Hero;
