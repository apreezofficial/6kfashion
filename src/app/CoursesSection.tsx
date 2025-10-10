"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const courses = [
  {
    title: "Fashion Design",
    desc: "Learn the core of design thinking, garment creation, and modern tailoring.",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Pattern Drafting",
    desc: "Master the science behind measurements, precision, and creative pattern cutting.",
    icon: "✂️",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Styling & Branding",
    desc: "Build your visual storytelling and become a top-tier stylist or fashion brand owner.",
    icon: "💎",
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Digital Fashion",
    desc: "Explore 3D fashion visualization, digital tailoring, and AI-aided designs.",
    icon: "🧠",
    color: "from-green-500 to-teal-500",
  },
];

export default function CoursesSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,197,0,0.08)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6"
        >
          Courses <span className="text-[#FDC500]">We Offer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16"
        >
          Discover our transformative courses designed to sharpen your creativity and technical mastery.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course, i) => (
            <Tilt key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: i * 0.2, duration: 1 }}
                viewport={{ once: true }}
                className={`group relative bg-gradient-to-br ${course.color} rounded-3xl p-[2px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 h-full flex flex-col items-center text-center space-y-4">
                  <span className="text-5xl">{course.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{course.desc}</p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300"
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
