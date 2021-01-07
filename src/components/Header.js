import React from 'react';
import { Link } from "react-router-dom";
import { useStateValue } from '../contextAPI/StateProvider';

function Header() {

    const [{ nominees }, dispatch] = useStateValue();

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <img className="logo" src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png" alt="shopify-logo"/>
                        <Link to="/">The Shoppies</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">My Nominees</Link>
                        </li>
                        <li>
                            {nominees.length === 5 ? (<button className="btn" disabled>+ Add Nominees</button>) : (
                                <Link to="add" className="btn">+ Add Nominees</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
