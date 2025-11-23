export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      {/* HERO SECTION */}
      <section
        className="flex flex-col md:flex-row items-center gap-10 mb-20"
        data-aos="fade-up"
      >
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm{" "}
            <span className="text-white font-semibold">Prabhu Kiran Konda</span>
            , founder of Codemates Ltd, and a passionate developer experienced
            in web apps, AI systems, cloud computing, and building solutions
            that matter.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I love solving real-world problems with clean engineering and modern
            tools.
          </p>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex-shrink-0" data-aos="zoom-in">
          <img
            src="/me.png"
            alt="Profile"
            className="w-48 h-48 object-cover rounded-2xl shadow-lg border border-slate-700"
          />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="mb-20" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Programming",
              items: ["Python", "JavaScript", "TypeScript", "C", "C++", "SQL"],
            },
            {
              title: "AI & ML",
              items: [
                "Deep Learning",
                "RAG Systems",
                "LLMs",
                "Computer Vision",
              ],
            },
            {
              title: "Web Development",
              items: ["Next.js", "React", "Tailwind CSS", "Node.js"],
            },
            {
              title: "Cloud & DevOps",
              items: ["Azure", "AWS", "Docker", "CI/CD Pipelines"],
            },
            {
              title: "Tools",
              items: ["Git & GitHub", "Supabase", "Sanity CMS", "Postman"],
            },
          ].map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                {skill.title}
              </h3>
              <ul className="text-gray-300 space-y-1">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-20" data-aos="fade-left">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="space-y-8 border-l border-slate-700 pl-6">
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold">Founder — Codemates Ltd</h3>
            <p className="text-gray-400 text-sm">2024 – Present</p>
            <p className="text-gray-300 mt-1">
              Running a tech agency building modern websites, AI tools,
              automation, and full-stack solutions.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold">
              Software Engineer Projects
            </h3>
            <p className="text-gray-400 text-sm">2023 – 2025</p>
            <p className="text-gray-300 mt-1">
              Worked on cloud architecture, ML models, mobile apps, automation,
              and APIs.
            </p>
          </div>
        </div>
      </section>

      {/* RESUME SECTION */}
      <section className="mb-20 text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-4">My Resume</h2>
        <p className="text-gray-400 mb-6">
          Download my updated resume anytime.
        </p>

        <a
          href="/resume.pdf" // put file inside /public folder
          download
          className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-full font-semibold transition"
        >
          Download Resume →
        </a>
      </section>

      {/* PROJECTS BUTTON SECTION */}
      <section className="mb-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 mb-6">Explore what I’ve built so far.</p>

        <a
          href="/projects"
          className="px-8 py-3 bg-slate-800 border border-slate-600 hover:border-cyan-400 rounded-full font-semibold transition"
        >
          View Projects →
        </a>
      </section>

      {/* CTA */}
      <section className="text-center py-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Open for Work</h2>
        <p className="text-gray-400 mb-6">
          Have a project or collaboration in mind?
        </p>

        <a
          href="mailto:shrinivasnadager03@gmail.com"
          className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 transition font-semibold"
        >
          Contact Me →
        </a>
      </section>
    </div>
  );
}
