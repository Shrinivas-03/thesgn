"use client";

import PopUnder from "@/app/components/PopUnder";

export default function CLRSPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <PopUnder />

      <h1 className="text-4xl font-bold mb-6">
        Introduction to Algorithms (CLRS) – PDF Download
      </h1>

      <p className="text-lg opacity-80 mb-8">
        CLRS is the most complete DSA book used in engineering colleges
        worldwide. Covers algorithms, data structures, complexity analysis, and
        problem-solving. Best for 3rd–6th semester students.
      </p>

      <button
        onClick={() => {
          window.location.href = "/books/algo.pdf";
        }}
        className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg"
      >
        Download CLRS PDF
      </button>
    </div>
  );
}
