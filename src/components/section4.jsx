import React from 'react';
import './section4.css';

const events = [
  {
    title: 'THE GREEN PITCH',
    time: '10:00 AM - 1:00 PM',
    prize: '₹0K',
    description: 'Idea Presentation. Present your innovative tech ideas to judges in a fast-paced pitch environment.',
    cta: 'START THINKING',
    bgImage: '/GreenPitch.png',
  },
  {
    title: 'CAPTURE THE FLAG',
    time: '10:00 AM - 1:00 PM',
    prize: '₹0K',
    description: 'Cybersecurity Puzzle. Solve cybersecurity challenges and find hidden flags.',
    cta: 'JOIN BATTLE',
    bgImage: '/CTF.png',
  },
  {
    title: 'FUTSAL',
    time: '10:00 AM - 1:00 PM',
    prize: '0K',
    description: '3V3 Teams. For football fans, it’s time to shine—pass, play, and dominate the game!',
    cta: 'START KICKING',
    bgImage: '/futsal.png',
  },
  {
    title: 'BLIND CODE',
    time: '10:00 AM - 1:00 PM',
    prize: '₹0K',
    description: 'Coding challenge. Replicate a web page relying purely on logic and memory.',
    cta: 'CODE NOW',
    bgImage: '/blind-code.png',
  }
];
const EventSection = () => {
  return (
    <section className="event-section" id="section4">
      <h2 className="heading">
        EVENT <span className="highlight">SPOTLIGHT</span>
      </h2>
      
      <div className="events-container">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-card"
            style={{ backgroundImage: `url(${event.bgImage})` }}
          >
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <div className="event-time">{event.time}</div>
              <p className="event-description">{event.description}</p>
              <button className="event-cta">{event.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;