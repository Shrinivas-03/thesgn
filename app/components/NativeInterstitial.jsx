"use client";

import { useEffect } from "react";

export default function NativeInterstitial({ children }) {
  useEffect(() => {
    // Load script only once globally
    if (document.getElementById("native-interstitial-script")) return;

    const script = document.createElement("script");
    script.id = "native-interstitial-script";
    script.dataset.zone = "10309653";
    script.src = "https://groleegni.net/vignette.min.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  // Wrap your button and attach trigger click event
  const handleClick = () => {
    try {
      // Most vignette scripts expose a global show function
      if (window.vignette) {
        window.vignette(); // trigger ad
      }
    } catch (err) {
      console.error("Interstitial did not load", err);
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
}
