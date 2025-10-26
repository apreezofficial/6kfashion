"use client";

import { motion } from "framer-motion";
import React from "react";
// react-parallax-tilt is not needed and has been excluded to prevent dependency errors.

const courses = [
  {
    title: "Couture Design & Draping",
    desc: "Master advanced design theory, custom draping techniques, and the construction of high-fashion garments.",
    icon: "👑",
  },
  {
    title: "Technical Pattern Mastery",
    desc: "Develop perfect fit using digital and traditional pattern drafting, grading, and complex sizing adjustments.",
    icon: "📏",
  },
  {
    title: "Fashion Business & Branding",
    desc: "Launch your label! Learn market strategy, supply chain management, financial planning, and retail dynamics.",
    icon: "💼",
  },
  {
    title: "Digital Design & 3D Prototyping",
    desc: "Explore CLO3D, virtual sampling, and AI tools to create sustainable, photorealistic fashion showcases.",
    icon: "💻",
  },
];

export default function CoursesSection() {
  // --- Theme Constants ---
  const PRIMARY_TEXT = "text-violet-900";
  const ACCENT_COLOR = "text-fuchsia-600";
  const LIGHT_BG = "from-white via-violet-50 to-fuchsia-50";
  const CARD_BG = "bg-white/95 backdrop-blur-md";
  const CARD_HOVER_SHADOW = "shadow-fuchsia-500/80";

  return (
    <section 
      id="courses" 
      className={`relative py-32 ${LIGHT_BG} overflow-hidden`}
    >
      {/* 🔮 Background Pattern and Glow */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2YjIwYWYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNiZDBkNTgiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC41IiBkPSJNMCA1MEw1MCAwTDEwMCA1MEw1MCAxMDBaIi8+PC9zdmc>")',
          backgroundSize: '300px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-5xl md:text-7xl font-black text-center ${PRIMARY_TEXT} mb-4 uppercase tracking-tighter drop-shadow-lg`}
        >
          Curated <span className={ACCENT_COLOR}>Course Catalog</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-gray-700 max-w-3xl mx-auto mb-20 font-light text-center"
        >
          Our specialized programs blend **haute couture tradition** with the **future of digital innovation**.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div
                className={`
                  relative ${CARD_BG} rounded-[32px] p-1 shadow-2xl transition-all duration-500
                  hover:-translate-y-3 hover:shadow-3xl hover:${CARD_HOVER_SHADOW}
                  border-2 border-transparent group-hover:border-fuchsia-300/50
                `}
              >
                {/* Inner Content Card */}
                <div 
                  className="rounded-[30px] p-8 h-full flex flex-col items-start space-y-4 text-left border border-violet-100"
                >
                  {/* Icon with Ring */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold 
                    bg-fuchsia-50 ${ACCENT_COLOR} ring-2 ring-fuchsia-300/70 shadow-md mb-2
                    transition-all duration-300 group-hover:bg-fuchsia-100 group-hover:ring-4
                  `}>
                    {course.icon}
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className={`text-2xl font-bold ${PRIMARY_TEXT} mt-4 group-hover:text-fuchsia-700 transition`}>
                    {course.title}
                  </h3>
                  <p className="text-gray-700 text-base font-light flex-grow">
                    {course.desc}
                  </p>
                  
                  {/* Read More Link */}
                  <a 
                    href="#" 
                    className={`inline-flex items-center text-sm font-semibold ${ACCENT_COLOR} hover:text-fuchsia-800 transition`}
                  >
                    View Curriculum &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
