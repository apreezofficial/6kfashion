"use client";
import React, { useState } from "react";

const navLinks = [
  { name: "Programs", href: "#programs" },
  { name: "Alumni Success", href: "alumni" },
  { name: "Our Difference", href: "#difference" },
];

const BFashionNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- Color Definitions for Purple/Violet Theme ---
  // Logo: Dark Violet primary, Bright Purple accent
  // Links: Dark Gray/Violet, Accent on hover
  // Button: Deep Violet background
  const PRIMARY_COLOR = "text-violet-700";
  const ACCENT_COLOR = "text-fuchsia-500";
  const HOVER_COLOR = "hover:text-fuchsia-500";
  const BUTTON_BG = "bg-violet-700 hover:bg-violet-800";
  const UNDERLINE_BG = "bg-fuchsia-500";

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50 
        bg-white/80 backdrop-blur-lg 
        shadow-lg transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-18 py-3">
          {/* Logo - B Fashion Academy */}
          <a
            href="#hero"
            className={`text-2xl md:text-3xl font-extrabold tracking-tighter ${PRIMARY_COLOR} hover:text-violet-900 transition-colors`}
          >
            B<span className={ACCENT_COLOR}>Fashion</span> Academy
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative text-gray-700 font-semibold 
                  ${HOVER_COLOR} transition-colors group
                `}
              >
                {link.name}
                <span
                  className={`
                    absolute bottom-0 left-0 w-0 h-[2px] 
                    ${UNDERLINE_BG} group-hover:w-full transition-all duration-300
                  `}
                ></span>
              </a>
            ))}

            <a
              href="#contact"
              className={`
                ml-4 ${BUTTON_BG} 
                text-white font-bold 
                py-2 px-6 rounded-full 
                shadow-md transition duration-200 transform hover:scale-[1.02]
              `}
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-violet-700 hover:text-violet-900 transition`}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-500 ease-in-out bg-white/95 shadow-xl`}
      >
        <div className="px-6 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                block text-lg font-medium py-2 
                text-gray-800 hover:text-violet-700 border-b border-gray-100
                transition
              `}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`
              block mt-4 text-center 
              ${BUTTON_BG} 
              text-white font-bold py-3 rounded-lg
              shadow-lg transition duration-200 transform hover:scale-[1.01]
            `}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BFashionNavBar;
