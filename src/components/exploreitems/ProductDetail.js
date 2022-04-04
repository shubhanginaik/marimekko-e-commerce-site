import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./product-detail.css";
import { db } from "../../firebase";
const ProductDetail = () => {
  let { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    const response = db.collection("sellcontact");
    response.onSnapshot((querySnapShot) => {
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

  const itemsFilter = products.filter((item) => {
    console.log("item", item);
    console.log("item id", item.id);
    return item.id == id;
  });

  return (
    !isLoading &&
    products &&
    itemsFilter && (
      <div className="product-detail">
        <div className="product-detail-left">
          <img
            className="product-image"
            src={itemsFilter[0].file}
            alt="product_picture"
          />
        </div>
        <div className="product-detail-right">
          <div className="product-header">
            <div className="product-name-single">
              <p className="product-header-row">{itemsFilter[0].heading}</p>
            </div>
            <div className="product-price-single">
              <p>{`${itemsFilter[0].price}€`}</p>
            </div>
          </div>
          <div className="product-content-row">
            <div className="product-content-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="product-content-text">
              <p>{itemsFilter[0].name}</p>
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
            Category: <span>{itemsFilter[0].categories}</span>
          </p>
          <br></br>
          <div className="product-description">
            <span>
              <textarea name="category" rows="8" cols="60" defaultValue={itemsFilter[0].description}>
                
              </textarea>
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
