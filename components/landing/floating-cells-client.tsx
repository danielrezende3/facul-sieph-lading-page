"use client";

import dynamic from "next/dynamic";

const FloatingCells = dynamic(
  () =>
    import("@/components/landing/floating-cells").then(
      (mod) => mod.FloatingCells,
    ),
  { ssr: false },
);

export function FloatingCellsClient() {
  return <FloatingCells />;
}
