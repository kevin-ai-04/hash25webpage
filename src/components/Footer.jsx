import React from "react";
import { Mail, Instagram, Twitter } from "lucide-react";
import "./Footer.css"; // Importing external CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side - Contact */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" className="logo" />
            <p className="contact-text">CONTACT US</p>
          </div>
          <p className="email">hash@mbcet.ac.in</p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="footer-right">
          <a href="#" className="social-icon"><Instagram size={24} /></a>
          <a href="#" className="social-icon"><Twitter size={24} /></a>
          <a href="mailto:hash@mbcet.ac.in" className="social-icon"><Mail size={24} /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="hash-text">HASH2025</p>
      </div>
    </footer>
  );
}
