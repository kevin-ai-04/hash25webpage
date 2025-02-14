import React from 'react';
import './section2.css';

const HappeningSection = () => {
  return (
    <section className="happening-section">
      <div className="container">
        {/* Heading Section */}
        <h2 className="heading">
          WHAT’S <span className="highlight">#ISHAPPENING</span>
        </h2>

        <div className="content">
          {/* Left Column: Body Text */}
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

          {/* Right Column: Stacked Images in Two Rows */}
          <div className="right-column">
            <div className="image-row">
              <img src="public/image1.jpg"  className="event-image img-1" />
              <img src="public/image2.jpg"  className="event-image img-2" />
              <img src="public/image3.jpg"  className="event-image img-3" />
            </div>
            <div className="image-row">
              <img src="public/image4.jpg"  className="event-image img-4" />
              <img src="public/image5.jpg"  className="event-image img-5" />
              <img src="public/image6.jpg"  className="event-image img-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappeningSection;
