import React from "react";
import PublishPost from "./Publish your post.svg";
import preview from "./preview.svg";
import publish from "./publish.svg";
import sellerInfo from "./SellerInfo.svg";

const Form = (props) => {
  const CloseHandler = () => {
    window.location.reload();
  };
  return (
    <form onSubmit={CloseHandler}>
      <div className="publishYourPost">
        <img src={PublishPost} alt="" />
        <div className="form__textBox">
          <label htmlFor="categories"> </label>
          <select
            className="form_textBox"
            name="categories"
            id="categories"
            placeholder="Choose a category"
            required
          >
            <option value="None">Choose a category</option>
            <option value="Clothing">Clothing</option>
            <option value="Bags">Bags</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form__textBox">
          <label htmlFor="heading"> </label>
          <input
            type="text"
            className="form_textBox"
            name="heading"
            id="heading"
            placeholder="Heading"
            required
          />
        </div>
        <div className="form__textBox">
          <label htmlFor="description"> </label>
          <textarea
            rows="6"
            cols="47"
            name="description"
            id="description"
            placeholder="Product Description"
            className="form_textBox"
          ></textarea>
        </div>
        <div className="form__textBox">
          <label htmlFor="price"></label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            className="form_textBox"
          />
        </div>
        <div className="form__textBox">
          <label htmlFor="avatar">Upload a Picture </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            className="form_textBox"
            multiple
          />
        </div>

        <div className="form__textBox">
          <label htmlFor="location"> </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            className="form_textBox"
            required
          />
        </div>
      </div>

      <div className="sellerInfomation">
        <img src={sellerInfo} alt="" />
        <div className="form__textBox">
          <label></label>
          <input
            type="text"
            maxLength="25"
            placeholder="Name"
            className="form_textBox"
          />
        </div>
        <div className="form__textBox">
          <label></label>
          <input
            type="email"
            className="email"
            placeholder="Email"
            className="form_textBox"
            readOnly
          />
        </div>
        <div className="form__textBox">
          <label></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form_textBox"
            placeholder="Phone number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
      </div>

      <div className="buttons">
        <img className="submit" src={preview} alt="" />
        <img className="preview" src={publish} alt="" />
      </div>

      {/* <div className="submit">
        <input type="submit" value="Publish" className="submit" />
      </div>
      <div className="preview">
        <input type="button" value="Preview" className="preview" />
      </div> */}
    </form>
  );
};

export default Form;
