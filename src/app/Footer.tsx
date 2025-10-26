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

// --- WhatsApp FAB Constants ---
const WHATSAPP_NUMBER = "2349064779856"; // Including Nigeria's country code (234) for reliability
const PRE_FILLED_MESSAGE = "Hi! I want to inquire about the B Fashion Academy programs and admission process.";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_MESSAGE)}`;

// Social links data
const socialLinks = [
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
  { icon: <Twitter size={18} />, href: "#", label: "Twitter/X" },
];

// Quick links data
const quickLinks = [
  { href: "/#programs", label: "Our Programs" },
  { href: "/#difference", label: "Our Difference" },
  { href: "/#mentors", label: "Mentors" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/alumni", label: "Our Alumni" },
  { href: "/#contact", label: "Contact Us" },
];

// Inline SVG for the WhatsApp logo
const WhatsAppIcon = (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    fill="currentColor" 
    className="w-8 h-8 md:w-10 md:h-10 text-white"
  >
    <path d="M380.9 97.4C339 55.4 283.4 32 224 32C112.9 32 20 125.8 20 256c0 40.5 11.4 79.5 33.1 113.8L16.2 458.7c-4.2 13.9 8.2 27 22.3 23.9l115.6-32.9c33 18.5 70.8 28.5 110.9 28.5c111.1 0 203.1-93.8 203.1-224C428 174.6 404.6 122.9 380.9 97.4zM224 456c-37.4 0-73.4-10.4-105-30.7l-7.2-4.4l-75.1 21.6l21.6-75.1l-4.4-7.2c-20.3-31.6-30.7-67.6-30.7-105c0-99.7 81-180.7 180.7-180.7s180.7 81 180.7 180.7S323.7 456 224 456zM340.2 240.2c-3.1-4.7-10.6-7.5-17.7-11.2c-7.1-3.7-15.6-7.1-24.8-10.9c-10.6-4.5-20.9-10.8-30.4-15.2c-10.3-4.9-20.8-10.7-29.4-13.4c-9.2-2.9-18.7-3.8-28.7-3.8c-10 0-18.3.9-25.1 2.8c-6.8 2-12.7 5-17.6 8.9c-4.9 3.9-9.1 8.9-12.5 15.1c-3.4 6.2-5.7 13.2-6.9 21.1c-1.2 7.9-1.5 16.5-1.5 25.8c0 10 1.9 19.8 5.7 29.3c3.8 9.5 9.1 18.7 15.9 27.6c6.8 8.9 14.8 17.7 24.1 26.4c9.3 8.7 19.7 17.5 31.4 26.2c11.7 8.7 24.7 17.3 39.2 25.7c14.5 8.4 30.5 16.7 48 24.5c17.5 7.8 36.8 15.3 58 22.2c13.7 4.3 26.7 7.7 38.8 9.3c12.1 1.6 23.6 1.7 34.6 0.2c11-1.5 21-4.7 30-9.6c8.9-4.8 16.6-11.4 23.1-19.8c6.5-8.4 11.2-18 13.9-28.8c2.7-10.8 3.3-22.3 1.8-34.5c-1.6-12.2-5.2-23.7-10.7-34.5c-5.5-10.8-12.7-20.7-21.6-29.7c-8.9-9-19-17.5-30.3-25.5c-11.3-8-23.9-15.7-37.6-23.2c-13.7-7.5-28.9-14.8-45.7-22.1c-16.7-7.3-35-14.4-54.8-21.1c-11.6-3.9-23.1-8-34.4-12.4c-11.4-4.4-22.3-9.5-32.9-15.2c-10.5-5.7-20.6-12.6-29.6-20.5c-9-7.9-17-17-23.9-27.2c-6.9-10.2-11.3-21.7-13.3-34.6z"/>
  </svg>
);


export default function Footer() {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a production app, you would submit this to your mailing list service
    // For this example, we use an alert as a successful submission indicator
    alert("Thank you for subscribing! We'll keep you updated on the latest in B Fashion Academy.");
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

      {/* --- WHATSAPP FLOATING ACTION BUTTON (FAB) --- */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us via WhatsApp"
      >
        <motion.div
          // Fixed position at the bottom right
          className="fixed bottom-6 right-6 z-[100] cursor-pointer 
                    bg-green-500 rounded-full p-4 shadow-2xl shadow-green-500/50"
          
          // Animation for the main button
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1, 
            boxShadow: ["0 0 15px #10b981", "0 0 30px #059669", "0 0 15px #10b981"] 
          }}
          transition={{ duration: 0.5, type: "spring", stiffness: 150, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          
          // Hover effects
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          {WhatsAppIcon}
        </motion.div>
      </a>
      {/* --- END WHATSAPP FAB --- */}

    </footer>
  );
}
