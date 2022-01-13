import React, { Component, useState,useEffect } from "react";
import Form from "./Form";
import Home from "../pageComponents/home-page/Home";
import "./SellProduct.css";
import { auth} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// class SellProduct extends Component {
//   state = {
//     showHome: false,
//   };
const SellProduct = () => {
  const [showHome, setShowHome]= useState(false);
  const [user, loading] = useAuthState(auth);
  
  console.log(user)
 // console.log(user.displayName)
  // console.log(user.email)
  const submitHandler = (event) => {
    event.preventDefault();
    setShowHome(true);
  };
  
    return (
      <div className="sellProduct">
        
         {auth && <Form submit={submitHandler}
          />}
        {showHome && <Home />}
       
      </div>
    );
  
}

export default SellProduct;
