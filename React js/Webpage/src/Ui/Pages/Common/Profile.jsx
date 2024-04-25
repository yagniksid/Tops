import React, { useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Avatar from "./Images/avatar.png";
import { Edit, LogOut } from 'lucide-react';
import { Input } from 'reactstrap';

export default function Profile() {
    const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);
    console.log("🚀 ~ Profile ~ cookies:", cookies)
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null); // Reference for file input
    let navigate = useNavigate();

    const logOut = () => {
        removeCookie("user");
        removeCookie("token");
        navigate("/");
        console.log("=====================>>>>>>>>");
    };

    const imageHandler = (e) => {
        if (e.target.files.length > 0) {
            const selectedImage = e.target.files[0];
            setImage(selectedImage);
            setCookie("image", selectedImage);
        }
    };
    const handleEditClick = () => {
        fileInputRef?.current?.click();
    };

    return (
        <div className="flex justify-center pb-44 pt-5">
            <div className="rounded shadow-lg bg-white border-black w-50">
                <h1 className="py-7 text-center m-0 font-normal text-blue-950">User Details</h1>
                <div className="border-top  border-start-0  border-gray-700">
                    <ul className='m-0 p-0'>
                        <li className='flex justify-center'>
                            {!image ? <img className='h-[300px] w-[300px]' src={Avatar} alt="" />
                                : <img src={URL?.createObjectURL(image)} alt="" />}
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={imageHandler}
                            />
                            <Edit onClick={handleEditClick} />
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h5>Name : <span className='font-normal'> {cookies?.user?.name}</span> </h5>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h5>Email : <span className='font-normal'> {cookies?.user?.email}</span> </h5>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h5>Number : <span className='font-normal'> {cookies?.user?.number}</span> </h5>
                        </li>
                        <hr className='p-0 m-0' />
                        <li className='ps-5 py-3'>
                            <h5>Age : <span className='font-normal'> {cookies?.user?.age}</span> </h5>
                        </li>
                    </ul>
                </div>
                <div className='py-4 flex justify-center items-center'>
                    <button className="bg-blue-500 text-white hover:bg-blue-600 h-11 rounded w-28 p-0 " onClick={logOut}>
                        <span className='flex items-center  gap-2 justify-center'>Log out<LogOut /></span>
                    </button>
                </div>
            </div>
        </div>
    );
}
