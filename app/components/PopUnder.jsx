"use client";

import { useEffect } from "react";

export default function PopUnder() {
  useEffect(() => {
    setTimeout(() => {
      const script = document.createElement("script");
      script.dataset.zone = "10308571";
      script.src = "https://al5sm.com/tag.min.js";
      document.body.appendChild(script);
    }, 500); // delay ensures correct loading
  }, []);

  return null;
}
