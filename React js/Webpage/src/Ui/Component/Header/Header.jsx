import React, { useEffect, useRef, useState } from 'react';
import { Box, CircleUser, GaugeCircle, Mic, PackageCheck, Search, ShoppingCart, User } from "lucide-react";
import logoImage from "../../Image/titan-logo.svg";
import track from "../../Image/track.svg";
import whishlist from "../../Image/Wishlist.webp";
import { Form, Input, InputGroup, InputGroupText } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';

import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchData } from '../../../Redux/feature/search';
import { fetchCart } from '../../../Redux/feature/cartSlice';
import "./Header.css"
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';

export default function Header() {
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [cookies, setCookie] = useCookies(["user", "token"])
    let [search, setSearch] = useState("")

    let user = cookies.user || {}
    let token = cookies.token

    const navigate = useNavigate();

    const loginToggle = () => setLoginModal(!loginModal);
    const registerToggle = () => setRegisterModal(!registerModal);

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

    let dispatch = useDispatch()

    const onChangeHanadler = (value) => {
        console.log("---test", value)
        if (value === "") dispatch(setSearchData(""))
        else setSearch(value)
    }

    let count = useSelector((store) => {
        return store.cartReducer
    })
    useEffect(() => {
        dispatch(fetchCart(token))
    }, [count.reFetch])

    return (
        <>

            <div className='w-100 h-9 bg-zinc-800 text-white text-xs flex items-center ps-20 pe-20 '>
                <marquee behavior="scroll" scrollamount="10" direction="left" ref={marqueeRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span className='me-80'>SALE is Live!</span> Get 10% cashback on payment via Mobikwik wallet over Rs. 2999. T&C Apply.
                </marquee>
            </div>
            <div style={{ boxShadow: "#00000047 1px 1px 3px 0px", zIndex: "3" }} className='pl-20 pe-3 flex items-center justify-between w-100 pt-3 pb-3 font-sans sticky-top top-0 bg-white '>
                <div className='pe-5'>
                    <img role='button' onClick={() => navigate("/")} src={logoImage} className='h-auto w-32' alt="" />
                </div>
                <div className='' style={{ width: "57%" }}>
                    <Form onSubmit={(e) => { e.preventDefault() }}>
                        <InputGroup>
                            <InputGroupText className=' bg-white'>
                                <Search strokeWidth={1} onClick={() => dispatch(setSearchData(search))
                                } size={20} role='button' />
                            </InputGroupText>
                            <Input
                                type='search'
                                name='SearchBar'
                                placeholder='Search'
                                className='rounded-0 shadow-none !border-gray-200'
                                // value={search}
                                onChange={(e) => onChangeHanadler(e?.target?.value)}
                                style={{ borderLeft: "none", borderRight: "none" }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        dispatch(setSearchData(search));
                                    }
                                }}
                            />
                            <InputGroupText className=' bg-white'>
                                <Mic strokeWidth={1} size={20} role='button' />
                            </InputGroupText>
                        </InputGroup>
                    </Form>
                </div>

                <div className='flex gap-10 items-center justify-center'>
                    {
                        cookies?.user?.userType === "customer" &&
                        <>
                            <div className='flex flex-col gap-1 justify-center items-center'>
                                <Box role="button" onClick={() => { navigate("/user-product") }} strokeWidth={1} />
                                <NavLink className="text-decoration-none text-[13px] tracking-widest text-black" to={"/user-product"}>Product</NavLink>
                            </div>
                            <div className='flex flex-col gap-1 justify-center items-center'>
                                <PackageCheck role="button" onClick={() => { navigate("/user-order") }} strokeWidth={1} />
                                <NavLink className="text-decoration-none text-[13px] tracking-widest text-black" to={"/user-order"}>Order</NavLink>
                            </div>
                            <div className='flex flex-col gap-1 justify-center items-center'>
                                <ShoppingCart role='button' onClick={() => { navigate("/user-cart") }} strokeWidth={1} />
                                <NavLink className="text-decoration-none text-[13px] tracking-widest text-black" to={"/user-cart"}>Cart</NavLink>
                            </div>
                        </>
                    }
                    {
                        cookies?.user?.userType !== "admin" && cookies?.user?.userType !== "customer" &&
                        <>
                            <div className='flex flex-col justify-center items-center userHeader'>
                                <img role='button' onClick={() => { navigate("/wishlist") }} src={whishlist} className='h-7 w-7' alt="" />
                                <NavLink className="text-decoration-none text-[13px] tracking-widest text-black" to={"/wishlist"}>Wishlist</NavLink>
                            </div>
                            <div className='flex flex-col justify-center gap-1 items-center userHeader'>
                                <img role='button' onClick={() => { navigate("/track") }} src={track} className='h-5 mt-2' alt="" />
                                <NavLink className="text-decoration-none text-black tracking-wider text-[13px]" to={"/track"}>Track order</NavLink>
                            </div>
                        </>
                    }


                    {
                        cookies?.token ?

                            <div className='flex flex-col justify-center gap-1 items-center'>
                                <CircleUser role='button' strokeWidth={1} onClick={() => navigate("/profile")} />
                                <NavLink className="text-decoration-none text-[13px] tracking-widest text-black" to={"/profile"}>Profile</NavLink>
                            </div>
                            :
                            <div className='flex flex-col justify-center gap-1 items-center mt-1'>
                                <User role='button' strokeWidth={1} onClick={loginToggle} />
                                <span role='button' className="tracking-widest text-[13px] text-decoration-none text-sm text-black" onClick={loginToggle} >Account</span>

                            </div>
                    }
                </div>

            </div>
            <LoginModal modal={loginModal} toggle={loginToggle} registerToggle={registerToggle} />
            <RegisterModal modal={registerModal} toggle={registerToggle} login={loginToggle} />
        </>
    );
}
