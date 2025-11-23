import { Geist } from "next/font/google";
import ProjectsClient from "./ProjectsClient";
import fs from "fs";
import path from "path";

// SEO
export const metadata = {
  title: "Projects — Buddy",
  description:
    "Showcase of full-stack, cloud, AI and software development projects.",
};

export default function ProjectsPage() {
  const projects = [
    {
      slug: "snajeevani-ai",
      title: "AI Health Assistant (Snajeevani AI)",
      description:
        "AI-powered RAG health assistant using Flask, ML, Pinecone, LLMs and Ayurveda knowledgebase.",
      tags: ["AI", "RAG", "ML", "Flask"],
      image: "/projects/snajeevani.jpg",
      link: "https://github.com/yourrepo",
    },
    {
      slug: "ovarian-cancer-system",
      title: "Ovarian Cancer Prediction System",
      description:
        "Machine learning cancer prediction pipeline using XGBoost + LLM validation.",
      tags: ["ML", "XGBoost", "Python"],
      image: "/projects/cancer.jpg",
      link: "https://github.com/yourrepo",
    },
    {
      slug: "codemates-website",
      title: "Codemates Ltd Website",
      description:
        "Complete company website with bookings, admin panel, SEO and automated chatbot.",
      tags: ["Next.js", "Tailwind", "Flask", "Supabase"],
      image: "/projects/codemates.jpg",
      link: "https://github.com/yourrepo",
    },
    {
      slug: "drone-weed-detection",
      title: "Drone Weed Detection",
      description:
        "CNN weed detection using drone/satellite images — PyTorch + Vision Transformers.",
      tags: ["CNN", "PyTorch", "Satellite Data"],
      image: "/projects/weed.jpg",
      link: "https://github.com/yourrepo",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10" data-aos="fade-up">
          My Projects
        </h1>

        {/* Client Component */}
        <ProjectsClient projects={projects} />

        {/* CTA */}
        <div className="text-center mt-20" data-aos="fade-up">
          <a
            href="mailto:shrinivasnadager03@gmail.com"
            className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-full text-lg font-semibold"
          >
            Want to Build Something? Let's Talk →
          </a>
        </div>
      </div>
    </div>
  );
}
