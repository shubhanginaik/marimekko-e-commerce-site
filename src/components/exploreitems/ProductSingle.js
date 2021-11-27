import React from "react";
import {useParams, useHistory} from "react-router";
import {items} from "./clothesdata";
import "./product-detail.css"

const ProductSingle = () => {
    let {product} = useParams();
    let history = useHistory();
    const itemsFilter = items.filter((item) => {
        return item.name.toLowerCase().includes(product.toLowerCase());
    });

    return (
        <div className="product-detail">
            <div className="product-detail-left">
                <img className="product-image" src={`/images/${product}.png`} alt="product_picture"/>
            </div>
            <div className="product-detail-right">
                <h1>{product}</h1>
                <p>Amount</p>
                <p>Phone number</p>
                <p>Email Id</p>
                <p>Location</p>
                <p>Date Posted</p>
            </div>
        </div>
    );
};

export default ProductSingle;
