"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-blue-950 text-white py-16 md:py-20 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-950 to-black opacity-90" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Tim <span className="text-blue-400">Fashion Academy</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering the next generation of creative minds in fashion and design. 
            Excellence, skill, and innovation — that’s our fabric.
          </p>

          <div className="flex space-x-5 mt-6">
            {[
              { icon: <Instagram />, link: "#" },
              { icon: <Facebook />, link: "#" },
              { icon: <Twitter />, link: "#" },
              { icon: <Mail />, link: "mailto:info@timfashionacademy.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600/20 hover:bg-blue-600/40 p-3 rounded-full transition"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col"
        >
          <h3 className="text-lg font-semibold mb-4 text-blue-300">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="#hero" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#mentors" className="hover:text-blue-400 transition">
                Mentors
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-400 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-blue-300">
            Get In Touch
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>13 Eleganza Plaza, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a
                href="mailto:info@timfashionacademy.com"
                className="hover:text-blue-400 transition"
              >
                info@timfashionacademy.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-blue-800 mt-14 pt-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Tim Fashion Academy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
