import React, { useRef, useState } from 'react';
import { Mic, Search, User } from "lucide-react";
import logoImage from "../../Image/titan-logo.svg";
import track from "../../Image/track.svg";
import whishlist from "../../Image/Wishlist.webp";
import { Form, Input, InputGroup, InputGroupText } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import { useCookies } from 'react-cookie';
import "./Header.css"
import { useDispatch } from 'react-redux';
import { setSearchData } from '../../../Redux/feature/search';
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

    return (
        <>
            <div className='w-100 h-9 bg-zinc-800 text-white text-xs flex items-center ps-20 pe-20 '>
                <marquee behavior="scroll" scrollamount="10" direction="left" ref={marqueeRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span className='me-80'>SALE is Live!</span> Get 10% cashback on payment via Mobikwik wallet over Rs. 2999. T&C Apply.
                </marquee>
            </div>
            <div style={{ boxShadow: "#00000047 1px 1px 3px 0px" }} className='pl-20 pe-3 flex items-center justify-between w-100 pt-3 pb-3 font-sans sticky-top top-0 bg-white -z-1'>
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

                <div className='flex gap-4 items-center justify-center'>
                    {
                        user.userType === "admin" ?
                            <>
                                <NavLink className="text-decoration-none  text-sm text-black" to={"/admin-dashboard"} >Dashboard</NavLink>
                                <NavLink className="text-decoration-none  text-sm text-black" to={"/admin-product"} >Product</NavLink>
                                <NavLink className="text-decoration-none  text-sm text-black" to={"/admin-order"} >Order</NavLink>
                                <NavLink className="text-decoration-none  text-sm text-black" to={"/admin-user"} >User</NavLink>
                            </>
                            :
                            <>
                                <div className='flex flex-col items-center'>
                                    <img role='button' src={whishlist} className='h-7 w-7' alt="" />
                                    <NavLink className="text-decoration-none  text-sm text-black" to={"/whishlist"} >Whishlist</NavLink>
                                </div>
                                <div className='flex flex-col'>
                                    <img role='button' src={track} className='h-5 mt-2' alt="" />
                                    <NavLink className="text-decoration-none  text-sm text-black" to={"/track"} >Track order</NavLink>
                                </div>

                            </>
                    }
                    {
                        token ?
                            <div className='flex flex-col'>
                                <User role='button' strokeWidth={1} onClick={() => navigate("/profile")} />
                            </div>
                            :
                            <div className='flex justify-center'>
                                <button className="border-2 font-bold px-4  border-black rounded-md hover:bg-black hover:text-white p-1 w-full" onClick={loginToggle}>
                                    Login
                                </button>


                            </div>
                    }
                </div>
            </div>
            <LoginModal toggle={loginToggle} modal={loginModal} registerToggle={registerToggle} />
            <RegisterModal toggle={registerToggle} modal={registerModal} login={loginToggle} />
        </>
    );
}
