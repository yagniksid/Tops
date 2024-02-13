import React, { useState } from 'react'
import "./Header.css"
import { Button, Nav, NavItem } from "reactstrap";
import { NavLink, useNavigate } from 'react-router-dom';
import RegisterModal from '../Modal/RegisterModal';
import LoginModal from '../Modal/LoginModal';

export default function Header() {
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);

    const loginData = JSON.parse(localStorage.getItem("logData")) || []

    const navigate = useNavigate()

    const loginToggle = () => setLoginModal(!loginModal);
    const registerToggle = () => setRegisterModal(!registerModal);

    const logoutHandler = () => {
        localStorage.setItem("logData", JSON.stringify([]))
        navigate("/")
    }

    return (
        <>
            <RegisterModal modal={registerModal} toggle={registerToggle} loginToggle={loginToggle} />
            <LoginModal modal={loginModal} toggle={loginToggle} registerToggle={registerToggle} />

            <header className="header-fixed">

                <div className="header-limiter d-flex align-items-center justify-content-between ">
                    <h1><a href="#">B<span>Y</span></a></h1>
                    <div>
                        <Nav className='d-flex gap-3'>
                            <NavItem>
                                <NavLink to={"/"} >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/about"} >About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/service"} >Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/contact"} >Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div>
                        {Object.keys(loginData).length > 0 ?
                            (<Button onClick={logoutHandler}>Log out</Button>
                            )
                            : (<Button Button className='btn' onClick={loginToggle}>Log in</Button>)
                        }
                    </div>
                </div>

            </header >
        </>
    )
}
