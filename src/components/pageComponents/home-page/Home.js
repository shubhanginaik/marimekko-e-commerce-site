import React from "react";
import "./Home.css";
import Product from "../../exploreitems/Product";
import { NavLink, Link } from "react-router-dom";
import heroBannerLeft from "./hero-banner-left.svg";
import heroBannerRight from "./hero-banner-right.svg";
import goal from "./goal.svg";
import how from "./how.svg";
import mision from "./mision.svg";
import vision from "./vision.svg";
import topPicks from "./topPicks.svg";
import exploreCollection from "./explore-our-collection.svg";
import JoinButton from "./join-us-btn.svg";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, db } from "../../../firebase";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const fetchProducts = async () => {
    const response = await db.collection("sellcontact");
    response.orderBy("datetime", "desc")
    .limit(3).onSnapshot((querySnapShot) => {
      const saveFirebaseProducts = [];
      querySnapShot.forEach((doc) => {
        saveFirebaseProducts.push(doc.data());
      });
      setProducts(saveFirebaseProducts);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
      console.log(name);
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
  
  const itemsListing = products.map((item) => (
    <Product key={item.id} {...item} />
  ));
  return (
    <div>
      <div className="hero">
        <div className="hero-banner-section">
          <img
            className="hero-banner-left"
            src={heroBannerLeft}
            alt="heroBanner"
          />
          <img
            className="hero-banner-right"
            src={heroBannerRight}
            alt="heroBanner"
          />
        </div>
        <Link to="/login">
          <img className="join-button" src={JoinButton} alt="join-button" />
        </Link>
      </div>
      <div className="after-hero-banner">
        <img className="mision" src={mision} alt="" />
        <img className="vision" src={vision} alt="" />

        <img className="goal" src={goal} alt="" />
        <img className="how" src={how} alt="" />
      </div>

      <div className="top-picks">
        <img className="top-picks-line" src={topPicks} alt="" />
        <div className="cards"></div>
            <div className="explore-collection">
              <div className="topPicksProduct">{itemsListing}</div>
            </div>
        <NavLink to="/exploreourcollection">
          <img
            className="exploreCollection"
            src={exploreCollection}
            alt="explore-collection"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
