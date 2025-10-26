"use client";

import React from "react";
import { motion } from "framer-motion";
// Removed Tilt dependency
import { Linkedin, Instagram } from "lucide-react"; // lucide-react is assumed to be available

// Placeholder image generation function for variety
const getPlaceholderImage = (seed) => 
  `https://placehold.co/400x400/3b0764/f0abf2?text=${seed}`;

const mentors = [
  {
    name: "Tolu Adeyemi",
    role: "Head of Tailoring & Couture",
    quote: "Precision is the ultimate luxury. I teach mastery, not mere completion.",
    image: getPlaceholderImage("T.A"),
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Amara Chike",
    role: "Creative Design Lead",
    quote: "Fashion is language. Learn to speak it fluently, boldly, and uniquely.",
    image: getPlaceholderImage("A.C"),
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Ifeoluwa Bello",
    role: "Pattern & Fabric Expert",
    quote: "Understanding textiles is understanding gravity. They must obey your vision.",
    image: getPlaceholderImage("I.B"),
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Chidera Okafor",
    role: "Modern Fashion Instructor",
    quote: "The future of fashion is sustainable. Innovate or be left behind.",
    image: getPlaceholderImage("C.O"),
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Dayo Olawale",
    role: "Fashion Business Strategist",
    quote: "A perfect garment needs a flawless business plan to succeed globally.",
    image: getPlaceholderImage("D.O"),
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Zainab Musa",
    role: "Visual Merchandising Specialist",
    quote: "How you present your work is as important as the work itself. Master the narrative.",
    image: getPlaceholderImage("Z.M"),
    socials: { linkedin: "#", instagram: "#" },
  },
];

const MentorsSection = () => {
  // --- Theme Colors ---
  const ACCENT_COLOR = "text-fuchsia-400";
  const PRIMARY_BG = "from-indigo-950 via-violet-950 to-purple-900"; 
  const CARD_HOVER_SHADOW = "shadow-fuchsia-500/40";
  const TEXT_SUBTLE = "text-violet-200";

  return (
    <section 
      className={`relative py-24 bg-gradient-to-br ${PRIMARY_BG} text-white overflow-hidden`}
    >
      {/* 🌟 Extreme Ambient Shimmer/Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.15)_0%,transparent_70%)]"
      />

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-widest drop-shadow-lg"
        >
          Meet the <span className={ACCENT_COLOR}>Masters</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className={`text-xl ${TEXT_SUBTLE} max-w-3xl mx-auto italic`}
        >
          Guided by the industry's elite—creators, entrepreneurs, and visionaries who redefine fashion artistry.
        </motion.p>
      </div>

      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto relative z-10">
        {mentors.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className={`
              rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm 
              border border-fuchsia-700/30 transition-all duration-500 cursor-pointer group
              hover:shadow-3xl ${CARD_HOVER_SHADOW} hover:scale-[1.03]
            `}
          >
            <div className="flex flex-col items-center p-8 text-center relative">
              
              {/* Image & Shimmer Effect */}
              <div className="relative mb-6">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-36 h-36 rounded-full object-cover border-4 border-fuchsia-400/50 shadow-xl"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/6b21a8/ffffff?text=B" }}
                />
                {/* Image Border Glow on Hover */}
                <div 
                  className={`absolute inset-0 rounded-full border-4 border-transparent 
                  group-hover:border-fuchsia-400/80 transition-all duration-300 transform scale-100 group-hover:scale-105`} 
                />
              </div>

              <h3 className="text-xl font-bold mb-1 tracking-wider">{m.name}</h3>
              <p className={`text-sm font-medium italic ${ACCENT_COLOR} mb-3`}>{m.role}</p>
              
              {/* Detailed Quote */}
              <p className={`text-sm ${TEXT_SUBTLE} italic mb-4 max-w-xs`}>
                &ldquo;{m.quote}&rdquo;
              </p>

              <div className="flex space-x-5 mt-2">
                <a href={m.socials.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn of ${m.name}`}>
                  <Linkedin className="w-5 h-5 text-fuchsia-300 hover:text-white transition transform hover:scale-125" />
                </a>
                <a href={m.socials.instagram} target="_blank" rel="noreferrer" aria-label={`Instagram of ${m.name}`}>
                  <Instagram className="w-5 h-5 text-fuchsia-300 hover:text-white transition transform hover:scale-125" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* 💎 Extra Floating Shimmer Lights (Sparkling Mad) */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
          y: ["-10%", "110%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 15, // Slower movement
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: ["10%", "-110%"],
          y: ["110%", "-10%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 18, // Slower movement
          ease: "linear",
          delay: 5,
        }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default MentorsSection;
