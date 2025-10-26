"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Updated to the requested endpoint
      const res = await fetch("https://app.proforms.top/f/pr001", {
        method: "POST",
        body: formData,
      });

      // Assuming success if status is 200-299
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        // Attempt to read error message if available
        const errorText = await res.text();
        console.error("Submission failed:", errorText);
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Contact Form Submission Error:", error);
      setStatus("error");
    }
  };

  const statusMessages = {
    idle: "Send Message",
    loading: "Sending...",
    success: "Message Sent ✅",
    error: "Failed ❌ Try Again",
  };

  return (
    <section
      id="contact"
      className="relative bg-violet-950 py-24 md:py-32 text-white overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 drop-shadow-md"
        >
          Begin Your <span className="text-fuchsia-400">Masterclass</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-violet-200 mb-16 max-w-2xl mx-auto text-lg"
        >
          Got questions about our programs, admissions, or masterclasses? Reach out to our dedicated team.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl shadow-fuchsia-400/40 border-t-4 border-fuchsia-500/50"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-violet-800 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-violet-200 bg-violet-50/50 text-violet-900 
                  focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-violet-800 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-violet-200 bg-violet-50/50 text-violet-900 
                  focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-violet-800 mb-2">
                Your Inquiry
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-violet-200 bg-violet-50/50 text-violet-900 
                  focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none resize-none transition-all duration-300"
                placeholder="I am interested in the Couture Masterclass..."
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-10">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "loading"}
              className={`font-black text-white py-4 px-12 rounded-full transition-all duration-300 uppercase tracking-wider text-lg
                ${status === "loading" 
                  ? "bg-gray-500 cursor-not-allowed" 
                  : status === "success"
                  ? "bg-green-600 shadow-lg shadow-green-400/50"
                  : status === "error"
                  ? "bg-red-600 shadow-lg shadow-red-400/50"
                  : "bg-gradient-to-r from-fuchsia-600 to-violet-600 shadow-xl shadow-fuchsia-400/50 hover:from-fuchsia-700 hover:to-violet-700"
                }`}
            >
              {statusMessages[status]}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
