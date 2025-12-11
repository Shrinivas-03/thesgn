"use client";

import PopUnder from "@/app/components/PopUnder";

export default function CleanCodePage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <PopUnder />

      <h1 className="text-4xl font-bold mb-6">Clean Code – PDF Download</h1>

      <p className="text-lg opacity-80 mb-8">
        Clean Code by Robert C. Martin teaches how to write readable,
        maintainable, and professional-grade code. This book should be read in
        2nd or 3rd semester when students start coding seriously.
      </p>

      {/* Sanity-compatible link */}
      <a
        href="/books/clean.pdf"
        className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Clean Code PDF
      </a>
    </div>
  );
}
