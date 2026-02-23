"use client";

import { useState } from "react";

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c6941cda-ae74-4e95-bef0-f31ff3d4c6fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success!");
        event.target.reset(); // clear form on success
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <section data-aos="fade-up" className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-cyan-400">Us</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Have a question or want to work together? Leave a message below.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div
          data-aos="fade-right"
          className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={result === "Sending..."}
              className={`w-full text-white font-semibold py-3 rounded-lg transition shadow-lg ${result === "Sending..."
                  ? "bg-slate-600 cursor-not-allowed"
                  : "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/20"
                }`}
            >
              {result === "Sending..." ? "Sending..." : "Submit"}
            </button>

            {result && result !== "Sending..." && (
              <p
                className={`text-center mt-4 text-sm font-medium ${result === "Success!" ? "text-green-400" : "text-red-400"
                  }`}
              >
                {result}
              </p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div data-aos="fade-left" className="flex flex-col justify-center space-y-8 pl-0 md:pl-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-400 leading-relaxed">
              Whether you have a question, a project inquiry, or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-cyan-400 mb-2">Email</h4>
            <a
              href="mailto:shrinivasnadager03@gmail.com"
              className="text-gray-300 hover:text-white transition text-lg"
            >
              shrinivasnadager03@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-medium text-cyan-400 mb-4">Connect on Socials</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Shrinivas-03"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 border border-slate-700 transition"
                aria-label="GitHub"
              >
                <img src="/github.svg" className="w-6 h-6" alt="GitHub" />
              </a>
              <a
                href="https://linkedin.com/in/shrinivas-nadager"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 border border-slate-700 transition"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.svg" className="w-6 h-6" alt="LinkedIn" />
              </a>
              <a
                href="https://twitter.com/ShrinivasN17892"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 border border-slate-700 transition"
                aria-label="Twitter"
              >
                <img src="/x.svg" className="w-6 h-6" alt="X" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
