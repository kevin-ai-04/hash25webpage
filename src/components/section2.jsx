import React, { useState, useEffect } from 'react';
import './section2.css';

const images = [
  { src: 'hash-img1.png'},
  { src: 'hash-img2.png'},
  { src: 'hash-img3.png'},
  { src: 'hash-img4.png'},
  { src: 'hash-img1.png'},
  { src: 'hash-img1.png'}
];

const HappeningSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

          <div className="image-carousel">
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
            <div className="carousel-dots">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappeningSection;