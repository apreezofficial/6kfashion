"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Featured Alumnus Data ---
const featuredAlumnus = {
  name: "Amina Bello",
  brand: "AMINA Studios",
  story: "Amina graduated in 2023 and immediately launched her signature couture line, AMINA Studios. Her work, which blends traditional Nigerian textiles with modern, architectural silhouettes, was featured in Lagos Fashion Week and is now stocked in three international boutiques.",
  quote: "B Fashion Academy didn't just teach me to sew. It taught me to see, to think, and to build a brand from a single thread of an idea.",
  image: "https://placehold.co/800x1000/1e1b4b/f472b6?text=Amina+Bello&font=lora",
  href: "#",
};

// --- Alumni Grid Data ---
const alumniGrid = [
  {
    name: "Chinedu Okeke",
    brand: "CHI. Outerwear",
    image: "https://placehold.co/600x700/1e1b4b/f472b6?text=Chinedu+Okeke&font=lora",
    href: "#",
  },
  {
    name: "Fatima Ibrahim",
    brand: "Digital Patternist",
    image: "https://placehold.co/600x700/1e1b4b/f472b6?text=Fatima+Ibrahim&font=lora",
    href: "#",
  },
  {
    name: "Dele Adeboye",
    brand: "DELE Bridal",
    image: "https://placehold.co/600x700/1e1b4b/f472b6?text=Dele+Adeboye&font=lora",
    href: "#",
  },
];

export default function AlumniShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="alumni-showcase"
      className="relative bg-black text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Dynamic Glow Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -top-1/4 left-0 w-full h-full bg-gradient-to-br from-violet-900 to-black blur-3xl pointer-events-none" 
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-1/4 right-0 w-full h-full bg-gradient-to-tl from-fuchsia-900 to-black blur-3xl pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md tracking-tighter">
            Our <span className="text-fuchsia-400">Success Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-violet-200 max-w-3xl mx-auto">
            We don't just build designers; we launch careers. Our alumni are shaping the future of fashion.
          </p>
        </motion.div>

        {/* --- Featured Alumnus Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:mb-32"
        >
          {/* Featured Image */}
          <motion.div variants={itemVariants} className="w-full h-[500px] md:h-[600px]">
            <img
              src={featuredAlumnus.image}
              alt={featuredAlumnus.name}
              className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-fuchsia-500/20 border-4 border-violet-800/50"
            />
          </motion.div>

          {/* Featured Story */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="w-24 h-1 bg-fuchsia-500 mb-6" />
            <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {featuredAlumnus.name}
            </h3>
            <p className="text-xl font-semibold text-fuchsia-400 mb-6">
              Founder, {featuredAlumnus.brand}
            </p>
            <blockquote className="text-2xl italic text-violet-100 border-l-4 border-fuchsia-500 pl-6 mb-8">
              {featuredAlumnus.quote}
            </blockquote>
            <p className="text-violet-200 text-lg leading-relaxed mb-10">
              {featuredAlumnus.story}
            </p>
            <motion.a
              href={featuredAlumnus.href}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(236, 72, 153, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 text-lg font-bold text-white py-4 px-10 rounded-full 
                bg-gradient-to-r from-fuchsia-600 to-violet-600 shadow-xl shadow-fuchsia-400/50 
                hover:from-fuchsia-700 hover:to-violet-700 transition-all duration-300 w-full sm:w-auto"
            >
              View Her Brand
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --- Alumni Grid --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            More Driving Fashion Forward
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {alumniGrid.map((alumni) => (
            <motion.div
              key={alumni.name}
              variants={itemVariants}
              className="group relative bg-violet-950/30 border border-violet-800/70 rounded-2xl shadow-xl overflow-hidden
                transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/30 hover:border-fuchsia-600"
            >
              <a href={alumni.href} className="block">
                <div className="w-full h-80 overflow-hidden">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {alumni.name}
                  </h4>
                  <p className="text-md text-fuchsia-400 font-medium">
                    {alumni.brand}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
