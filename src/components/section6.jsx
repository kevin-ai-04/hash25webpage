import React from 'react';
import './section6.css';

const Sponsors = () => {
  const sponsors = [
    { 
      name: 'MBOFTAA',
      logo: '/sponsors/mboftaa.png',
      url: 'https://mboftaa.com',
      tier: 'platinum'
    },
    {
      name: 'TechCorp',
      logo: '/sponsors/techcorp.png',
      url: 'https://techcorp.com',
      tier: 'gold'
    },
    // Add more sponsors
  ];

  return (
    <section className="happening-section" id="sponsors">
      <div className="container">
        <h2 className="heading">
          OUR <span className="highlight">SPONSORS</span>
        </h2>
        
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              className="sponsor-card"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="sponsor-logo"
              />
              <div className="sponsor-hover"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Sponsors;