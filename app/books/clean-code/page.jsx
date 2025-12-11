"use client";

import PopUnder from "@/app/components/PopUnder";
import NativeInterstitial from "@/app/components/NativeInterstitial";

export default function CleanCodePage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      {/* ⭐ PopUnder loads when page opens */}
      <PopUnder />

      <h1 className="text-4xl font-bold mb-6">Clean Code – PDF Download</h1>

      <p className="text-lg opacity-80 mb-8">
        Clean Code by Robert C. Martin teaches how to write readable,
        maintainable, and professional-grade code. This book should be read in
        1st or 2nd semester when students start coding seriously.
      </p>

      {/* ⭐ Interstitial triggers on click, then starts download */}
      <NativeInterstitial
        onClick={() => window.open("/books/clean.pdf", "_blank")}
      >
        <button className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg">
          Download Clean Code PDF
        </button>
      </NativeInterstitial>
    </div>
  );
}
