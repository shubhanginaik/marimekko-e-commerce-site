import React,{useState} from 'react';
import Popup from './Popup';
// import Popup from './Popup';



const Form = () => {
    const CloseHandler=()=>{
        window.location.reload();
    }
    
    // const [showPopup, setPopup]= useState(false)
    // // const [heading, setHeading]= useState('')
    // const previewHandler = ()=>{
    //     setPopup(true)
    // }
    
    return (
        <form onSubmit={CloseHandler} >
            <h1>Post your add here....</h1>
            <div>
            <label htmlFor="categories">Choose a category: </label>
            <select
            className="categories"
             name="category" 
             id="categories"
             required
             
              >
                 <option value="None" >None</option>
                <option value="Clothing" >Clothing</option>
                <option value="Bags">Bags</option>
                <option value="Other">Other</option>
            </select>
            </div>
            <div>
                <label htmlFor="heading">Heading:</label>
                <input type="text" id="heading" name="heading" />
            </div>
            <div className="product_description">
                <label>Product description: </label>
                <textarea rows='6' cols='40'name="description"/>
            </div>
            
            <div className="picture">
                <label htmlFor="picture"> Upload a Picture: </label>
                <input type="file" name="picture"/>
            </div>

            <div className="price">
                <label htmlFor="price">Price: </label>
                <span className="currency-code">€</span>
                <input type="number" name ="price" className="text-currency" 
                required 
                /> 
            </div>
           
            <div>
            <label htmlFor="location"> Location:</label>
            <input type="text" name = "location" required />
            </div>
            
            <div className="submit">
                <input type="submit" value="Publish" className="submit"/>
                <button>Preview</button>
                
            </div>

        </form>
    );
};

export default Form;