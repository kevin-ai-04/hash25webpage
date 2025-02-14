import React, { useState, useRef, useEffect } from 'react';
import './section3.css';

const HashLogo = () => (
  <svg className="logo-3d" width="207" height="198" viewBox="0 0 207 198" fill="none">
    <path d="M39.5431 90.5428L103.647 90.366L100.341 112.412L186.426 112.912L206.223 136.591L179.432 159.554L93.3468 159.055L90.0458 181.068H25.9684L39.5431 90.5428Z" fill="white"/>
    <path d="M111.774 34.0819L47.7637 33.6341L50.2272 17.2058L90.0925 0L114.305 17.2058L111.774 34.0819Z" fill="white"/>
    <path d="M105.299 107.8L169.098 108.248L183.481 18.5653L119.575 18.565L116.242 39.1061L23.2848 39.1227L0 61.5245L16.2906 85.7653L108.843 85.5532L105.299 107.8Z" fill="white"/>
    <path d="M161.6 164.257L97.8015 163.809L95.1788 181.747L119.355 197.412L159.045 181.747L161.6 164.257Z" fill="white"/>
  </svg>
);

const GlowingLogoPage = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height/2) / 20;
    const y = (e.clientX - rect.left - rect.width/2) / 20;
    setRotation({ x, y });
  };

  return (
    <div 
      className="logo-page"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      <div 
        className="logo-container"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        <HashLogo />
        <div className="glow"></div>
      </div>
    </div>
  );
};

export default GlowingLogoPage;