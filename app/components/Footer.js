import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-gray-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* TOP: Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Shrinivas Gopal Nadager
            </h3>
            <p className="text-sm text-gray-400">
              Developer • AI • Cloud • Full-Stack
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* Email */}
            <a
              href="mailto:shrinivasnadager03@gmail.com"
              className="hover:opacity-80 transition"
              aria-label="Email"
            >
              <Image src="/gmail.svg" width={26} height={26} alt="Gmail" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Shrinivas-03"
              target="_blank"
              className="hover:opacity-80 transition"
              aria-label="GitHub"
            >
              <Image src="/github.svg" width={26} height={26} alt="GitHub" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/shrinivas-nadager"
              target="_blank"
              className="hover:opacity-80 transition"
              aria-label="LinkedIn"
            >
              <Image
                src="/linkedin.svg"
                width={26}
                height={26}
                alt="LinkedIn"
              />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com/ShrinivasN17892"
              target="_blank"
              className="hover:opacity-80 transition"
              aria-label="Twitter / X"
            >
              <Image src="/x.svg" width={26} height={26} alt="X" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SGN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
