import React, { useState, useEffect, useRef } from 'react';
import './section2.css';

const images = [
  { src: 'hash-img1.png' },
  { src: 'hash-img2.png' },
  { src: 'hash-img3.png' },
  { src: 'hash-img4.png' },
  // { src: 'hash-img1.png' },
  // { src: 'hash-img1.png' }
];

const HappeningSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const dragRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  // Drag Start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  // Drag End
  const handleMouseUp = () => {
    setIsDragging(false);
    const diff = startX - endX;
    if (diff > 50) nextSlide(); // Swipe left
    if (diff < -50) prevSlide(); // Swipe right
  };

  // Drag Move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setEndX(e.clientX || e.touches[0].clientX);
  };

  return (
    <section className="happening-section">
      <div className="container">
        <h2 className="heading">
          WHAT’S <span className="highlight">#ISHAPPENING</span>
        </h2>

        <div className="content">
          <div className="left-column">
            <p className="description">
              The <strong>Computer Science & Engineering Department</strong> of <strong>Mar Baselios College of Engineering 
              and Technology (Autonomous)</strong>, Thiruvananthapuram proudly presents HASH 2025, the much-awaited 
              annual tech fest!
              <br /><br />
              This year, we’ve got a thrilling mix of technical and non-technical events that will 
              challenge your intellect and creativity. Whether you’re a sports enthusiast, a coding 
              genius, or an aspiring sustainability innovator, there’s something for everyone.
              <br /><br />
              Join us at HASH 2025 and be a part of the fun! Whether you’re competing or simply soaking in the excitement, 
              this is one event you don’t want to miss. Let’s come together, push our boundaries, and create lasting memories!
            </p>
          </div>

          {/* Carousel */}
          <div
            className="image-carousel"
            ref={dragRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          >
            {images.map((image, index) => {
              let position = '';
              if (index === activeIndex) position = 'active';
              if (index === (activeIndex - 1 + images.length) % images.length) position = 'prev';
              if (index === (activeIndex + 1) % images.length) position = 'next';

              return (
                <div key={index} className={`carousel-image ${position}`}>
                  <img src={image.src} alt={`Event ${index + 1}`} />
                </div>
              );
            })}

            {/* Navigation Dots */}
            <div className="carousel-dots">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Previous & Next Buttons */}
            <button className="prev-button" onClick={prevSlide}>&#10094;</button>
            <button className="next-button" onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappeningSection;
