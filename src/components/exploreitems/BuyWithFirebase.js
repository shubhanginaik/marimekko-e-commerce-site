import React,{useState,useEffect} from 'react';
import {Switch, Route} from "react-router";
import {useRouteMatch}from "react-router-dom";
import {db} from '../../firebase';
import SingleItem from "./SingleItem";
import ProductDetail from "./ProductDetail";
function BuyWithFirebase()  {
    const [products,setProducts]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const match = useRouteMatch();
    const fetchProducts=async()=>{
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
        fetchProducts();
        console.log('products',products);
      }, []);
      const recentList=products.slice(0,12);
    return (
        <Switch>
        <Route  exact path={`${match.path}`}>
        <div>
           {
           
           !isLoading &&
           recentList && recentList.map((product)=>(<SingleItem key={product.id} {...product} />)
           )}
        </div>
        </Route>
                <Route path={`${match.path}/:id`}>
                    <ProductDetail/>
                </Route>
            </Switch>
    )
};

export default BuyWithFirebase;