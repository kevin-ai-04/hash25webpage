import React, { useState, useEffect, useRef } from 'react';
import './section2.css';

const images = [
  { src: 'hash-img1.png' },
  { src: 'hash-img2.png' },
  { src: 'hash-img3.png' },
  { src: 'hash-img4.png' },
  { src: 'hash-img1.png' },
  { src: 'hash-img1.png' }
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
              The department of <strong>Computer Science</strong> and Engineering of
              <strong> Mar Baselios</strong> College of Engineering and Technology invites you
              to <strong>HASH'25</strong>, the technical fest with exhilarating competitions,
              stunning displays of skill, and a plethora of cutting-edge technologies.
              <br /><br />
              This two-day technical fest is aimed to blow your minds with events such as
              idea presentation, coding challenge, 24-hour hackathon, and much more!
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
