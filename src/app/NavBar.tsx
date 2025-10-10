"use client";
import React, { useState } from "react";

const navLinks = [
  { name: "Programs", href: "#programs" },
  { name: "Alumni Success", href: "#alumni" },
  { name: "Our Difference", href: "#difference" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50 
        bg-white/80 backdrop-blur-lg 
        shadow-md transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl md:text-3xl font-extrabold tracking-tight 
                       text-blue-700 hover:text-blue-800 transition-colors"
          >
            Tim<span className="text-blue-500"> Fashion</span> Academy
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative text-gray-700 hover:text-blue-600 font-medium 
                  transition-colors group
                "
              >
                {link.name}
                <span
                  className="
                    absolute bottom-0 left-0 w-0 h-[2px] 
                    bg-blue-500 group-hover:w-full transition-all duration-300
                  "
                ></span>
              </a>
            ))}

            <a
              href="#contact"
              className="
                ml-4 bg-blue-600 hover:bg-blue-700 
                text-white font-semibold 
                py-2 px-6 rounded-full 
                shadow-sm transition duration-200
              "
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-700 hover:text-blue-800 transition"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
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
                className="h-6 w-6"
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
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 bg-white/90 backdrop-blur-lg shadow-md`}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                block text-gray-700 font-medium 
                hover:text-blue-600 transition
              "
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="
              block mt-2 text-center 
              bg-blue-600 hover:bg-blue-700 
              text-white font-semibold py-2 rounded-full
              transition
            "
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
