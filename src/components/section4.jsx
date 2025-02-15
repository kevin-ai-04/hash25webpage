import React, { useState, useEffect } from 'react';
import './section4.css';

const events = [
  {
    title: 'THE GREEN PITCH',
    time: '10:00 AM - 1:00 PM',
    prize: '₹0K',
    description: 'Idea Presentation. Present your innovative tech ideas to judges in a fast-paced pitch environment.',
    cta: 'REGISTER NOW',
    bgImage: '/green-pitch-bg.gif',
    position: 'top-left'
  },
  {
    title: 'CAPTURE THE FLAG',
    time: '10:00 AM - 1:00 PM',
    prize: '₹0K',
    description: 'Cybersecurity Puzzzle. Solve cybersecurity challenge find hidden flags.',
    cta: 'JOIN BATTLE',
    bgImage: '/ctf-bg.gif',
    position: 'top-right'
  },
  {
    title: 'FUTSAL',
    time: '10:00 AM - 1:00 PM',
    prize: '0K',
    description: '3V3 Teams. For football fans, its time to shine—pass, play, and dominate the game!',
    cta: 'START HACKING',
    bgImage: '/hackathon-bg.gif',
    position: 'bottom-right'
  },
  {
    title: 'BLIND CODE',
    time: '10:00 AM - 1:00 PM',
    prize: '₹0K',
    description: 'Coding challenge. Replicate a web page relying purely on logic and memory.',
    cta: 'BUILD NOW',
    bgImage: '/robotics-bg.gif',
    position: 'bottom-left'
  }
];

const EventSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if(autoScroll) {
        setActiveIndex(prev => (prev + 1) % events.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  const handleNavigation = (index) => {
    setAutoScroll(false);
    setActiveIndex(index);
  };  
    const handlePrev = () => {
      setActiveIndex(prev => (prev - 1 + events.length) % events.length);
    };

    const handleNext = () => {
      setActiveIndex(prev => (prev + 1) % events.length);
    };
  
    return (
      <section className="happening-section" id="section4">
        <div className="container">
          <h2 className="heading">
            EVENT <span className="highlight">SPOTLIGHT</span>
          </h2>
  
          <div className="events-wrapper">
            <div 
              className="events-container"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="event-card"
                >
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-time">{event.time}</div>
                    <div className="event-prize">PRIZE POOL: {event.prize}</div>
                    <p className="event-description">{event.description}</p>
                    <button className="event-cta">{event.cta}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="section4-nav">
            <button className="nav-button" onClick={handlePrev}>‹</button>
            <div className="nav-dots">
              {events.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button className="nav-button" onClick={handleNext}>›</button>
          </div>
        </div>
      </section>
    );
  };

export default EventSection;