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
      const res = await fetch("https://proforms.top/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else throw new Error("Submission failed");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-24 text-blue-800 overflow-hidden"
    >
      {/* Blue Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-100" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        >
          Contact <span className="text-blue-600">Tim Fashion Academy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-blue-500 mb-12 max-w-2xl mx-auto"
        >
          Got questions, inquiries, or partnership ideas? We’d love to hear from you.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-xl rounded-2xl p-8 md:p-10 max-w-3xl mx-auto border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-blue-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "loading"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300"
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Message Sent ✅"
                : status === "error"
                ? "Failed ❌ Try Again"
                : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
