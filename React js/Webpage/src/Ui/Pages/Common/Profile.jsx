import React from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCart } from '../../../Redux/feature/cartSlice';

export default function Profile() {
    const [cookies, removeCookie] = useCookies(["user", "token"]);

    let navigate = useNavigate();

    const logOut = () => {
        removeCookie("token");
        removeCookie("user");
        navigate("/");
        console.log("=====================>>>>>>>>", cookies.token);
    };

    return (
        <div className="flex justify-center pb-44 pt-5">
            <div className=" w-50">
                <h2 className="text-start py-7 m-0 text-blue-950">MY ACCOUNT</h2>
                <h6 className="text-start py-3 ps-3 m-0 text-lg tracking-wide bg-[#fefaf5] text-blue-950">Personal Information</h6>
                <div className="border border-top-0 border-b border-l border-r border-gray-700">
                    <ul className='m-0 p-0 text-start w-[85%]'>
                        <li className='ps-5 py-3 row'>
                            <h6 className='col-3 font-normal gap-24'>Name </h6>
                            <div className='p-0 col-9 pe-5 font-semibold'>
                                <span className='pe-4 font-normal'>:</span>
                                {cookies?.user?.name}
                            </div>
                        </li>
                        <li className='ps-5 py-3 row'>
                            <h6 className=' col-3 font-normal'>Phone number</h6>
                            <div className='font-semibold col-9 p-0 '>
                                <span className='pe-4 font-normal'>:</span>
                                +91 {cookies?.user?.number}
                            </div>
                        </li>
                        <li className='ps-5 py-3 row'>
                            <h6 className='font-normal col-3'>Email address</h6>
                            <div className='col-9 p-0 font-semibold'>
                                <span className='pe-4 font-normal'>:</span>
                                {cookies?.user?.email}
                            </div>
                        </li>
                        <li className='ps-5 py-3 row'>
                            <h6 className='col-3 font-normal'>Age</h6>
                            <div className='col-9 p-0 font-semibold'>
                                <span className='pe-4 font-normal'>:</span>
                                {cookies?.user?.age}
                            </div>
                        </li>
                        <li className='ps-5 py-3 row'>
                            <h6 className='col-3 font-normal'>Encircle ID</h6>
                            <div className='col-9 p-0 font-semibold'>
                                <span className='pe-4 font-normal'>:</span>
                                XXXXXXXX4731 | No Encircle Balance
                            </div>
                        </li>
                        <li className='ps-5 py-3 row'>
                            <h6 className='col-3 font-normal'>NeuCoins</h6>
                            <div className='col-9 p-0 font-semibold'>
                                <span className='pe-4 font-normal'>:</span>
                                0 NeuCoins
                            </div>
                        </li>
                    </ul>
                    <div className='py-4 flex justify-center items-center'>
                        <button style={{ border: "1px solid #bf4815" }} className="bg-[#bf4815] font-semibold text-white rounded h-10 w-28 p-0 " onClick={logOut}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
