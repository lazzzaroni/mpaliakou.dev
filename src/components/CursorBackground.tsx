"use client";

import { useEffect, useState } from "react";

type CoordsType = {
  x: number | null;
  y: number | null;
};

export default function CursorBackground() {
  const coords = useMousePosition();
  const x = coords.x ? coords.x : 0;
  const y = coords.y ? coords.y : 0;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(16, 16, 16, 0.075), transparent 70%)`,
      }}
    ></div>
  );
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<CoordsType>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      e.preventDefault();
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
