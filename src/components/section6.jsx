import React from 'react';
import './section6.css';

const Sponsors = () => {
  const sponsors = [
    { 
      name: 'MBCETAA',
      logo: '/mbcetaa-logo.png',
      tier: 'platinum'
    },
    {
      name: 'UST',
      logo: '/ust.png',
      url: 'https://www.ust.com',
      tier: 'platinum'
    },
    {
      name: 'NAM',
      logo: '/nam.jpeg',
      url: 'https://www.nam.kerala.gov.in',
      tier: 'platinum'
    },
    {
      name: 'ETHIndia',
      logo: '/ethindia_b.svg',
      url: 'https://ethindia2024.devfolio.co',
      tier: 'platinum'
    },
    {
      name: 'ibsplc',
      logo: '/ibsplc.jpeg',
      url: 'https://www.ibsplc.com',
      tier: 'gold'
    },
  ];

  return (
    <section className="sponsors-section" id="sponsors">
      <h2 className="sponsors-title">
        OUR <span className="highlight">SPONSORS</span>
      </h2>
      <div className="sponsors-container">
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
              <div className="hover-glow"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
