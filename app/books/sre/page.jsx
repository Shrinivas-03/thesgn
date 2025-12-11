"use client";

import PopUnder from "@/app/components/PopUnder";
import NativeInterstitial from "@/app/components/NativeInterstitial";

export default function SREPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      {/* ⭐ PopUnder loads automatically */}
      <PopUnder />

      <h1 className="text-4xl font-bold mb-6">
        Site Reliability Engineering (SRE) – PDF Download
      </h1>

      <p className="text-lg opacity-80 mb-8">
        Written by Google engineers, SRE explains how large-scale systems stay
        reliable. Teaches monitoring, SLAs, incident response, automation, and
        DevOps. Perfect for backend, cloud, and DevOps aspirants.
      </p>

      {/* ⭐ Interstitial → then PDF */}
      <NativeInterstitial
        onClick={() => window.open("/books/sre.pdf", "_blank")}
      >
        <button className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-lg">
          Download SRE Book PDF
        </button>
      </NativeInterstitial>
    </div>
  );
}
