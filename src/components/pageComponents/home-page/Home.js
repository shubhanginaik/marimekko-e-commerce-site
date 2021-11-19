import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import heroBanner from "./hero-banner-area.png";
import { ReactComponent as JoinButton } from "./join-us-btn.svg";

const Home = () => {
  return (
    <div>
      <div className="hero-banner-section">
        <img className="hero-banner" src={heroBanner} alt="heroBanner" />

        <JoinButton className="join-button" />
      </div>

      <div className="top-picks">
        <h3>TOP PICKS FOR TODAY</h3>
        <div className="cards">
          <div className="card1">
            <img />
            <h4>Product name</h4>
            <button>View product</button>
          </div>
          <div className="card1">
            <img />
            <h4>Product name</h4>
            <button>View product</button>
          </div>
          <div className="card1">
            <img />
            <h4>Product name</h4>
            <button>View product</button>
          </div>
        </div>

        <div className="explore-collection">
          <h3>BE YOURSELF, GO BOLDLY</h3>
          <NavLink to="/explore-our-collection">
            <button>Explore our Collection</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
