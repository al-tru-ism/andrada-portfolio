import { useEffect, useState } from "react";

/**
 * CursorGlow — A subtle radial gradient that follows the mouse cursor.
 * Creates an ambient lighting effect across the page, similar to
 * Brittany Chiang's portfolio spotlight effect.
 */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(0, 229, 255, 0.04), transparent 40%)`,
      }}
    />
  );
}
