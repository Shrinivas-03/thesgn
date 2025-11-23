"use client";

import dynamic from "next/dynamic";

const OpenForWork = dynamic(() => import("./OpenForWork"), {
  ssr: false,
});

export default function OpenForWorkClient() {
  return <OpenForWork />;
}
