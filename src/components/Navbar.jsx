import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={`navbar ${isOpen ? "open" : "closed"}`}>
        <ul>
          <li onClick={() => scrollToSection("section1")}>HOME</li>
          <li onClick={() => scrollToSection("section2")}>ABOUT</li>
          <li onClick={() => scrollToSection("section3")}>EVENTS</li>
          <li onClick={() => scrollToSection("section4")}>TIMELINE</li>
        </ul>
      </div>
      <button className="toggle-btn" onClick={toggleNavbar}>
        {isOpen ? "Hide Menu" : "Show Menu"}
      </button>
    </>
  );
};

export default Navbar;
