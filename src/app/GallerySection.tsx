"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
// Image component is replaced with standard <img> for better self-containment in this environment.

const galleryImages = [
  // Using high-contrast placeholders to match the BFA brand aesthetic
  { src: "https://placehold.co/800x600/6B20AF/ffffff?text=Couture+Draping+Class", alt: "Couture Draping Class" },
  { src: "https://placehold.co/800x1200/BD0D58/ffffff?text=Runway+Collection+Preview", alt: "Runway Collection Preview" },
  { src: "https://placehold.co/800x600/6B20AF/ffffff?text=Digital+Fashion+Workshop", alt: "Digital Fashion Workshop" },
  { src: "https://placehold.co/800x600/BD0D58/ffffff?text=Pattern+Drafting+Studio", alt: "Pattern Drafting Studio" },
  { src: "https://placehold.co/800x1200/6B20AF/ffffff?text=Student+Final+Garment", alt: "Student Final Garment" },
  { src: "https://placehold.co/800x600/BD0D58/ffffff?text=Textile+Innovation+Lab", alt: "Textile Innovation+Lab" },
  { src: "https://placehold.co/800x600/6B20AF/ffffff?text=Mentor+Critique+Session", alt: "Mentor Critique Session" },
  { src: "https://placehold.co/800x1200/BD0D58/ffffff?text=Fashion+Entrepreneurship", alt: "Fashion Entrepreneurship" },
  { src: "https://placehold.co/800x600/6B20AF/ffffff?text=Haute+Couture+Embroidery", alt: "Haute Couture Embroidery" },
];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  // --- Theme & Style Helpers (Literal Tailwind Class Names) ---
  // Using direct class names to avoid dynamic string concatenation errors
  const gridClasses = [
    "md:col-span-1 md:row-span-2", // Tall
    "md:col-span-2 md:row-span-1", // Wide
    "md:col-span-1 md:row-span-1", // Square
    "md:col-span-1 md:row-span-1", // Square
    "md:col-span-2 md:row-span-2", // Large Square
    "md:col-span-1 md:row-span-1", // Square
    "md:col-span-1 md:row-span-1", // Square
    "md:col-span-1 md:row-span-2", // Tall
    "md:col-span-2 md:row-span-1", // Wide
  ];

  return (
    <section 
      id="gallery" 
      className={`relative py-32 bg-gradient-to-b from-white via-violet-50 to-fuchsia-50 overflow-hidden`}
    >
      {/* 🌟 Section Heading */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-5xl md:text-7xl font-black text-center text-violet-900 mb-4 uppercase tracking-tighter drop-shadow-lg`}
        >
          The <span className={`text-fuchsia-600`}>Exhibition</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-gray-700 max-w-3xl mx-auto mb-20 font-light text-center"
        >
          A curated view of craftsmanship, innovation, and style—creations inspired, designed, and launched by our talented students.
        </motion.p>

        {/* 🖼️ Gallery Grid (Dynamic Masonry) */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {galleryImages.slice(0, 9).map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`
                relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl 
                transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-600/50
                ${gridClasses[i]} 
                aspect-square md:aspect-auto
              `}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                // No width/height attributes needed since Tailwind handles sizing via classes
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay with Gradient and Text */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6
                  border-4 border-transparent group-hover:border-fuchsia-600/70 rounded-3xl
                `}
              >
                <div className="text-white text-lg font-bold tracking-wide leading-snug">
                  {img.alt}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🪄 Lightbox Preview (Modal) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 bg-violet-900/90 flex items-center justify-center p-4 backdrop-blur-sm`}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selected}
                alt="Gallery preview"
                className={`rounded-2xl object-cover w-full h-auto shadow-2xl border-4 border-fuchsia-600/40`}
              />
              <button
                onClick={() => setSelected(null)}
                className={`absolute top-4 right-4 bg-fuchsia-600/40 hover:bg-fuchsia-600/70 text-white p-3 rounded-full backdrop-blur-md transition text-lg font-bold`}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
           }
        
