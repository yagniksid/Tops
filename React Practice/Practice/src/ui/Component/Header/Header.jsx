import React from 'react'
import ReactLogo from "../../../assets/react.svg"
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';
export default function Header() {
    let logInData = JSON.parse(localStorage.getItem("logData") || "[]")
    console.log("🚀 ~ Header ~ logInData:", logInData)
    const navigate = useNavigate()

    const logOutHandler = () => {
        localStorage.removeItem("logData")
        navigate("/")
    }
    return (
        <div className='flex justify-between items-center py-3 px-5 mx-5 my-4 rounded-full bg-gray-700'>
            <div>
                <img src={ReactLogo} alt="" />
            </div>
            <div className='text-white flex gap-3 active:text-orange-600'>
                <NavLink className=" hover:text-amber-500" to={"/"}>Home</NavLink>
                <NavLink className=" hover:text-amber-500" to={"/product"}>Product</NavLink>
                <NavLink className="hover:text-amber-500" to={"/about"} >About</NavLink>
                <NavLink className="hover:text-amber-500" to={"/contact"} >Contact Us</NavLink>
                <NavLink className="hover:text-amber-500" to={"/service"} >Service</NavLink>
            </div>
            <div role='button'>
                {Object.keys(logInData).length > 1 ?
                    <Button color='danger' onClick={logOutHandler}>Log out</Button> :
                    <Button color='danger' onClick={() => navigate("/login")}>Log in</Button>
                }
            </div>
        </div>
    )
}
