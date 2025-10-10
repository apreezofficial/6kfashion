"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const courses = [
  {
    title: "Fashion Design",
    desc: "Learn the art of design thinking, garment creation, and modern tailoring techniques.",
    icon: "🎨",
  },
  {
    title: "Pattern Drafting",
    desc: "Master the science of precision, measurement, and creative pattern construction.",
    icon: "✂️",
  },
  {
    title: "Styling & Branding",
    desc: "Develop your brand identity, storytelling, and personal fashion signature.",
    icon: "💎",
  },
  {
    title: "Digital Fashion",
    desc: "Explore 3D fashion, virtual fitting, and AI-assisted design innovation.",
    icon: "🧠",
  },
];

export default function CoursesSection() {
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
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-6"
        >
          Courses <span className="text-blue-500">We Offer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-900 dark:text-gray-300 max-w-2xl mx-auto mb-16"
        >
          Empower your creativity with structured, skill-based programs designed to elevate your fashion journey.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course, i) => (
            <Tilt key={i} tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <motion.div
                initial={{ opacity: 0, y: 40, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: i * 0.15, duration: 1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-[2px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 h-full flex flex-col items-center text-center space-y-4">
                  <span className="text-5xl">{course.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{course.desc}</p>

                  {/* Hover overlay glow */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="absolute inset-0 rounded-3xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
