import React from "react";
import { Link, NavLink } from "react-router-dom";
import joinButton from "./join-btn.svg";
import footer from "./footer.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <img className="footer" src={footer} alt="" />

      <NavLink to="/login">
        <img className="join-btn" src={joinButton} alt="" />
      </NavLink>
    </div>
  );
};

export default Footer;
