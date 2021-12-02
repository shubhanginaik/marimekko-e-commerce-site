import React from "react";
import joinButton from "./join-btn.svg";
import footer from "./footer.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <img className="footer" src={footer} alt="" />
      <img className="join-btn" src={joinButton} alt="" />
    </div>
  );
};

export default Footer;
