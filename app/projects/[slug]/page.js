// app/projects/[slug]/page.js
import { projects } from "../projectsData";

export default async function ProjectDetails({ params }) {
  // FIX for Next.js 16 + Turbopack Promise params bug
  const { slug } = await Promise.resolve(params);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-20 text-lg text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        {/* Short Description */}
        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-slate-800 text-sm border border-slate-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Long Description */}
        <pre className="text-gray-400 leading-relaxed whitespace-pre-wrap mb-10">
          {project.longDescription}
        </pre>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <a
            href={project.link}
            target="_blank"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-medium"
          >
            GitHub →
          </a>

          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
