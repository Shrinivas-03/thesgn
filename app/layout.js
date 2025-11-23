import { Geist } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSInit from "./components/AOSInit";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shrinivas Nadager",
  description: "Portfolio + Blogs",
  icons: {
    icon: "/me.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ⭐ GOOGLE ANALYTICS */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2G0QGEZJ0Y"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2G0QGEZJ0Y');
          `}
        </Script>

        {/* ⭐ MDX Styling */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .prose img { border-radius: 12px; margin: 20px 0; }
              .prose h2 { margin-top: 1.5rem; margin-bottom: 0.8rem; }
              .prose h3 { margin-top: 1.2rem; margin-bottom: 0.6rem; }
              .prose p { margin-bottom: 1rem; line-height: 1.7; }
              .prose code { background: #1e293b; padding: 2px 4px; border-radius: 4px; }
            `,
          }}
        />

        {/* ⭐ AOS CSS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>

      <body className={`${geist.variable} bg-slate-900 text-white`}>
        {/* ⭐ Tailwind CDN */}
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />

        {/* ⭐ AOS Init */}
        <AOSInit />

        {/* Navigation + Children + Footer */}
        <Navbar />
        <main className="mt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
