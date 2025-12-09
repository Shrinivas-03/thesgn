"use client";

import { useEffect } from "react";

export default function InPagePushAd() {
  useEffect(() => {
    (function (s) {
      s.dataset.zone = "10298180";
      s.src = "https://nap5k.com/tag.min.js";
    })(
      [document.documentElement, document.body]
        .filter(Boolean)
        .pop()
        .appendChild(document.createElement("script")),
    );
  }, []);

  return <div className="my-8" />;
}
