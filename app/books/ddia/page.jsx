"use client";

import PopUnder from "@/app/components/PopUnder";
import NativeInterstitial from "@/app/components/NativeInterstitial";

export default function DDIAPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      {/* ⭐ PopUnder loads on page enter */}
      <PopUnder />

      <h1 className="text-4xl font-bold mb-6">
        Designing Data-Intensive Applications (DDIA) – PDF Download
      </h1>

      <p className="text-lg opacity-80 mb-8">
        DDIA by Martin Kleppmann is the Bible of modern distributed systems,
        scalability, databases, streaming systems, and backend engineering.
        Perfect for all semester students and anyone preparing for system
        design.
      </p>

      {/* ⭐ Interstitial triggers when clicked, THEN download begins */}
      <NativeInterstitial
        onClick={() => window.open("/books/data.pdf", "_blank")}
      >
        <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg">
          Download DDIA PDF
        </button>
      </NativeInterstitial>
    </div>
  );
}
