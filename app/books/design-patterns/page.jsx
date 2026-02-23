"use client";



export default function DDIAPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Design Patterns – PDF Download
      </h1>

      <p className="text-lg opacity-80 mb-8">
        Design Patterns by the Gang of Four (GoF) is a legendary software
        engineering book that teaches reusable solutions to common
        object-oriented design problems. It covers creational, structural, and
        behavioral patterns, and is essential for writing clean, scalable, and
        modular code. Perfect for 3rd–6th semester students, interview
        preparation, and developers who want to level up architecture skills.
      </p>

      <button
        onClick={() => window.open("/books/design.pdf", "_blank")}
        className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg"
      >
        Download Design Patterns PDF
      </button>
    </div>
  );
}
