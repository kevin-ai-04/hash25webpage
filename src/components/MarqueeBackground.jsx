import React, { useEffect, useState } from "react";

const MarqueeBackground = () => {
  const speed = 1; // Speed of movement
  const rowSpacing = 100; // Space between rows
  const textRepeatFactor = 10; // Controls text width

  const [dimensions, setDimensions] = useState({ rows: 0, textRepeat: 0 });

  useEffect(() => {
    const calculateDimensions = () => {
      const extraPadding = 300;
      setDimensions({
        rows: Math.ceil((window.innerHeight + extraPadding) / rowSpacing),
        textRepeat: Math.ceil((window.innerWidth + extraPadding) / 100) * textRepeatFactor,
      });
    };

    window.addEventListener("resize", calculateDimensions);
    calculateDimensions();

    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "300%",
          height: "300%",
          transform: "rotate(-20deg) translate(-30%, -30%)",
        }}
      >
        {Array.from({ length: dimensions.rows }).map((_, i) => (
          <MarqueeRow key={i} top={i * rowSpacing} reverse={i % 2 !== 0} textRepeat={dimensions.textRepeat} speed={speed} />
        ))}
      </div>
    </div>
  );
};

const MarqueeRow = ({ top, reverse, textRepeat, speed }) => {
  const [position, setPosition] = useState(reverse ? -2000 : 0);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setPosition((prev) => {
        let newPos = prev + (reverse ? speed : -speed);
        if (newPos < -2000) newPos = 2000; // Reset at edge
        if (newPos > 2000) newPos = -2000; // Reset at edge
        return newPos;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [reverse, speed]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${position}px`,
        top: `${top}px`,
        whiteSpace: "nowrap",
        fontSize: "5rem",
        fontWeight: "bold",
        color: "transparent",
        WebkitTextStroke: "2px rgba(255, 255, 255, 0.12)",
        textTransform: "uppercase",
      }}
    >
      {"#ishappening ".repeat(textRepeat)}
    </div>
  );
};

export default MarqueeBackground;
