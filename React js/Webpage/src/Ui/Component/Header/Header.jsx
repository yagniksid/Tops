import React, { useRef, useState } from 'react';
import { Mic, Search } from "lucide-react";
import logoImage from "../../Image/titan-logo.svg";
import cart from "../../Image/cart.svg";
import account from "../../Image/account.svg";
import track from "../../Image/track.svg";
import whishlist from "../../Image/Wishlist.webp";
import { Input } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import "./Header.css"
import AccountModal from '../../Pages/AccountModal';
import { toast } from 'react-toastify';

export default function Header() {
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [accountModal, setAccountModal] = useState(false);
    const [reFetch, setReFetch] = useState(true)

    const loginData = JSON.parse(localStorage.getItem("loginUser")) || [];
    const navigate = useNavigate();

    const loginToggle = () => setLoginModal(!loginModal);
    const registerToggle = () => setRegisterModal(!registerModal);
    const accountToggle = () => setAccountModal(!accountModal);

    const marqueeRef = useRef(null);

    const handleMouseEnter = () => {
        if (marqueeRef.current) {
            marqueeRef.current.stop();
        }
    };

    const handleMouseLeave = () => {
        if (marqueeRef.current) {
            marqueeRef.current.start();
        }
    };

    const accountHandler = () => {
        accountToggle()
        setReFetch(!reFetch)
    }


    const logoutHandler = () => {
        localStorage.removeItem("loginUser");
        navigate("/");
        toast.warning("Log Out Successfully !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            theme: "light"
        });
    };

    return (
        <>
            <div className='w-100 h-9 bg-zinc-800 text-white text-xs flex items-center ps-20 pe-20 '>
                <marquee behavior="scroll" scrollamount="10" direction="left" ref={marqueeRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span className='me-80'>SALE is Live!</span> Get 10% cashback on payment via Mobikwik wallet over Rs. 2999. T&C Apply.
                </marquee>
            </div>
            <div style={{ boxShadow: "#00000047 1px 1px 3px 0px" }} className='pl-20 pe-3 flex items-center justify-between w-100 pt-3 pb-3 font-sans sticky-top top-0 bg-white z-10 '>
                <div className='pe-5'>
                    <img role='button' src={logoImage} className='h-auto w-32' alt="" />
                </div>
                <div className=' flex items-center pe-3 me-3 border border-gray ' style={{ width: "57%" }}>
                    <Search strokeWidth={1} size={20} className='ms-3' role='button' />
                    <Input
                        type='search'
                        name='SearchBar'
                        placeholder='Search'
                        className='rounded-0'
                        style={{ border: "none", borderRight: "none", marginLeft: "8px", boxShadow: "none" }}
                    />
                    <Mic strokeWidth={1} size={20} role='button' />
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <div className='flex flex-col items-center'>
                        <img role='button' src={whishlist} className='h-7 w-7' alt="" />
                        <NavLink className="text-decoration-none  text-sm text-black" to={"/whishlist"} >Whishlist</NavLink>
                    </div>
                    <div className='flex flex-col'>
                        <img role='button' src={cart} className='h-7' alt="" />
                        <NavLink className="text-decoration-none  text-sm text-black" to={"/cart"} >Cart</NavLink>
                    </div>
                    <div className='flex flex-col'>
                        <img role='button' src={track} className='h-5 mt-2' alt="" />
                        <NavLink className="text-decoration-none  text-sm text-black" to={"/track"} >Track order</NavLink>
                    </div>
                    <div className='flex flex-col'>
                        <img role='button' src={account} onClick={accountHandler} className='h-7' alt="" oncli />
                        <NavLink className="text-decoration-none text-sm text-black" onClick={accountHandler}>Account</NavLink>
                    </div>
                </div>
                <div className='flex justify-center'>
                    {Object.keys(loginData).length === 0 && (
                        <button className="bg-amber-500 hover:bg-yellow-600 h-10 rounded w-20 p-0 " onClick={loginToggle}>
                            Log in
                        </button>)
                    }
                </div>
            </div>
            <LoginModal toggle={loginToggle} modal={loginModal} registerToggle={registerToggle} />
            <RegisterModal toggle={registerToggle} modal={registerModal} login={loginToggle} />
            <AccountModal accountToggle={accountToggle} accountModal={accountModal} logoutHandler={logoutHandler} />
        </>
    );
}
