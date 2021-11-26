import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import heroBanner from "./hero-banner-area.png";
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
      <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
