"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    // simple validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage("Thanks — you're subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        // Buttondown will return a message if already subscribed; show friendly message
        setMessage(
          data.message ||
            data.error ||
            "Something went wrong. Try again later.",
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Network error. Try again later.");
    }
  }

  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#071425] via-[#07182f] to-[#061220] text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold mb-2">
            Subscribe to my newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Get occasional updates about projects, blog posts, and resources.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              aria-label="Email address"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-3 text-sm ${status === "error" ? "text-rose-400" : "text-green-400"}`}
              role="status"
            >
              {message}
            </p>
          )}

          <p className="mt-4 text-xs text-gray-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
