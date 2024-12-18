import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/classes">Classes</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/booking">Book a session</Link></li>
                    <li><Link to="/login"> Log In</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;