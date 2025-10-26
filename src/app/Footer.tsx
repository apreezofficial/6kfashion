"use client";

import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  MapPin, 
  ArrowRight 
} from "lucide-react";

// Social links data
const socialLinks = [
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
  { icon: <Twitter size={18} />, href: "#", label: "Twitter/X" },
];

// Quick links data
const quickLinks = [
  { href: "#programs", label: "Our Programs" },
  { href: "#difference", label: "Our Difference" },
  { href: "#mentors", label: "Mentors" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
];

export default function Footer() {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add newsletter submission logic here
    alert("Thank you for subscribing!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden">
      
      {/* Dynamic Glow Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -top-1/4 left-0 w-full h-full bg-gradient-to-br from-violet-950/30 to-black opacity-50 blur-3xl pointer-events-none" 
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-1/4 right-0 w-full h-full bg-gradient-to-tl from-fuchsia-950/20 to-black opacity-50 blur-3xl pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Column 1: Brand & Socials (Larger) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <a href="#hero" className="text-3xl font-extrabold tracking-tighter mb-5 block">
              B<span className="text-fuchsia-500">Fashion</span> Academy
            </a>
            <p className="text-violet-200 text-base leading-relaxed max-w-md">
              Empowering the next generation of creative minds in fashion and design. 
              Excellence, skill, and innovation — that’s our fabric.
            </p>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2, color: '#ec4899', borderColor: '#ec4899' }}
                  className="flex items-center justify-center w-10 h-10 
                    border-2 border-violet-700 text-violet-300 rounded-full
                    transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 className="text-xl font-semibold mb-6 text-fuchsia-400 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-4 text-violet-200">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-fuchsia-400 transition-colors duration-300 group">
                    <span className="group-hover:mr-2 transition-all duration-300">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Newsletter Signup (NEW) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h3 className="text-xl font-semibold mb-6 text-fuchsia-400 tracking-wide uppercase">
              Join Our Newsletter
            </h3>
            <p className="text-violet-200 mb-6">
              Get the latest on new courses, exclusive events, and fashion insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <label htmlFor="email-newsletter" className="sr-only">Email address</label>
              <input
                type="email"
                id="email-newsletter"
                name="email"
                required
                className="w-full px-4 py-3 rounded-l-lg border border-violet-700 bg-violet-900/50 text-white 
                  focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 focus:bg-violet-900
                  outline-none transition-all duration-300 placeholder:text-violet-400"
                placeholder="you@example.com"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-bold p-3 rounded-r-lg
                  border border-fuchsia-500 hover:from-fuchsia-700 hover:to-violet-700
                  transition-all duration-300"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight size={24} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider & Sub-Footer */}
        <div className="relative z-10 border-t border-violet-800/70 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-violet-300 text-sm space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} B Fashion Academy. All Rights Reserved.
            </p>
            
            {/* Contact Info (Moved here for cleanliness) */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:info@bfashionacademy.com"
                className="flex items-center space-x-2 hover:text-fuchsia-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-fuchsia-400" />
                <span>info@bfashionacademy.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-fuchsia-400" />
                <span>13 Eleganza Plaza, Lagos, Nigeria</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
