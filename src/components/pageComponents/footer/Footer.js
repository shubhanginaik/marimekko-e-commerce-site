import React from "react";
import { Link } from "react-router-dom";
import joinButton from "./join-btn.svg";
import footer from "./footer.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <img className="footer" src={footer} alt="" />
      
      <Link to="/login">
      <img className="join-btn" src={joinButton} alt="" />
      </Link>
    </div>
  );
};

export default Footer;
