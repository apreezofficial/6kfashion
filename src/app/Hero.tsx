"use client";
import React, { useState, useEffect, useCallback } from "react";
// We assume Image is available in a Next.js environment, but since this is a single
// file component in a general React context, we will use a standard <img> tag
// and a placeholder URL for compatibility.

// Fallback image URL for use in a single-file environment
const IMAGE_URL = "https://i.pinimg.com/474x/f9/36/c1/f936c1ac2275f13d8dc375bb83bbaf2e.jpg";

// --- Custom Web Audio Function for the 'Rattling' Blind Sound ---
// This uses the Web Audio API to create a simple, browser-compatible sound effect
const playRattleSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Simple sweep noise to mimic a mechanical rattle/whir
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(500, audioContext.currentTime); // Start at 500Hz
    oscillator.frequency.linearRampToValueAtTime(150, audioContext.currentTime + 0.4); // Sweep down
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime); // Max volume
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4); // Fade out
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.4); // Play for 400ms
  } catch (error) {
    console.warn("Audio playback failed: Browser likely blocked autoplay. Please interact with the page.", error);
  }
};


const BFashionHeroSection: React.FC = () => {
  // State to control the blind opening animation
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Array of 10 elements to represent the individual blind slats
  const NUM_SLATS = 10;
  const slats = Array.from({ length: NUM_SLATS }, (_, i) => i);

  useEffect(() => {
    // 1. Play sound and trigger the reveal after a small delay on component mount
    playRattleSound();
    
    // 2. Start the visual animation
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 50); // Small delay to ensure sound starts first

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  // --- Theme Colors ---
  const DARK_VIOLET = "text-violet-800";
  const ACCENT_FUCHSIA = "text-fuchsia-500";
  const BG_VIOLET = "bg-violet-700";
  const HOVER_BG = "hover:bg-violet-800";
  const BORDER_COLOR = "border-violet-700";
  const OVERLAY_COLOR = "bg-violet-900/60";

  return (
    <section 
      id="hero"
      className="
        relative 
        min-h-screen
        flex 
        items-center 
        justify-center 
        text-center 
        bg-gray-50
        overflow-hidden
        pt-20
      "
    >
      
      {/* BACKGROUND VISUAL LAYER (Image + Dark Purple Overlay) */}
      <div className="absolute inset-0">
          {/* Using <img> tag for single-file React compatibility, instead of Next.js <Image> */}
          <img
            src={IMAGE_URL} 
            alt="B Fashion Academy Studio"
            className="w-full h-full object-cover opacity-80"
          />
        
        {/* Dark Violet Overlay */}
        <div className={`absolute inset-0 ${OVERLAY_COLOR}`}></div>
      </div>

      {/* WINDOW BLINDS OVERLAY (The Animation Layer) */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        {slats.map((index) => (
          <div
            key={index}
            // Each slat covers 1/10th of the screen height
            style={{ 
              height: `${100 / NUM_SLATS}%`, 
              transitionDelay: `${index * 0.05}s` // Staggered delay for 'ruffle' effect
            }}
            className={`
              absolute left-0 w-full 
              transform 
              ${isRevealed ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
              transition-all duration-700 ease-in-out
              bg-violet-900 
              border-b border-violet-950/50 
              shadow-lg
              
              /* Custom styling for realistic ruffle/depth look */
              ${index % 2 === 0 ? 'shadow-inner-sm' : 'shadow-inner-lg'}
            `}
          >
          </div>
        ))}
      </div>


      {/* CONTENT CONTAINER */}
      <div className="relative z-20 max-w-5xl px-6 md:px-12 py-20 text-white">
        
        {/* HEADLINE (H1) */}
        <h1 className={`
          text-5xl md:text-7xl 
          font-extrabold 
          mb-6 
          ${ACCENT_FUCHSIA} 
          leading-tight
          drop-shadow-lg
        `}>
          Launch Your Fashion Empire:
          <span className={`block text-white mt-2 ${DARK_VIOLET} drop-shadow-md`}>
            Master Design & Entrepreneurship
          </span>
        </h1>

        {/* SUB-HEADLINE */}
        <p className="
          text-xl md:text-2xl 
          mb-10 
          text-gray-200 
          max-w-3xl 
          mx-auto
          drop-shadow-md
        ">
          We don't just teach sewing—we build successful, industry-ready fashion entrepreneurs. Located in **[LAGOS, NIGERIA]**.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* PRIMARY CTA */}
          <a
            href="#application" 
            className={`
              ${BG_VIOLET} 
              ${HOVER_BG} 
              text-white 
              font-extrabold 
              py-4 px-10 
              rounded-xl 
              shadow-2xl 
              uppercase 
              tracking-wider 
              transition duration-300 
              transform hover:scale-105
            `}
          >
            [APPLY FOR THE NEXT TERM]
          </a>

          {/* SECONDARY CTA */}
          <a
            href="#programs" 
            className={`
              bg-transparent 
              border-2 
              ${BORDER_COLOR} 
              ${DARK_VIOLET}
              bg-white 
              font-bold 
              py-4 px-10 
              rounded-xl 
              transition duration-300 
              hover:bg-violet-100/50 
              shadow-lg
            `}
          >
            View Our Full Course Catalog
          </a>
        </div>
        
        {/* QUICK FEATURES STRIP */}
        <div className="mt-12 text-lg text-white flex flex-wrap justify-center gap-x-8 gap-y-4 font-semibold">
          <p className="flex items-center">
            <span className={`${ACCENT_FUCHSIA} mr-2 text-2xl`}>✦</span>
            Hands-on Garment Construction
          </p>
          <p className="flex items-center">
            <span className={`${ACCENT_FUCHSIA} mr-2 text-2xl`}>✦</span>
            Proven Business & Branding Modules
          </p>
          <p className="flex items-center">
            <span className={`${ACCENT_FUCHSIA} mr-2 text-2xl`}>✦</span>
            Showcase at **[Annual Fashion Event]**
          </p>
        </div>

      </div>
    </section>
  );
};

export default BFashionHeroSection;
