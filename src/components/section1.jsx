import React from "react";
import "./section1.css";
import Logo from "../assets/hash_logo.svg"; // Import as an image

const Section1 = () => {
  return (
    <section>
      <div className="logo-container">
        <img src={Logo} alt="Hash Logo" className="logo" />
      </div>

      <div className="prize-pool">PRIZE POOL: ₹10,000</div>
      
    </section>
  );
};

export default Section1;
