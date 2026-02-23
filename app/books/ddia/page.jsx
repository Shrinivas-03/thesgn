"use client";



export default function DDIAPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Designing Data-Intensive Applications (DDIA) – PDF Download
      </h1>

      <p className="text-lg opacity-80 mb-8">
        DDIA by Martin Kleppmann is the Bible of modern distributed systems,
        scalability, databases, streaming systems, and backend engineering.
        Perfect for all semester students and anyone preparing for system
        design.
      </p>

      <button
        onClick={() => window.open("/books/data.pdf", "_blank")}
        className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg"
      >
        Download DDIA PDF
      </button>
    </div>
  );
}
