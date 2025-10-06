import React, { useState } from 'react';

// Define the navigation links
const navLinks = [
  { name: 'Programs', href: '#programs' },
  { name: 'Alumni Success', href: '#alumni' },
  { name: 'Academy Difference', href: '#difference' },
  // Add more links as you build the page
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu after a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    // Fixed container at the top
    <nav className="
      fixed top-0 left-0 w-full 
      bg-page-bg/95 backdrop-blur-sm z-50 
      shadow-md 
      transition-all duration-300
    ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand Name */}
          <a href="#hero" className="flex-shrink-0 text-2xl font-extrabold text-accent-blue hover:text-accent-blue-dark">
            Tim Fashion Academy
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="
                  text-text-primary 
                  font-medium 
                  hover:text-accent-blue 
                  transition duration-150 
                  relative 
                  group
                "
              >
                {link.name}
                {/* Underline effect on hover */}
                <span className="
                  absolute bottom-0 left-0 h-[2px] 
                  bg-accent-blue w-0 
                  group-hover:w-full 
                  transition-all duration-300
                "></span>
              </a>
            ))}
            
            {/* Primary CTA Button */}
            <a 
              href="#application" 
              className="
                ml-4 
                bg-accent-blue 
                hover:bg-accent-blue-dark 
                text-white 
                font-bold 
                py-2 px-6 
                rounded-lg 
                transition duration-200
              "
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden text-accent-blue hover:text-accent-blue-dark focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {/* SVG for Hamburger/Close Icon */}
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-330`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="
                block px-3 py-2 rounded-md 
                text-base font-medium 
                text-text-primary 
                hover:bg-accent-blue-light hover:text-accent-blue
              "
            >
              {link.name}
            </a>
          ))}
          {/* Mobile CTA */}
          <a 
            href="#application"
            onClick={handleLinkClick}
            className="
              block px-3 py-2 mt-2 rounded-md 
              text-base font-medium text-center
              bg-accent-blue text-white 
              hover:bg-accent-blue-dark 
              transition duration-200
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
