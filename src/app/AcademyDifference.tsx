"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const differences = [
  {
    title: "Tailoring Excellence",
    desc: "Master the art of precision and creativity with hands-on tailoring sessions guided by industry leaders.",
    icon: "🧵",
  },
  {
    title: "Runway Confidence",
    desc: "From sketch to showcase — build the confidence to create collections that stand out on any runway.",
    icon: "💃",
  },
  {
    title: "Design Innovation",
    desc: "Learn to merge classic fashion principles with modern design thinking and digital creativity.",
    icon: "🎨",
  },
];

const AcademyDifference: React.FC = () => {
  return (
    <section
      id="difference"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Subtle moving light effect */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_80%)] bg-[length:200%_200%]"
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          The <span className="text-blue-600">Academy Difference</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We don’t just teach fashion — we build designers who shape trends and redefine creativity.
        </p>
      </motion.div>

      {/* 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {differences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.7, type: "spring" }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={1200}
              scale={1.05}
              gyroscope={true}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 hover:shadow-blue-200 transition duration-500"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="text-5xl"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-blue-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Floating soft particles */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-blue-300/10 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/3 w-32 h-32 bg-blue-400/10 blur-3xl rounded-full"
      />
    </section>
  );
};

export default AcademyDifference;
