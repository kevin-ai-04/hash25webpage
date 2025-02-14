import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1Height = document.getElementById("section1").offsetHeight;
      setIsSticky(window.scrollY >= section1Height - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isSticky ? "sticky" : "bottom"}`}>
      <ul>
        <li onClick={() => scrollToSection("section1")}>HOME</li>
        <li onClick={() => scrollToSection("section2")}>ABOUT</li>
        <li onClick={() => scrollToSection("section3")}>EVENTS</li>
        <li onClick={() => scrollToSection("section4")}>TIMELINE</li>
      </ul>
    </nav>
  );
};

export default Navbar;
