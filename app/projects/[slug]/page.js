export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const projects = [
    {
      slug: "snajeevani-ai",
      title: "AI Health Assistant (Snajeevani AI)",
      banner: "/projects/snajeevani.jpg",
      description:
        "AI-powered RAG health assistant using Flask, ML, Pinecone and Ayurveda knowledgebase.",
      tags: ["AI", "RAG", "ML", "Flask"],
      github: "https://github.com/yourrepo",
      demo: "https://your-demo.com",
      details: "Full long description about Snajeevani...",
    },
    {
      slug: "ovarian-cancer-system",
      title: "Ovarian Cancer Prediction System",
      banner: "/projects/cancer.jpg",
      description:
        "ML cancer prediction pipeline using XGBoost + LLM validation.",
      tags: ["ML", "XGBoost", "Python"],
      github: "https://github.com/yourrepo",
      demo: "https://your-demo.com",
      details: "Full long description about the cancer system...",
    },
    {
      slug: "codemates-website",
      title: "Codemates Ltd Website",
      banner: "/projects/codemates.jpg",
      description: "Full company website with admin panel and SEO.",
      tags: ["Next.js", "Tailwind", "Flask", "Supabase"],
      github: "https://github.com/yourrepo",
      demo: "https://your-demo.com",
      details: "Full long description about Codemates project...",
    },
    {
      slug: "drone-weed-detection",
      title: "Drone Weed Detection",
      banner: "/projects/weed.jpg",
      description: "CNN weed detection using drone images.",
      tags: ["CNN", "PyTorch"],
      github: "https://github.com/yourrepo",
      demo: "https://your-demo.com",
      details: "Full long description about weed detection...",
    },
  ];

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-center py-20 text-lg">Project not found</div>;
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <img
          src={project.banner}
          className="w-full h-80 object-cover rounded-2xl mb-10"
          alt={project.title}
        />

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-6">{project.description}</p>

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

        <p className="text-gray-400 leading-relaxed mb-10">{project.details}</p>

        <div className="flex gap-4 mt-10">
          <a
            href={project.github}
            target="_blank"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-medium"
          >
            GitHub →
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
}
