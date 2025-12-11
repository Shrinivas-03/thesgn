"use client";

import PopUnder from "@/app/components/PopUnder";

export default function DDIAPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <PopUnder />

      <h1 className="text-4xl font-bold mb-6">
        Designing Data-Intensive Applications (DDIA) – PDF Download
      </h1>

      <p className="text-lg opacity-80 mb-8">
        DDIA by Martin Kleppmann is the Bible of modern distributed systems,
        scalability, databases, streaming systems, and backend engineering.
        Perfect for 5th–8th semester students and anyone preparing for system
        design.
      </p>

      <button
        onClick={() => {
          window.location.href = "/books/design.pdf";
        }}
        className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg"
      >
        Download DDIA PDF
      </button>
    </div>
  );
}
