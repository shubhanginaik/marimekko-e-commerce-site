import React, { Component } from "react";
import Form from "./Form";
import Home from "../pageComponents/home-page/Home";
import "./SellProduct.css";
import Popup from "./Popup"

class SellProduct extends Component {
  state = {
    showHome: false,
    showPopup:false,
    category:"",
    heading:"",
    description:"",
    price:"",
    location:"",
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
       showHome: true, 
      });
  };
  popupHandler = (e) => {
    e.preventDefault();
    this.setState({ 
      showPopup: true,
     });
  };
  render() {
    const props={
      category:this.state.category,
      heading:this.state.heading,
      description:this.state.description,
      location:this.state.location,
      price:this.state.price,
    };
    return (
      <div className="sellProduct">
        <Form submit={this.submitHandler}
        click={this.popupHandler}
        />
        {this.state.showHome && <Home />}
        { this.state.showPopup && < Popup 
        {...props}/>}
      </div>
    );
  }
}

export default SellProduct;