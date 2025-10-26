"use client";
import React from "react";
// Removed: import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const differences = [
  {
    title: "Tailoring Excellence",
    desc: "Master the art of precision and creativity with hands-on tailoring sessions guided by industry leaders and master couturiers.",
    icon: "✂️",
  },
  {
    title: "Runway Confidence",
    desc: "From sketch to showcase—build the confidence to create collections that command attention on any global runway.",
    icon: "✨",
  },
  {
    title: "Design Innovation",
    desc: "Learn to merge classic fashion principles with modern design thinking, digital creation, and sustainable practices.",
    icon: "💡",
  },
];

const AcademyDifference: React.FC = () => {
  // --- Violet/Fuchsia Theming ---
  const PRIMARY_TEXT = "text-violet-900";
  const SECONDARY_TEXT = "text-gray-700";
  const ACCENT_COLOR = "text-fuchsia-600";
  const LIGHT_BG = "from-fuchsia-50 via-white to-violet-100"; // Light background gradient
  const CARD_TEXT = "text-violet-800";
  const CARD_SHADOW = "shadow-violet-400/50";
  
  return (
    <section
      id="difference"
      className={`relative py-24 px-6 md:px-12 bg-gradient-to-br ${LIGHT_BG} overflow-hidden`}
    >
      {/* Subtle moving glow effect - now violet/fuchsia */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_80%)] bg-[length:200%_200%]"
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className={`text-4xl md:text-5xl font-extrabold ${PRIMARY_TEXT} mb-4`}>
          The <span className={ACCENT_COLOR}>B Fashion Difference</span>
        </h2>
        <p className={`text-lg ${SECONDARY_TEXT} max-w-2xl mx-auto`}>
          We don’t just teach fashion—we build designers who shape trends and redefine the future of creativity.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {differences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.7, type: "spring", stiffness: 100 }}
            className="group" // Used group class for hover effects
          >
            {/* Replaced Tilt with a standard div, added CSS hover for lift/scale effect */}
            <div
              className={`
                relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 h-full
                shadow-2xl ${CARD_SHADOW} transition duration-500
                transform group-hover:scale-[1.03] group-hover:-translate-y-1 
                
                /* ELEGANT FLUID BORDER */
                border-2 border-transparent 
                group-hover:border-fuchsia-400/70 /* Highlight border on hover */
                
                /* Custom gradient border effect on load/idle */
                after:content-[''] after:absolute after:inset-0 after:rounded-[15px] 
                after:p-[2px] after:bg-gradient-to-br after:from-violet-200 after:to-fuchsia-200 
                after:z-[-1] after:[mask:linear-gradient(#fff_0_0)content-box,linear-gradient(#fff_0_0)] 
                after:[mask-composite:exclude]
              `}
            >
              <div className="flex flex-col items-center text-center space-y-5">
                {/* Icon Animation with new colors */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0], // Subtle icon animation
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className={`text-5xl p-3 rounded-full ${ACCENT_COLOR} bg-fuchsia-50/50`}
                >
                  {item.icon}
                </motion.div>
                <h3 className={`text-2xl font-extrabold ${CARD_TEXT}`}>{item.title}</h3>
                <p className={SECONDARY_TEXT}>{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating soft particles - now purple/fuchsia */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-fuchsia-300/10 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/3 w-32 h-32 bg-violet-400/10 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ x: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-10 right-1/5 w-28 h-28 bg-fuchsia-400/10 blur-3xl rounded-full"
      />
    </section>
  );
};

export default AcademyDifference;
