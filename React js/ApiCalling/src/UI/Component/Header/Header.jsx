import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="menu d-flex align-items-center">
            <h2 className="menu__title">BY</h2>
            <nav className="menu__nav">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact Us</NavLink>
                <NavLink to={"/product"}>Product</NavLink>
            </nav>
            <div className="menu__side">

                <span role='button'>
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <path d="M7.5 1.667A5.84 5.84 0 0 1 13.333 7.5 5.84 5.84 0 0 1 7.5 13.333 5.84 5.84 0 0 1 1.667 7.5 5.84 5.84 0 0 1 7.5 1.667M7.5 15a7.463 7.463 0 0 0 4.693-1.66l6.383 6.415a.833.833 0 0 0 1.181-1.176l-6.39-6.422A7.453 7.453 0 0 0 15 7.5 7.508 7.508 0 0 0 7.5 0 7.508 7.508 0 0 0 0 7.5 7.508 7.508 0 0 0 7.5 15" fill="#000" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
