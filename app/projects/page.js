import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects - Shrinivas",
  description:
    "Showcase of AI, ML, full-stack, Flask, cloud and software development projects.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10" data-aos="fade-up">
          My Projects
        </h1>

        <ProjectsClient />

        <div className="text-center mt-20" data-aos="fade-up">
          <a
            href="mailto:shrinivasnadager03@gmail.com"
            className="inline-flex items-center justify-center
                       px-6 py-3 md:px-10 md:py-4
                       bg-cyan-600 hover:bg-cyan-500
                       rounded-xl md:rounded-full
                       text-base md:text-lg font-semibold
                       whitespace-nowrap"
          >
            Want to Build Something? Let's Talk →
          </a>
        </div>
      </div>
    </div>
  );
}
