"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Theme Constants ---
const PRIMARY_TEXT = "text-violet-900";
const ACCENT_COLOR = "text-fuchsia-600";
const ACCENT_BG_LIGHT = "bg-fuchsia-50";
const BUTTON_BG = "bg-fuchsia-700 hover:bg-fuchsia-800";

// --- Program Data Structured by Category ---
const programs = [
  {
    category: "COUTURE & DESIGN",
    items: [
      {
        title: "Advanced Couture Techniques",
        duration: "12 Months",
        focus: "High-end hand finishing, draping, and luxury fabric handling.",
        icon: "👑",
      },
      {
        title: "Digital Fashion Illustration",
        duration: "3 Months",
        focus: "Mastering Procreate & Adobe Fresco for modern fashion sketching.",
        icon: "💻",
      },
      {
        title: "Bridal Wear and Evening Gowns",
        duration: "9 Months",
        focus: "Specialization in structured garments, corsetry, and embroidery.",
        icon: "💍",
      },
    ],
  },
  {
    category: "FASHION BUSINESS",
    items: [
      {
        title: "Fashion Entrepreneurship 101",
        duration: "6 Months",
        focus: "Brand development, legal setup, and market penetration strategies.",
        icon: "💼",
      },
      {
        title: "E-commerce and Digital Marketing",
        duration: "4 Months",
        focus: "Shopify setup, SEO, and targeted social media campaign execution.",
        icon: "📈",
      },
      {
        title: "Supply Chain & Ethical Sourcing",
        duration: "5 Months",
        focus: "Sustainable practices, inventory management, and global logistics.",
        icon: "🌍",
      },
    ],
  },
  {
    category: "TECHNICAL SKILLS",
    items: [
      {
        title: "Master Pattern Drafting",
        duration: "10 Months",
        focus: "Precision flat pattern making for all garment types (menswear and womenswear).",
        icon: "📐",
      },
      {
        title: "Garment Construction & Tailoring",
        duration: "8 Months",
        focus: "Industrial machine operation, pocket setting, and tailored jacket creation.",
        icon: "🧵",
      },
      {
        title: "3D Digital Prototyping (CLO3D)",
        duration: "4 Months",
        focus: "Creating virtual samples and reducing development costs using 3D software.",
        icon: "💿",
      },
    ],
  },
];

const ProgramCatalog: React.FC = () => {
  const [activeTab, setActiveTab] = useState(programs[0].category);
  const activeProgramList = programs.find((p) => p.category === activeTab)?.items || [];

  const containerVariants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.05 } },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="programs" className={`py-20 md:py-32 px-6 md:px-12 ${ACCENT_BG_LIGHT} relative overflow-hidden`}>
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-fuchsia-300/30 blur-3xl opacity-50 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-violet-300/30 blur-3xl opacity-50 rounded-full"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className={`text-4xl md:text-6xl font-extrabold ${PRIMARY_TEXT} mb-3`}>
          Curriculum <span className={ACCENT_COLOR}>Tracks</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore our specialized programs designed to cultivate technical mastery, artistic vision, and business acumen.
        </p>
      </motion.div>

      {/* Program Tabs/Segmented Control */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center flex-wrap gap-4 mb-16 relative z-10"
      >
        {programs.map((p) => (
          <button
            key={p.category}
            onClick={() => setActiveTab(p.category)}
            className={`
              py-3 px-6 rounded-full font-semibold transition-all duration-300
              uppercase tracking-wide text-sm md:text-base shadow-lg
              ${
                activeTab === p.category
                  ? `${BUTTON_BG} text-white transform scale-[1.05] ring-4 ring-fuchsia-300`
                  : 'bg-white text-gray-600 hover:bg-fuchsia-100 hover:text-violet-800'
              }
            `}
          >
            {p.category}
          </button>
        ))}
      </motion.div>

      {/* Program Cards Display */}
      <motion.div
        key={activeTab} // Key changes to trigger re-animation on tab switch
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
      >
        {activeProgramList.map((program, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`
              relative bg-white rounded-2xl p-8 shadow-xl border-t-4 border-fuchsia-400
              overflow-hidden group cursor-pointer
              transition-all duration-300 
              hover:shadow-3xl hover:shadow-violet-500/50 hover:border-violet-600
              transform hover:scale-[1.02]
            `}
          >
            {/* Background Glow on Hover */}
            <div className={`
              absolute inset-0 z-0 opacity-0 group-hover:opacity-10 
              bg-gradient-to-br from-fuchsia-200/50 to-violet-200/50 rounded-2xl
              transition-opacity duration-500
            `}></div>

            <div className="relative z-10 space-y-4">
              {/* Icon and Title */}
              <div className="flex items-center space-x-4 mb-4">
                <span className={`text-4xl p-2 rounded-lg ${ACCENT_COLOR} ${ACCENT_BG_LIGHT} border-2 border-fuchsia-300`}>
                  {program.icon}
                </span>
                <h3 className={`text-2xl font-extrabold ${PRIMARY_TEXT} leading-snug`}>
                  {program.title}
                </h3>
              </div>

              {/* Details */}
              <p className="text-gray-600 font-medium">{program.focus}</p>

              {/* Duration Tag */}
              <div className="pt-2">
                <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider 
                bg-violet-100 ${ACCENT_COLOR} border border-violet-200`}>
                  Duration: {program.duration}
                </span>
              </div>
            </div>
            
            {/* Floating Arrow on Hover */}
            <motion.div 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute right-6 top-8 text-3xl opacity-0 group-hover:opacity-100 text-fuchsia-600 transition-opacity"
            >
              &rarr;
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Final Call to Action */}
      <div className="text-center mt-20">
        <a
          href="#contact"
          className={`inline-flex items-center px-10 py-4 font-bold rounded-full text-white shadow-xl
          ${BUTTON_BG} transition duration-300 transform hover:scale-[1.03] ring-2 ring-transparent hover:ring-fuchsia-400/50`}
        >
          View Full Curriculum Brochure (PDF)
        </a>
      </div>
    </section>
  );
};

export default ProgramCatalog;
