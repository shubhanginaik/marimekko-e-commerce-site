import React from "react";
import "./Home.css";
import SingleItem from "../../exploreitems/SingleItem";

import { NavLink } from "react-router-dom";
import heroBannerLeft from "./hero-banner-left.svg";
import heroBannerRight from "./hero-banner-right.svg";

import goal from "./goal.svg";
import how from "./how.svg";
import mision from "./mision.svg";
import vision from "./vision.svg";
import topPicks from "./topPicks.svg";
import exploreCollection from "./explore-our-collection.svg";
import { ReactComponent as JoinButton } from "./join-us-btn.svg";
//changed
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

import { auth, db, logout } from "../../../firebase";

const Home = () => {
  //changed
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);
  //till here

  return (
    <div>
      <div className="hero-banner-section">
        <img className="hero-banner-left" src={heroBannerLeft} alt="heroBanner" />
        <img className="hero-banner-right" src={heroBannerRight} alt="heroBanner" />

        <JoinButton className="join-button" />
      </div>

      <div className="after-hero-banner">
        <img className="mision" src={mision} alt="" />
        <img className="vision" src={vision} alt="" />

        <img className="goal" src={goal} alt="" />
        <img className="how" src={how} alt="" />
      </div>

      <div className="top-picks">
        <img className="top-picks-line" src={topPicks} alt="" />
        <div className="cards">
          
        </div> 
 
        <div className="explore-collection">
          <div className="topPicksProduct">
       <SingleItem/>
       <SingleItem/>
       <SingleItem/>
      
       </div>
          <NavLink to="/exploreourcollection">
            <img className="exploreCollection" src={exploreCollection} alt="explore-collection"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
