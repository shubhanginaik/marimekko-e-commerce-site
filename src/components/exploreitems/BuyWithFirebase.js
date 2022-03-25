import React,{useState,useEffect} from 'react';
import {db} from '../../firebase';
import SingleItem from "./SingleItem";
function BuyWithFirebase()  {
    const [products,setProducts]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchBlogs=async()=>{
        const response=db.collection('sellcontact');
        response.onSnapshot((querySnapShot) => {
            const saveFirebaseProducts = [];
            querySnapShot.forEach((doc) => {
                saveFirebaseProducts.push(doc.data());
            });
        setProducts(saveFirebaseProducts);
        setIsLoading(false);
        console.log('products',products);
    }) 
    }
    useEffect(() => {
        fetchBlogs();
        console.log('products',products);
      }, []);
      //let itemsListing = blogs.map((item) => <SingleItem key={item.name} {...item} />);
    return (
        
        <div>
           {
           
           !isLoading &&
           products && products.map((product)=>(<SingleItem key={product.name} {...product} />)
           )}
        </div>
    )
};

export default BuyWithFirebase;