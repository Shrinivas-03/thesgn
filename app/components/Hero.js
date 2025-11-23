"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#020617] via-[#0c1a33] to-[#07182f] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-4">
          {/* Waving hand animation */}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl inline-block"
          >
            👋
          </motion.span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I’m <span className="text-cyan-400">Shrinivas Gopal Nadager</span>
          </h1>

          <p className="text-gray-300 text-lg md:max-w-lg">
            Welcome to my portfolio and blog — here I share everything that I
            love.
          </p>

          <a
            href="/about"
            className="inline-block mt-4 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-md shadow-md transition-all"
          >
            About Me
          </a>
        </div>

        {/* RIGHT SECTION - USER IMAGE */}
        <div className="flex justify-center flex-1">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-2 ring-cyan-500/40">
            <Image
              src="/me.png"
              width={300}
              height={300}
              alt="Buddy"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
