import React from 'react';
 import Image from 'next/image'; 

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="
        relative 
        min-h-screen
      flex 
        items-center 
        justify-center 
        text-center 
        bg-page-bg
      overflow-hidden
        pt-20"
    >
      
      {/* BACKGROUND VISUAL LAYER */}
      <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/academy-studio.jpg" // Use your best high-quality, aspirational image
            alt="Tim Fashion Academy Studio"
            layout="fill"
            objectFit="cover"
            priority 
          />
        
        <div className="bg-accent-blue-light h-full w-full"></div> {/* Light Blue overlay for visual effect */}
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12">
        
        {/* HEADLINE (H1) */}
        <h1 className="
          text-5xl md:text-7xl 
          font-extrabold 
          mb-6 
          text-accent-blue // Dark Blue Accent
          leading-tight
        ">
          Launch Your Fashion Empire:
          <span className="block text-text-primary mt-2">
            Master Design & Entrepreneurship
          </span>
        </h1>

        {/* SUB-HEADLINE */}
        <p className="
          text-xl md:text-2xl 
          mb-10 
          text-text-secondary // Secondary Gray Text
          max-w-3xl 
          mx-auto
        ">
          We don't just teach sewing—we build successful, industry-ready fashion entrepreneurs. Located in **[LAGOS, NIGERIA]**.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* PRIMARY CTA - THE MOST IMPORTANT BUTTON */}
          <a
            href="#application" // Link to the application form section
            className="
              bg-accent-blue 
              hover:bg-accent-blue-dark 
              text-white 
              font-bold 
              py-4 px-10 
              rounded-lg 
              shadow-xl 
              uppercase 
              tracking-wider 
              transition duration-300 
              transform hover:scale-105
            "
          >
            [APPLY FOR THE NEXT TERM]
          </a>

          {/* SECONDARY CTA */}
          <a
            href="#programs" // Link to the Programs Section below
            className="
              bg-white 
              border-2 
              border-accent-blue 
              text-accent-blue 
              font-semibold 
              py-4 px-10 
              rounded-lg 
              transition duration-300 
              hover:bg-accent-blue-light // Light Blue Accent Hover
            "
          >
            View Our Full Course Catalog
          </a>
        </div>
        
        {/* QUICK FEATURES STRIP */}
        <div className="mt-12 text-lg text-text-primary flex flex-wrap justify-center gap-x-8 gap-y-4">
          <p className="flex items-center font-medium">
            <span className="text-accent-blue mr-2 text-2xl">✔</span>
            Hands-on Garment Construction
          </p>
          <p className="flex items-center font-medium">
            <span className="text-accent-blue mr-2 text-2xl">✔</span>
            Proven Business & Branding Modules
          </p>
          <p className="flex items-center font-medium">
            <span className="text-accent-blue mr-2 text-2xl">✔</span>
            Showcase at **[Annual Fashion Event]**
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
