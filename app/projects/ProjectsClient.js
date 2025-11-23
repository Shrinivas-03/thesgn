"use client";

import { useState } from "react";

export default function ProjectsClient({ projects }) {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <>
      {/* Search Bar */}
      <div className="mb-10" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700
                     focus:border-cyan-500 focus:outline-none"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700
                       backdrop-blur-xl hover:scale-[1.03] transition-all cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-xl mb-5
                         hover:scale-[1.03] transition duration-300"
            />

            {/* Title */}
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
              {project.title}
            </h2>

            {/* Short description */}
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-slate-700 text-gray-300 rounded-full
                             border border-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* View Details Button */}
            <a
              href={`/projects/${project.slug}`}
              className="inline-block px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500
                         transition font-medium"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
