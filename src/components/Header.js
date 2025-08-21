import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                Booking App
            </Link>
            <nav>
                <Link to="/">Objects</Link>
            </nav>
        </header>
    );
}

export default Header;