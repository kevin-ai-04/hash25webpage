import React, { useEffect, useState } from "react";
import "./CursorGlow.css";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const moveGlow = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      document.addEventListener("mousemove", moveGlow);
    }

    return () => {
      document.removeEventListener("mousemove", moveGlow);
    };
  }, [isMobile]);

  if (isMobile) return null; // Hide glow on mobile

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorGlow;
