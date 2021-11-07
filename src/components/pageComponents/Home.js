import React from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className="hero-banner">
                <h2>MARIMEKKO COMMUNITY BOOSTER</h2>
                <h1>We created a sustainable community</h1>
                <button>Join us</button>
                
            </div>

            <div className="top-picks">
                <h3>TOP PICKS FOR TODAY</h3>
                <div className="cards">
                    <div className="card1">
                        <img />
                        <h4>Product name</h4>
                        <button>View product</button>
                    </div>
                    <div className="card1">
                        <img />
                        <h4>Product name</h4>
                        <button>View product</button>
                    </div>
                    <div className="card1">
                        <img />
                        <h4>Product name</h4>
                        <button>View product</button>
                    </div>
                </div>

                <div className="explore-collection">
                    <h3>BE YOURSELF, GO BOLDLY</h3>
                    <NavLink to="/explore-our-collection"><button>Explore our Collection</button></NavLink>
                </div>
                
            </div>
        </div>
    );
};

export default Home;