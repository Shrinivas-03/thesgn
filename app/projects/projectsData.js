// app/projects/projectsData.js

export const projects = [
  {
    slug: "sanjeevani-ai",
    title: "Sanjeevani AI — Smart Health Companion",
    description:
      "AI-powered healthcare assistant offering disease prediction, Ayurvedic wellness recommendations, and real-time health insights.",
    longDescription: [
      "Sanjeevani AI is an advanced health companion designed to deliver fast, accessible, and personalized healthcare insights.",
      "",
      "Key Features:",
      "- Symptom-based disease prediction using TensorFlow/PyTorch",
      "- Ayurvedic wellness recommendations using a curated knowledgebase",
      "- ML + NLP pipelines using scikit-learn & Hugging Face Transformers",
      "- Real-time conversational chatbot for health queries",
      "- Flask backend with secure Supabase health record storage",
      "- OpenAI API for intelligent recommendations",
      "- Google Analytics for user behavior and engagement tracking",
      "",
      "Designed as an open-source solution aimed at democratizing healthcare access.",
    ].join("\n"),
    tags: [
      "AI",
      "ML",
      "NLP",
      "Flask",
      "Supabase",
      "Transformers",
      "TensorFlow",
      "PyTorch",
    ],
    link: "https://github.com/yourrepo",
    demo: "#",
  },

  {
    slug: "kisansetu-f2c-marketplace",
    title: "KisanSetu — Farmer-to-Customer Marketplace",
    description:
      "A direct farm-to-table platform improving farmer profits and reducing consumer costs through real-time inventory and multi-role authentication.",
    longDescription: [
      "KisanSetu is a digital marketplace that connects farmers directly with customers, eliminating middlemen and ensuring fair pricing.",
      "",
      "Core Capabilities:",
      "- Multi-role login for farmers, customers, and admins",
      "- Admin dashboard with full product & user management",
      "- Real-time inventory updates using Supabase",
      "- Cart and checkout system with Flask backend",
      "- Responsive UI built with Tailwind CSS",
      "- Deployed on Render.com with 99.5% uptime during peak seasons",
      "- Google Analytics-driven UX improvements increased conversion by 25%",
      "- Roadmap includes payment gateway and logistics API integration",
    ].join("\n"),
    tags: ["Flask", "Supabase", "Marketplace", "Tailwind", "Render.com"],
    link: "https://github.com/yourrepo",
    demo: "#",
  },

  {
    slug: "yukti-2025-fest-website",
    title: "Yukti 2025 — College Fest Website",
    description:
      "High-performance college fest website managing 680+ registrations and 100,000+ views with secure Flask backend and Supabase.",
    longDescription: [
      "Built the official Yukti 2025 college fest website enabling smooth event registrations, sponsor management, and guest coordination.",
      "",
      "Highlights:",
      "- Handled over 680+ registrations and 100,000+ views",
      "- Dynamic event registration and sponsorship portal",
      "- Guest management system built using Flask + Supabase",
      "- Google Analytics for tracking engagement",
      "- Led to 200% increase in registration revenue",
      "- Deployed on Render.com with 99.9% uptime for 1,000+ participants",
      "- Built with responsive Tailwind CSS UI for flawless cross-device experience",
    ].join("\n"),
    tags: ["Flask", "Supabase", "Tailwind", "Render.com", "Analytics"],
    link: "https://github.com/yourrepo",
    demo: "https://yukti.vtucpgsklb.in",
  },

  {
    slug: "ai-news-web-app",
    title: "AI-Based News Web App",
    description:
      "Real-time news summarizer using transformer-based NLP models with OTP authentication and personalized bookmarking.",
    longDescription: [
      "This web app provides summarized, real-time news updates using advanced transformer models.",
      "",
      "Key Features:",
      "- Transformer-based NLP news summarization",
      "- Real-time news updates via News API",
      "- Secure OTP login system + password hashing",
      "- Personalized feed with saved article collections",
      "- Topic-based news categorization",
      "- Tailwind CSS + JavaScript responsive UI",
      "- Fast, secure Flask backend API",
    ].join("\n"),
    tags: ["NLP", "Transformers", "Flask", "Tailwind", "JavaScript"],
    link: "https://github.com/yourrepo",
    demo: "#",
  },
];
