import React from 'react';
import './section6.css';

const Sponsors = () => {
  const sponsors = [
    { 
      name: 'MBCETAA',
      logo: '/mbcetaa-logo.png',
      url: 'https://mboftaa.com',
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
      logo: '/ethindia.svg',
      url: 'https://ethindia2024.devfolio.co',
      tier: 'platinum'
    },
    {
      name: 'ibsplc',
      logo: '/ibsplc.jpeg',
      url: 'https://www.ibsplc.com',
      tier: 'gold'
    },
    // Add more sponsors
  ];

  return (
    <section className="sponsor-section" id="sponsors">
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