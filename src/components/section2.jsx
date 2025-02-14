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

          {/* Right Column: Stacked Images in Two Rows (Staircase design) */}
          <div className="right-column">
            <div className="image-row">
              <img src="image1.jpg" alt="Event 1" className="event-image img-1" />
              <img src="image2.jpg" alt="Event 2" className="event-image img-2" />
              <img src="image3.jpg" alt="Event 3" className="event-image img-3" />
            </div>
            <div className="image-row">
              <img src="image4.jpg" alt="Event 4" className="event-image img-4" />
              <img src="image5.jpg" alt="Event 5" className="event-image img-5" />
              <img src="image6.jpg" alt="Event 6" className="event-image img-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappeningSection;
