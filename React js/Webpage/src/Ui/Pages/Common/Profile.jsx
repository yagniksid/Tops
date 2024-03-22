import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);

    let navigate = useNavigate()

    const logOut = () => {
        removeCookie("user")
        removeCookie("token")
        navigate("/")
        console.log("=====================>>>>>>>>");
    }

    return (
        <>
            <div className='flex justify-end p-5'>
                <button className="bg-amber-500 hover:bg-yellow-600 h-10 rounded w-20 p-0 " onClick={logOut}>
                    Log out
                </button>
            </div>

        </>
    )
}
