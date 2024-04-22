import React, { useState } from 'react';
import { User } from "lucide-react";
import logoImage from "../../../assets/images/images.png";
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [loginModal, setLoginModal] = useState(false);
    const loginToggle = () => setLoginModal(!loginModal);
    const [registerModal, setRegisterModal] = useState(false);
    const registerToggle = () => setRegisterModal(!registerModal);
    return (
        <>
            <div style={{ boxShadow: "#00000047 1px 1px 3px 0px", }} className='pl-20 pe-3 flex items-center justify-between w-100 pt-3 pb-3 font-sans sticky-top top-0 bg-white'>
                <div className='pe-5'>
                    <img role='button' src={logoImage} className='h-16 w-16 ' alt="" />
                </div>
                <div className='flex gap-3'>
                    <NavLink className="no-underline text-black" to={"/"} >Home</NavLink>
                    <NavLink className="no-underline text-black" to={"/product"}>Product</NavLink>
                    <NavLink className="no-underline text-black" to={"/about"}>About</NavLink>
                    <NavLink className="no-underline text-black" to={"/service"}>Service</NavLink>
                </div>
                <div className='flex gap-10 items-center justify-center'>
                    <div className='flex flex-col justify-center gap-1 items-center mt-1'>
                        <User onClick={loginToggle} role='button' strokeWidth={1} />
                        <span role='button' onClick={loginToggle} className="tracking-widest text-[13px] text-decoration-none text-sm text-black" >Account</span>
                    </div>
                </div>
            </div>
            <LoginModal modal={loginModal} toggle={loginToggle} registerToggle={registerToggle} />
            <RegisterModal modal={registerModal} toggle={registerToggle} loginToggle={loginToggle} />
        </>
    );
}
