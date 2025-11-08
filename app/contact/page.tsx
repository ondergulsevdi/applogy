"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-[#0a0612] via-[#1a0b2e] to-[#16213e] pb-20">
      {/* Starry Background */}
      <div className="stars fixed inset-0 pointer-events-none"></div>
      <div className="grid-pattern fixed inset-0 pointer-events-none"></div>

      {/* Header */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
              Contact Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you.
            <p>
              <a 
                href="mailto:ondergulsevdi@gmail.com"
                className="text-orange-400 hover:text-orange-300 transition-colors underline"
              >
                ondergulsevdi@gmail.com
              </a>
            </p>
            <p>Ranelagh, Dublin</p>
            <p>Ireland</p>
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-[#1a0b2e] border border-orange-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/20 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/20 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-orange-500/20 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-green-300 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-red-300 font-medium">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Other Ways to Connect</h3>
            <p className="text-gray-400 mb-6">
              You can also reach us through our App Store developer page.
            </p>
            <a
              href="https://apps.apple.com/developer/onder-gulsevdi/id1495105773"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-bold text-white bg-white/5 border border-orange-500/30 rounded-xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View on App Store
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

