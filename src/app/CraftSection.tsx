"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Shirt, Palette } from "lucide-react";

const features = [
  {
    icon: <Scissors className="w-10 h-10 text-blue-700" />,
    title: "Precision Tailoring",
    desc: "Learn the timeless art of cutting and stitching with unmatched finesse.",
    color: "from-blue-100 to-blue-50",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-yellow-600" />,
    title: "Creative Design",
    desc: "Unleash your imagination with sketches that come alive in fabric.",
    color: "from-yellow-100 to-yellow-50",
  },
  {
    icon: <Shirt className="w-10 h-10 text-pink-600" />,
    title: "Modern Fashion",
    desc: "Stay ahead of trends while mastering the craft that never fades.",
    color: "from-pink-100 to-pink-50",
  },
  {
    icon: <Palette className="w-10 h-10 text-purple-600" />,
    title: "Color Mastery",
    desc: "Blend tones and textures like an artist creating wearable stories.",
    color: "from-purple-100 to-purple-50",
  },
];

const CraftSection = () => {
  return (
    <section
      id="craft"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Our Craft in Motion
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the soul of fashion through a fusion of tradition, design,
          and innovation — where every stitch tells a story.
        </p>
      </motion.div>

      {/* 3D Tilt Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={800}
            scale={1.05}
            glareEnable={true}
            glareMaxOpacity={0.25}
            glareColor="white"
            glarePosition="bottom"
            className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br hover:shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className={`flex flex-col items-center justify-center p-8 h-full bg-gradient-to-br ${item.color}`}
            >
              {item.icon}
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-3 text-center">{item.desc}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default CraftSection;
