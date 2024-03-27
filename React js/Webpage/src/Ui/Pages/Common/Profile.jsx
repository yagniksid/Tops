import React from 'react'
import { Table } from "reactstrap";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

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
            <div className="rounded shadow-lg bg-white border-black w-75">
                <h1 className="py-7 text-center m-0 text-blue-950">User Details</h1>
                <div className="border-top  border-start-0  border-black">
                    <ul className='m-0 p-0'>
                        <li className='ps-5 py-3'>
                            <h4>Name : {cookies.user.name}</h4>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h4>Email : {cookies.user.email}</h4>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h4>Number : {cookies.user.number}</h4>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h4>Age : {cookies.user.age}</h4>
                        </li>
                        <hr className='p-0 m-0' />
                    </ul>
                </div>
                <div className='py-4 flex justify-center'>
                    <button className="bg-amber-500 hover:bg-yellow-600 h-10 rounded w-20 p-0 " onClick={logOut}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}
