import React from "react";
import { useParams, useHistory } from "react-router";
import { items } from "./clothesdata";
import "./product-detail.css";

const ProductDetail = () => {
    let { product } = useParams();
    let history = useHistory();
    const itemsFilter = items.filter((item) => {
        return item.name.toLowerCase().includes(product.toLowerCase());
    });

    return (
        <div className="product-detail">
            <div className="product-detail-left">
                <img
                    className="product-image"
                    src={`/images/${product}.png`}
                    alt="product_picture"
                />
            </div>
            <div className="product-detail-right">
                <div className="product-header">
                    <div className="product-name">
                        <p className="product-header-row">{product}</p>
                    </div>
                    <div className="product-price">
                        <p>{itemsFilter[0].price}</p>
                    </div>
                </div>
                <div className="product-content-row">
                    <div className="product-content-icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="product-content-text">
                        <p>{itemsFilter[0].customerName}</p>
                    </div>
                </div>
                <div className="product-content-row">
                    <div className="product-content-icon">
                        <i className="fas fa-phone-alt fa-rotate-90"></i>
                    </div>
                    <div className="product-content-text">
                        <p>{itemsFilter[0].phone}</p>
                    </div>
                </div>
                <div className="product-content-row">
                    <div className="product-content-icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="product-content-text">
                        <p>{itemsFilter[0].email}</p>
                    </div>
                </div>
                <div className="product-footer">Place | Date</div>
                <p className="product-category">
                    Category: <span>{itemsFilter[0].category}</span>
                </p>
                <br></br>
                <p className="product-category">
                    Description:
                    <span>
            <textarea name="category" rows="8" cols="60">
              {itemsFilter[0].description}
            </textarea>
          </span>
                </p>
            </div>
        </div>
    );
};

export default ProductDetail;
