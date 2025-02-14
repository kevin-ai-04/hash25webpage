import React from "react";
import "./Loader.css";
import logo from "/logo-only-hash.svg"; // Ensure this path is correct

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="loader-logo" />
    </div>
  );
};

export default Loader;