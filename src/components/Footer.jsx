import React from "react";
import { Mail, Instagram } from "lucide-react";
import "./Footer.css"; // Importing external CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side - Contact with HASH logo */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" className="logo" />
            <p className="contact-text">Contact Us</p>
          </div>
          <p className="email">
            <a href="mailto:hash@mbcet.ac.in" className="email-link">hash@mbcet.ac.in</a>
          </p>
        </div>
        {/* Right Side - Social Icons */}
        <div className="footer-right">
          <a href="https://www.instagram.com/hash.mbcet/" className="social-icon"><Instagram size={24} /></a>
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
