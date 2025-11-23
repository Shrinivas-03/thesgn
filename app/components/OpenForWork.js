"use client";

import { motion } from "framer-motion";

export default function OpenForWork() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#071425] via-[#0c2540] to-[#07182f] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            p-10 rounded-3xl
            bg-slate-900/60 backdrop-blur-xl
            border border-cyan-500/20
            shadow-lg shadow-cyan-600/20
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 I’m Open For Work & Collaboration
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Got an idea? Want to build modern applications, AI systems, or
            scalable platforms? I'm currently accepting freelance &
            project-based opportunities.
          </p>

          <motion.a
            href="mailto:yourmail@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="
              inline-flex items-center gap-2
              mt-8 px-8 py-3
              rounded-full font-semibold
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:from-cyan-400 hover:to-blue-500
              text-white shadow-md shadow-cyan-500/30
              transition-all
            "
          >
            Contact Me →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
