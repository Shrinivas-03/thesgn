"use client";

import PopUnder from "@/app/components/PopUnder";
import NativeInterstitial from "@/app/components/NativeInterstitial";

export default function GrokkingSystemDesignPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      {/* ⭐ PopUnder loads automatically when page opens */}
      <PopUnder />

      <h1 className="text-4xl font-bold mb-6">
        Grokking System Design – PDF Download
      </h1>

      <p className="text-lg opacity-80 mb-8">
        The easiest introduction to system design for beginners. Includes
        diagrams, case studies, and scalable architecture patterns. Ideal for
        internship preparation and FAANG interviews.
      </p>

      {/* ⭐ Interstitial triggers → then PDF opens */}
      <NativeInterstitial
        onClick={() => window.open("/books/grok.pdf", "_blank")}
      >
        <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg">
          Download Grokking System Design PDF
        </button>
      </NativeInterstitial>
    </div>
  );
}
