import React from 'react';

const Form = (props) => {
    const CloseHandler=()=>{
        window.location.reload();
    }
    return (
        <form onSubmit={CloseHandler} >
            <h1>Post your add here....</h1>
            <div>
            <label htmlFor="categories">Choose a category </label>
            <select
            className="categories"
             name="categories" 
             id="categories"
             required >
                 <option value="None" >None</option>
                <option value="Clothing" >Clothing</option>
                <option value="Bags">Bags</option>
                <option value="Other">Other</option>
            </select>
            </div>
           <div>
            <label htmlFor="heading"> Heading </label>
            <input type="text"
            className="heading"
             name="heading" 
             id="heading"
             required />
            </div>
            <div className="product_description">
                <label htmlFor="description">Product Description </label>
                <textarea rows="6" cols="47" name="description" id="description"></textarea>
            </div>
            <div className="price">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price"/>
            </div>
            <div className="picture">
                <label htmlFor="avatar">Upload a Picture </label>
                <input type="file" id="avatar" name="avatar"
                    accept="image/png, image/jpeg" multiple/>
            </div>
            
            <div className="sellerinfo">
            <label htmlFor="location"> Location </label>
            <input type="text" name="location" id="location" required/>
            </div>
            <div>
            <h2>Seller's Information</h2>
            <div>
            <label>Name</label>
            <input type="text" maxLength="25"/>
            </div>
            <div>
            <label>Email</label>
            <input type="email" className="email" readOnly/>
            </div>
            <div >
            <label>Phone number</label>
            <input type="tel" id="phone" name="phone" className="phone" placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
            </div>
            
            </div>
            <div className="submit">
                <input type="submit" value="Publish" className="submit"/>
                
            </div>

        </form>
    );
};

export default Form;