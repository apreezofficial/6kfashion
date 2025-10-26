"use client";

import React from "react";

// Assuming your components are in a folder like 'app/components/'
// Adjust the path '../components/' if your structure is different.
import NavBar from "../components/NavBar";
import AlumniShowcase from "../components/AlumniShowcase";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

/**
 * Alumni Showcase Page
 * * This page is dedicated to showing off graduate success stories.
 * It includes the main navigation, the alumni content, a contact
 * section, and the main footer.
 */
export default function AlumniPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Main Navigation */}
      <BFashionNavBar />

      {/* Page Content */}
      <div className="flex-grow">
        {/* The main event: The alumni stories */}
        <AlumniShowcase />
        
        {/* A call-to-action to get in touch */}
        <ContactSection />
      </div>

      {/* Main Footer */}
      <Footer />
    </main>
  );
}
