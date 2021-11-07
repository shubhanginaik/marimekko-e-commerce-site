import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            Clothing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact>
                            Bag
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact>
                            Others
                        </NavLink>
                    </li>
                </ul>

                <NavLink to="/" exact>
                    Marimekko logo
                </NavLink>
                    
                <NavLink to="/sell-your-item"><button>Sell your item</button>
                </NavLink>
                    
                
            </nav>
        </div>
    );
};

export default Nav;