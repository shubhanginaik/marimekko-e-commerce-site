import React, { useState } from "react";
import Form from "./Form";
import Home from "../pageComponents/home-page/Home";
import "./SellProduct.css";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

  const SellProduct = () => {
  const [showHome, setShowHome] = useState(false);
  const [user, setUser] = useAuthState(auth);

  console.log(user);
  const submitHandler = (event) => {
    event.preventDefault();
    setShowHome(true);
  };

  return (
    <div className="sellProduct">
      {auth && <Form submit={submitHandler} />}
      {showHome && <Home />}
    </div>
  );
};

export default SellProduct;
