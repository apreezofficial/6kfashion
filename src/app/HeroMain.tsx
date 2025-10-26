"use client";
import React, { useEffect } from "react";
// Assuming framer-motion is available in the environment
import { motion, useAnimation } from "framer-motion"; 

// --- Custom Web Audio Function for the Dramatic Curtain Swell ---
// This uses the Web Audio API to create a simple, browser-compatible sound effect
const playDramaticSwell = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Use a low sine wave for a deep, dramatic swell (like a gong or synth pad)
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(80, audioContext.currentTime); // Start low
    
    // Volume envelope: quickly ramp up and fade out
    gainNode.gain.setValueAtTime(0.001, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.5, audioContext.currentTime + 0.05); // Quick attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.2); // Slow decay
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1.2); // Play for 1.2 seconds
  } catch (error) {
    console.warn("Audio playback failed: Browser likely blocked autoplay.");
  }
};


const BFashionCurtainHero: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const playCurtain = async () => {
      // Play the custom dramatic sound swell immediately
      playDramaticSwell();

      // Start curtain animation after a slight delay to synchronize with sound
      await controls.start("open");
    };
    playCurtain();
  }, [controls]);

  // --- Violet/Fuchsia Theming ---
  const PRIMARY_COLOR = "text-violet-900";
  const ACCENT_COLOR = "text-fuchsia-600";
  const CTA_BG = "bg-fuchsia-700 hover:bg-fuchsia-800";
  const SHADOW_COLOR = "hover:shadow-fuchsia-500/30";
  
  // Custom deep violet gradient for the curtains
  const CURTAIN_GRADIENT = "bg-[linear-gradient(100deg,#2e1065_0%,#5b21b6_50%,#4c1d95_100%)]"; // Deep Violet to Indigo

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden 
      bg-gradient-to-br from-fuchsia-50 via-white to-violet-100 text-center pt-24"
    >
      {/* 🟣 Ambient glow pulse - now violet/fuchsia */}
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_80%)]"
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
              duration: 1.1, // Slightly slower transition for more drama
              ease: [0.77, 0, 0.175, 1],
            },
          },
        }}
        className={`absolute top-0 left-0 w-1/2 h-full z-30 
        ${CURTAIN_GRADIENT}
        shadow-[inset_-10px_0_25px_rgba(0,0,0,0.4)]
        [mask-image:radial-gradient(circle_at_center,black_80%,transparent_100%)]
        overflow-hidden`}
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
              duration: 1.1, // Slightly slower transition for more drama
              ease: [0.77, 0, 0.175, 1],
            },
          },
        }}
        className={`absolute top-0 right-0 w-1/2 h-full z-30 
        bg-[linear-gradient(260deg,#2e1065_0%,#5b21b6_50%,#4c1d95_100%)]
        shadow-[inset_10px_0_25px_rgba(0,0,0,0.4)]
        [mask-image:radial-gradient(circle_at_center,black_80%,transparent_100%)]
        overflow-hidden`}
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
        <h1 className={`text-4xl md:text-6xl font-extrabold ${PRIMARY_COLOR} leading-tight mb-4 drop-shadow`}>
          B Fashion Academy:
          <span className={`block ${ACCENT_COLOR} mt-1`}>
            The Stage Where Style Meets Skill.
          </span>
        </h1>
        <p className="text-gray-600 md:text-lg mb-8">
          Step into elegance. Master the craft of fashion design, tailoring, and
          creativity from Nigeria’s leading instructors.
        </p>
        <a
          href="#contact"
          className={`inline-block ${CTA_BG} text-white font-semibold py-3 px-8 rounded-full 
          shadow-lg ${SHADOW_COLOR} transition duration-300 hover:scale-105`}
        >
          Begin Your Journey
        </a>
      </motion.div>

      {/* 💎 Soft Light Aura */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]"
      />
    </section>
  );
};

export default BFashionCurtainHero;
