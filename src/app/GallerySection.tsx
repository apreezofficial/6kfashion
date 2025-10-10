"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Tailoring class" },
  { src: "/images/gallery2.jpg", alt: "Design session" },
  { src: "/images/gallery3.jpg", alt: "Student creation" },
  { src: "/images/gallery4.jpg", alt: "Fashion runway" },
  { src: "/images/gallery5.jpg", alt: "Workshop in progress" },
  { src: "/images/gallery6.jpg", alt: "Cutting and sewing" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-blue-50 to-blue-100 overflow-hidden">
      {/* ✨ Subtle blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6"
        >
          Our <span className="text-blue-700">Creative Gallery</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        >
          A glimpse into the creativity, craftsmanship, and innovation that define
          <span className="text-blue-700 font-semibold"> Tim Fashion Academy.</span>  
          Every creation tells a story — inspired, designed, and made by our talented students.
        </motion.p>

        {/* 🖼️ Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
              onClick={() => setSelected(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={400}
                className="object-cover w-full h-64 md:h-80 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-700/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold tracking-wide">
                View Work
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🪄 Lightbox Preview */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-blue-950/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-3xl w-full"
            >
              <Image
                src={selected}
                alt="Gallery preview"
                width={1000}
                height={700}
                className="rounded-xl object-cover w-full h-auto shadow-2xl border-4 border-blue-600/40"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-blue-700/40 hover:bg-blue-700/60 text-white p-2 rounded-full backdrop-blur-md transition"
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
        
