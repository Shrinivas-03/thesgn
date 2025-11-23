"use client";

import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    import("aos/dist/aos.js").then((module) => {
      if (module && module.default) {
        module.default.init({
          duration: 800,
          once: true,
          easing: "ease-in-out",
        });
      }
    });
  }, []);

  return null;
}
