import React from 'react';
import reactLogo from "./images/logo.png"
import reactCompare from "./images/icon-compare.svg"
import reactHeart from "./images/heart.svg"
import reactCart from "./images/cart.svg"
import reactUser from "./images/user.svg"

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img style={{
                            height: "50px",
                            width: "185px"
                        }} src={reactLogo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent"
                        style={{
                            display: "flex !important",
                            justifyContent: "space-between"
                        }}>
                        <div className="d-flex" style={{
                            width: "50%",
                            height: "50px",
                            paddingLeft: "30px"
                        }}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <img src={reactCompare} alt="" style={{
                                            paddingRight: "8px"
                                        }} />Compare</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src={reactHeart} alt="" style={{
                                            paddingRight: "8px"
                                        }} />Wishlist</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src={reactCart} alt="" style={{
                                            paddingRight: "8px"
                                        }} />Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><img src={reactUser} alt="" style={{
                                        paddingRight: "8px"
                                    }} />Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
