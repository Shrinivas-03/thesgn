export const projects = [
  {
    slug: "snajeevani-ai",
    title: "AI Health Assistant (Snajeevani AI)",
    description:
      "AI-powered RAG health assistant using Flask, ML, Pinecone, LLMs and Ayurvedic knowledgebase.",
    longDescription: `
Snajeevani AI is a healthcare assistant powered by RAG + Ayurvedic knowledgebase.

Features include:
- Symptoms-to-disease prediction
- ML + XGBoost model
- Pinecone vector search
- LLM reasoning
- Flask backend
- Clean UI

This system is designed to help provide fast and secure health advice.
    `,
    tags: ["AI", "RAG", "ML", "Flask", "Pinecone"],
    image: "/projects/project1.jpg",
    link: "https://github.com/yourrepo",
    demo: "#",
  },

  {
    slug: "ovarian-cancer-system",
    title: "Ovarian Cancer Prediction System",
    description:
      "Machine learning–based cancer prediction using XGBoost + LLM validation.",
    longDescription: `
This ML app predicts ovarian cancer risk based on clinical biomarkers.

Includes:
- Preprocessing
- XGBoost model
- LLM-powered explanation
- Biomarker score analysis
- Flask + Next.js integration
    `,
    tags: ["ML", "XGBoost", "Python", "Healthcare"],
    image: "/projects/project2.png",
    link: "https://github.com/yourrepo",
    demo: "#",
  },

  {
    slug: "codemates-website",
    title: "Codemates Ltd Website",
    description:
      "Business website with SEO, bookings, admin panel, and chatbot integration.",
    longDescription: `
Codemates Ltd official business website with:

- Carousel landing page
- SEO optimization
- Admin dashboard
- Booking system
- Chatbot integration
- Tailwind UI
- Hosted on Vercel
    `,
    tags: ["Next.js", "Tailwind", "Flask", "Supabase"],
    image: "/projects/project3.png",
    link: "https://github.com/yourrepo",
    demo: "https://codemates.in",
  },

  {
    slug: "drone-weed-detection",
    title: "Drone Weed Detection",
    description:
      "CNN/Vision Transformer model for weed detection using drone/satellite images.",
    longDescription: `
Detects weeds in farmland using drone/satellite imagery.

Pipeline includes:
- Image collection (Sentinel-2, drones)
- CNN + ViT
- Data cleaning & augmentation
- PyTorch training
- Deployment via FastAPI
    `,
    tags: ["CNN", "PyTorch", "Satellite Data"],
    image: "/projects/project4.jpg",
    link: "https://github.com/yourrepo",
    demo: "#",
  },
];
