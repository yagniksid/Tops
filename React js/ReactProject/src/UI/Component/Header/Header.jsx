import React, { useState } from 'react'
import "./index.css"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from 'reactstrap'
import LoginModal from '../Modal/LoginModal'
import RegisterModal from '../Modal/RegisterModal'
export default function Header() {
    const [loginModal, setLoginModal] = useState(false)

    const loginToggle = () => setLoginModal(!loginModal);

    const [registerModal, setRegisterModal] = useState(false);

    const registerToggle = () => setRegisterModal(!registerModal);
    const data = JSON.parse(localStorage.getItem("user"))


    const logoutHandler = () => {
        console.log("------>");
        localStorage.setItem("user", JSON.stringify({}));
        setLoginModal(true);
    };
    const navigate = useNavigate()

    return (
        <>
            <LoginModal toggle={loginToggle} modal={loginModal} />

            <RegisterModal toggle={registerToggle} modal={registerModal} />

            <header class="sticky">
                <b>BY</b>
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/profile"}>Profile</NavLink>
                </nav>
                <div className='d-flex justify-content-end w-100 gap-3'>
                    <Button style={{ backgroundColor: "#ffb217", color: "white", border: "none", fontWeight: "bold" }} onClick={registerToggle}>Register</Button>
                    <div>
                        {Object.keys(data).length > 0 ?

                            (<Button style={{ backgroundColor: "#ffb217", color: "white", border: "none", fontWeight: "bold" }} onClick={logoutHandler}>Log out</Button>)

                            :

                            (<Button Button style={{ backgroundColor: "#ffb217", color: "white", border: "none", fontWeight: "bold" }} onClick={loginToggle}>Log in</Button>)

                        }
                    </div>

                    <Button color='success' onClick={() => navigate("/newuser")} >Click Here</Button>
                </div>
            </header >

        </>
    )
}
