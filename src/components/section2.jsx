import React from 'react';
import './section2.css';

const HappeningSection = () => {
  return (
    <section className="happening-section">
      <div className="container">
        {/* Left Column: Heading & Body Text */}
        <div className="left-column">
          <h2 className="heading">
            WHAT’S <span className="highlight">#ISHAPPENING</span>
          </h2>
          <p className="description">
            The department of <bold>Computer Science</bold> and Engineering of 
            <strong> Mar Baselios</strong> College of Engineering and Technology invites you 
            to <strong>HASH'25</strong>, the technical fest with exhilarating competitions, 
            stunning displays of skill, and a plethora of cutting-edge technologies.
            <br /><br />
            This two-day technical fest is aimed to blow your minds with events such as 
            idea presentation, coding challenge, 24-hour hackathon, and much more!
          </p>
        </div>

        {/* Right Column: Image Placeholders (Replace these with actual images) */}
        <div className="right-column">
          <img src="/images/image1.jpg"  className="event-image" />
          <img src="/images/image2.jpg"  className="event-image" />
          <img src="/images/image3.jpg"  className="event-image" />
          <img src="/images/image4.jpg"  className="event-image" />
          <img src="/images/image5.jpg"  className="event-image" />
        </div>
      </div>
    </section>
  );
};

export default HappeningSection;
