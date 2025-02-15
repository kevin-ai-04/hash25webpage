import React, { useEffect } from 'react';
import './section5.css';

const Timeline = () => {
  const events = [
    {
      time: '9:30 AM',
      title: 'Inaugration',
      description: 'Kickoff ceremony with keynote speakers',
      icon: '🎉',
      color: '#FF6B6B'
    },
    {
        time: '9:30 AM',
        title: 'Inaugration',
        description: 'Kickoff ceremony with keynote speakers',
        icon: '🎉',
        color: '#FF6B6B'
      },
      {
        time: '9:30 AM',
        title: 'Inaugration',
        description: 'Kickoff ceremony with keynote speakers',
        icon: '🎉',
        color: '#FF6B6B'
      },
      {
        time: '9:30 AM',
        title: 'Inaugration',
        description: 'Kickoff ceremony with keynote speakers',
        icon: '🎉',
        color: '#FF6B6B'
      }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <h2 className="heading">
          EVENT <span className="highlight">TIMELINE</span>
        </h2>
        
        <div className="timeline-grid">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="event-icon">⏳</div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-time">{event.time}</div>
                <p className="description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;