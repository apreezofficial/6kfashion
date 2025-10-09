"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Linkedin, Instagram } from "lucide-react";

const mentors = [
  {
    name: "Tolu Adeyemi",
    role: "Head of Tailoring",
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    socials: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Amara Chike",
    role: "Creative Design Lead",
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    socials: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Ifeoluwa Bello",
    role: "Pattern & Fabric Expert",
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    socials: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Chidera Okafor",
    role: "Modern Fashion Instructor",
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    socials: {
      linkedin: "#",
      instagram: "#",
    },
  },
];

const MentorsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Ambient shimmer lights */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"
      />

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Meet the Mentors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-blue-100 max-w-2xl mx-auto"
        >
          Guided by the best minds in fashion — each mentor brings experience,
          mastery, and creativity that transform learning into artistry.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto relative z-10">
        {mentors.map((m, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            perspective={900}
            transitionSpeed={1200}
            glareEnable
            glareMaxOpacity={0.25}
            glareColor="#fff"
            className="rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center p-6"
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white/40 shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-blue-200 text-sm mb-4">{m.role}</p>

              <div className="flex space-x-4 mt-2">
                <a href={m.socials.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-5 h-5 text-white/70 hover:text-white transition" />
                </a>
                <a href={m.socials.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="w-5 h-5 text-white/70 hover:text-white transition" />
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Floating shimmer light */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
          y: ["-10%", "110%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default MentorsSection;
