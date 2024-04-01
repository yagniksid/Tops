import React from 'react'
import { Table } from "reactstrap";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Avatar from "./Images/avatar.png"
import { LogOut } from 'lucide-react';

export default function Profile() {
    const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);
    // console.log("🚀 ~ Profile ~ cookies:", cookies.user)

    let navigate = useNavigate()

    const logOut = () => {
        removeCookie("user")
        removeCookie("token")
        navigate("/")
        console.log("=====================>>>>>>>>");
    }

    return (
        <div className="flex justify-center pb-44 pt-5 bg-yellow-50">
            <div className="rounded shadow-lg bg-white border-black w-50">
                <h1 className="py-7 text-center m-0 font-normal text-blue-950">User Details</h1>
                <div className="border-top  border-start-0  border-gray-700">
                    <ul className='m-0 p-0'>
                        <li className='flex justify-center'>
                            <img className='h-[300px] w-[300px]' src={Avatar} alt="" />
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h5>Name : <span className='font-normal'> {cookies.user.name}</span> </h5>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h5>Email : <span className='font-normal'> {cookies.user.email}</span> </h5>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h5>Number : <span className='font-normal'> {cookies.user.number}</span> </h5>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h5>Age : <span className='font-normal'> {cookies.user.age}</span> </h5>
                        </li>
                        <hr className='p-0 m-0' />
                    </ul>
                </div>
                <div className='py-4 flex justify-center items-center'>
                    <button className="bg-blue-500 text-white hover:bg-blue-600 h-11 rounded w-28 p-0 " onClick={logOut}>
                        <p className='flex items-center mt-2 gap-2 justify-center'>Log out<LogOut /></p>
                    </button>
                </div>
            </div>
        </div>
    )
}
