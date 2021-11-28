import React from "react";

import { NavLink, Redirect } from "react-router-dom";
import Home from "../home-page/Home";
import "./Nav.css";
import { ReactComponent as ReactLogo } from "./2 1.svg";
import { ReactComponent as ReactIcon1 } from "./icons_shopping-bag.svg";
import { ReactComponent as ReactIcon2 } from "./icons_person.svg";
import { ReactComponent as ReactIcon3 } from "./sell-your-item-btn.svg";
import { ReactComponent as ReactLink1 } from "./Clothing.svg";
import { ReactComponent as ReactLink2 } from "./Bag.svg";
import { ReactComponent as ReactLink3 } from "./Others.svg";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

import { auth, db } from "../../../firebase";
const Nav = () => {
  //changed
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const [signedOut, setSignedOut] = useState("");
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

  const logout = (e) => {
    console.log("signedout");
    auth.signOut();
    setSignedOut(true);
    /* e.preventDefault(); */
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);
  //till here
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <NavLink to="/exploreourcollection" exact>
              <ReactLink1 />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              <ReactLink2 />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              <ReactLink3 />
            </NavLink>
          </li>
        </ul>
      </nav>

      <NavLink to="/" exact>
        <ReactLogo style={{ height: 150 }} />
      </NavLink>

      <div className="navbar-right">
        <NavLink to="/sellproduct">
          <ReactIcon3 />
        </NavLink>

        <NavLink to="/cart">
          <ReactIcon1 />
        </NavLink>
        <NavLink to="/Login">
          <ReactIcon2 />
        </NavLink>
      </div>
      <div className="dashboard">
        <div className="dashboard__container">
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
          {/* {signedOut} <Redirect to={{ pathname: "/" }} />; */}
          {signedOut && <Home />}
        </div>
      </div>
    </div>

    // <div>
    //   <header>
    //     <h1 className="logo" to="/" exact>
    //       <ReactLogo />
    //     </h1>
    //     <div class="header-link">
    //       <ul>
    //         <li>
    //           <NavLink to="/sellproduct">Sell your item</NavLink>
    //         </li>
    //         <li>
    //           <NavLink class="link-list" to="/" exact>
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink class="link-list" to="/exploreourcollection">
    //             Our collections
    //           </NavLink>
    //         </li>

    //         <li>
    //           <NavLink class="link-list" to="/Login">
    //             Login
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink class="link-list" to="/cart">
    //             <i class="fas fa-shopping-cart"></i>
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </header>
    // </div>
  );
};

export default Nav;
