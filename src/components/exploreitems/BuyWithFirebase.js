import React,{useState,useEffect} from 'react';
import {Switch, Route} from "react-router";
import {useRouteMatch}from "react-router-dom";
import {db} from '../../firebase';
import SingleItem from "./SingleItem";
import ProductDetail from "./ProductDetail";
function BuyWithFirebase()  {
    const [products,setProducts]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");
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
      
      

      const searchHandler = (e) => {
        setSearchValue(e.target.value);
        console.log('reached',searchValue);
        searchValue === ''
          ? setProducts(products)
          : setProducts(
            products.filter((product) => product.heading.includes(searchValue))
            );
      };
    
    return (
        <Switch>
        <Route  exact path={`${match.path}`}>
        <div className="explore-our-collection">
                    <div className="searchInput">
                    <input type="text"  className="search"  placeholder="Search" onChange={e => setSearchValue(e.target.value)} />
                    </div>
                    <div className="product-page">
           {
           
           !isLoading &&
           products && products.filter(li => li.heading.toLowerCase().includes(searchValue.toLowerCase())).map((product)=>(<SingleItem key={product.id} {...product} />)
           )}
        </div>
                    </div>
        </Route>
                <Route path={`${match.path}/:id`}>
                    <ProductDetail/>
                </Route>
            </Switch>
    )
};

export default BuyWithFirebase;