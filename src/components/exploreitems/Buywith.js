import React,{useState,useEffect} from 'react';
import { Table, Button, ButtonGroup } from "react-bootstrap";
import {Switch, Route} from "react-router";
import {useRouteMatch}from "react-router-dom";
import {db} from '../../firebase';
import SingleItem from "./SingleItem";
import ProductDetail from "./ProductDetail";
import "./Buywith.css"
function Buywith()  {
    const [products,setProducts]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchedValue, setSearchedValue] = useState('');
    const [page, setPage] = useState(1);
    const match = useRouteMatch();
    useEffect(() => {
        fetchProducts();
        console.log('products',products);
      }, []);
    const fetchProducts=async()=>{
        const response=db.collection('sellcontact');
        response.orderBy('datetime','desc').limit(12).onSnapshot((querySnapShot) => {
            const saveFirebaseProducts = [];
            querySnapShot.forEach((doc) => {
                saveFirebaseProducts.push(doc.data());
            });
        setProducts(saveFirebaseProducts);
        setIsLoading(false);
        console.log('products',products);
    }) 
    }
    
      const showNext = ({ item }) => {
        if(products.length === 0) {
            alert("Thats all we have for now !")
        } else {
            const fetchNextData = async () => {
                await db.collection('sellcontact')
                .orderBy('datetime','desc')
                .limit(12)
                .startAfter(item.datetime)
                    .onSnapshot(function(querySnapshot) {
                        const items = [];
                        querySnapshot.forEach(function(doc) {
                            items.push({ key: doc.id, ...doc.data() });
                        });
                        setProducts(items);
                        setPage(page + 1)
                    })
            };
            fetchNextData();
        }
    };

    const showPrevious = ({item}) => {
        const fetchPreviousData = async () => {
            await db.collection('sellcontact')
                .orderBy('datetime','desc')
                .endBefore(item.datetime)
                .limitToLast(12)
                .onSnapshot(function(querySnapshot) {
                    const items = [];
                    querySnapshot.forEach(function(doc) {
                        items.push({ key: doc.id, ...doc.data() });
                    });
                    setProducts(items);
                    setPage(page - 1)
                })
        };
        fetchPreviousData();
    };
    const searchHandler = (e) => {
        console.log('search method');
        setSearchedValue(e.target.value);
        console.log('serchvalue',searchedValue);
        setProducts(
          products.filter((item) => (item.heading.toLowerCase().includes(searchedValue.toLowerCase())))
        );
        
      };
      
      
    return (
        <div>
        <Switch>
        <Route  exact path={`${match.path}`}>
        <div className="explore-our-collection">
                    <div className="searchInput">
                    <input type="text"  className="search"  placeholder="Search" onChange={e => setSearchedValue(e.target.value)} />
                    </div>
                    <div className="product-page">
           {
           
           !isLoading &&
           products && products.filter(li => li.heading.toLowerCase().includes(searchedValue.toLowerCase())).map((product)=>(<SingleItem key={product.id} {...product} />)
           )}
        </div>
                    
                    
            {
                //show previous button only when we have items
                page === 1 ? '' : 
                <Button className="submit" onClick={() => showPrevious({ item: products[0] }) }>Previous</Button>
            }

            {
                //show next button only when we have items
                products.length < 12 ? '' :
                <Button className="submit" onClick={() => showNext({ item: products[products.length - 1] })}>Next</Button>
            }
          </div>  
        </Route>
                <Route path={`${match.path}/:id`}>
                    <ProductDetail/>
                </Route>
            </Switch>
            </div>
    )
};

export default Buywith;