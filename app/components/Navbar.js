"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  function onSearch(e) {
    e.preventDefault();
    if (!query) return;
    window.location.href = `/blog?search=${encodeURIComponent(query)}`;
  }

  return (
    <header className="w-full bg-gradient-to-r from-[#071023] via-[#041026] to-[#0b1220] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold">
                SGN
              </div>
              <span className="text-white text-lg font-semibold">
                Shrinivas <span className="text-cyan-400">Nadager</span>
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/blog" className="text-gray-200 hover:text-white">
              Blog
            </Link>
            <Link href="/projects" className="text-gray-200 hover:text-white">
              Projects
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-white">
              About
            </Link>

            {/* Search */}
            <form onSubmit={onSearch} className="relative">
              <input
                aria-label="Search blogs"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-white/5 backdrop-blur-sm text-sm text-white placeholder-gray-300 rounded-full py-1.5 pr-10 pl-3 w-48 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Search blog..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-3"
              >
                <svg
                  className="w-4 h-4 text-gray-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </button>
            </form>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Open menu"
              className="p-2 rounded-md bg-white/5"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-[#041026] to-[#031022] border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/blog"
              className="block text-white"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/projects"
              className="block text-white"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="block text-white"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            {/* Mobile Search */}
            <form onSubmit={onSearch} className="mt-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-md p-2 bg-white/5 text-white"
                placeholder="Search blog..."
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
