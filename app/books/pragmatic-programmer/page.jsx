"use client";

import PopUnder from "@/app/components/PopUnder";

export default function PragmaticProgrammerPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <PopUnder />

      <h1 className="text-4xl font-bold mb-6">
        The Pragmatic Programmer – PDF Download
      </h1>

      <p className="text-lg opacity-80 mb-8">
        A must-read book for developing a mature software engineering mindset.
        Covers debugging, refactoring, architecture thinking, team
        collaboration, and real-world development principles.
      </p>

      <button
        onClick={() => {
          window.location.href = "/books/prg.pdf";
        }}
        className="bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 rounded-lg"
      >
        Download The Pragmatic Programmer PDF
      </button>
    </div>
  );
}
