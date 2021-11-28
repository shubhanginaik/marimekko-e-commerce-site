import React from 'react';

const Form = (props) => {
    const CloseHandler=()=>{
        window.location.reload();
    }
    return (
        <form onSubmit={CloseHandler} >
            <h1>Post your add here....</h1>
            <div>
            <label htmlFor="categories">Choose a category: </label>
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
            <label htmlFor="size"> Size: </label>
            <select
            className="size"
             name="size" 
             id="size"
             required >
                <option value="None" >None</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            </div>
            
            <div className="picture">
                <label htmlFor="picture">Upload a Picture: </label>
                <input type="file" />
                
            </div>
            <div className="product_description">
                <h2>Product Description: </h2>
                <div>
                <input type="radio" value="New" name="product_description" selected/>
                <span htmlFor="new"> Like new </span>
                </div>
                <div>
                <input type="radio"
                 value="Good" 
                 checked 
                 name="product_description"/>
                <span htmlFor="good"> Good </span>
                </div>
                <div>
                <input type="radio" value="Fair" name="product_description"/>
                <span htmlFor="fair"> Fair </span>
                </div>
            </div>
            <div>
            <label htmlFor="location"> Location:</label>
            <input type="text" required/>
            </div>
            
            <div className="submit">
                <input type="submit" value="Save" className="submit"/>
                
            </div>

        </form>
    );
};

export default Form;