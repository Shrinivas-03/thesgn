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
            <span className="text-white font-semibold">
              Shrinivas Gopal Nadager
            </span>
            , Founder of{" "}
            <a
              href="https://codemates.in"
              target="_blank"
              className="text-cyan-400 underline"
            >
              Codemates Ltd
            </a>
            , and a Full-Stack AI Developer building modern web applications,
            scalable AI systems, automation workflows, and cloud-powered
            solutions.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Our private tech solutions firm has successfully delivered{" "}
            <span className="text-white font-semibold">
              10+ real-world projects
            </span>{" "}
            across companies, students, and startups throughout India — with a
            focus on reliability, performance, and clean engineering.
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
              title: "Languages",
              items: ["Python", "HTML", "CSS", "SQL"],
            },
            {
              title: "Framework",
              items: ["Flask", "FastAPI", "Streamlit", "Tailwind CSS"],
            },
            {
              title: "Developer Tools",
              items: [
                "Git",
                "GitHub",
                "VS Code",
                "PowerBi",
                "Render.com",
                "Postman",
              ],
            },
            {
              title: "Libraries",
              items: [
                "Pandas",
                "Numpy",
                "Matplotlib",
                "Seaborn",
                "Scikit-Learn",
                "Hugging Face Transformers",
              ],
            },
            {
              title: "Core Skills",
              items: [
                "Data Structures and Algorithms",
                "Object-Oriented Programming (OOP's)",
                "Computer Networks",
              ],
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
            <h3 className="text-xl font-semibold">
              Founder (CEO) & Full-Stack AI Developer — Codemates Ltd
            </h3>
            <p className="text-gray-400 text-sm">2025 – Present</p>
            <p className="text-gray-300 mt-1">
              Leading a private tech solutions firm delivering full-stack
              systems, automation tools, AI-driven applications, and
              high-performance web platforms. Successfully delivered{" "}
              <span className="text-white font-semibold">10+ projects</span>{" "}
              across industries with a strong focus on engineering precision,
              security, and seamless user experience.
            </p>

            <a
              href="https://codemates.in"
              target="_blank"
              className="text-cyan-400 underline mt-2 inline-block"
            >
              Visit Codemates Ltd →
            </a>
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
          href="/resume.pdf"
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
