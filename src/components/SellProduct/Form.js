import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PublishPost from "./Publish your post.svg";
import sellerInfo from "./SellerInfo.svg";
import close from "./close.svg";

import {db} from '../../firebase';
import {storage} from '../../firebase';

const Form = () => {


  const [categories,setCategories]=useState('');
  const [heading,setHeading]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState('');
  const [file,setfile]=useState('');
  const [location,setLocation]=useState('');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [url, setURL] = useState("");
  
  
  const submitHandler = (event) => {
    event.preventDefault();
    const ref =  storage.ref(`/images/${file.name}`);
    const uploadTask =  ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
       ref
        .getDownloadURL()
        .then((url) => {
          setfile(null);
          setURL(url);
          console.log('url is',url);
          db.collection('sellcontact').add({
            id: new Date().valueOf(),
            categories:categories,
            heading:heading,
            description:description,
            price:price,
            file:url,
            location:location,
            name:name,
            email:email,
            phone:phone,
            datetime: new Date()
          })
          .then(()=>{
            alert("Your product has been published!")
          })
          .catch(error=>{
            alert(error.message);
          });
          setCategories('');
          setHeading('');
          setDescription('');
          setPrice('');
          setfile('');
          setLocation('');
          setName('');
          setEmail('');
          setPhone('');
        });
    });
  };
  
  const history = useHistory();
  
  return (
   
    <form id="sellForm"
    onSubmit={submitHandler}>
      <div className="form-container">
        <img
          className="close"
          src={close}
          alt=""
          onClick={() => history.goBack()}
        />
        <div className="publishYourPost">
          <img src={PublishPost} alt="" />
          <div className="form__textBox">
            <label htmlFor="categories"> </label>
            <select
              className="form_textBox"
              name="categories"
              id="categories"
              required
              value={categories}
              onChange={(e)=>setCategories(e.target.value)}
            >
              <option value="None">Choose a category</option>
              <option value="Clothing">Clothing</option>
              <option value="Bags">Bags</option>
              <option value="Home accessories">Home accessories</option>
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
              value={heading}
              onChange={(e)=>setHeading(e.target.value)}
            />
          </div>
          <div className="form__textBox">
            <label htmlFor="description"> </label>
            <textarea
              rows="6"
              cols="47"
              className="form_textBox"
              name="description"
              id="description"
              placeholder="Product Description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form__textBox">
            <label htmlFor="price"></label>
            <input
            className="form_textBox"
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />
          </div>
          <div className=" upload">
            <label className="uploadPic" htmlFor="avatar">Upload a Picture </label>
            <input
              className="form_textBox"
              type="file"
              id="avatar"
              name="avatar"
              //accept="image/png, image/jpeg"
              // multiple
              //value={file}
              onChange={(e)=>setfile(e.target.files[0])} 

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
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="sellerInfomation">
          <img src={sellerInfo} alt="" />
          <div className="form__textBox">
            <label></label>
            <input
              className="form_textBox"
              type="text"
              maxLength="25"
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="form__textBox">
            <label></label>
            <input
              
              type="email"
              className="email"
              placeholder="Email"
              className="form_textBox"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              pattern="[0-9]{10}"
              required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="button">
          <input disabled={!file} type="submit" value="Publish" 
          className={file ? "submit" : "disabled_submit"} />
        </div>
      </div>
    </form>
     
  );
};

export default Form;