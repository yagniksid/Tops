import { Cookie, MapPin } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function SubHeader() {
    const [{ user }] = useCookies(["user"])

    return (
        <>
            {
                user?.userType === "admin" ?
                    <div className='bg-white flex justify-center flex-col items-center sticky-top ' style={{ top: "79px", zIndex: "2" }}>
                        <div className='flex gap-10 justify-around w-50 py-3 relative cursor-pointer group '>
                            <div className='flex flex-col justify-center items-center'>

                                <NavLink className="text-decoration-none text-black" to={"/admin-dashboard"}>Dashboard</NavLink>
                            </div>
                            <div className='flex flex-col justify-center items-center'>

                                <NavLink className="text-decoration-none text-black" to={"/admin-product"}>Product</NavLink>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <NavLink className="text-decoration-none text-black" to={"/admin-order"}>Order</NavLink>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <NavLink className="text-decoration-none text-black" to={"/admin-user"}>User</NavLink>
                            </div>
                        </div>
                    </div>
                    :
                    <>

                        <div className='userHeader flex gap-10 justify-center pt-3 pb-2 relative cursor-pointer group'>
                            <NavLink className='text-sm font-normal hover:underline underline-offset-4 ' to={"/product/Titan"} >
                                All Watches
                            </NavLink>
                            <NavLink className='text-sm font-normal hover:underline underline-offset-4 ' to={"/product/Men's Watches"} >
                                MEN
                            </NavLink>
                            <NavLink className='text-sm font-normal hover:underline underline-offset-4 ' to={"/product/Women's Watches"}>
                                WOMEN
                            </NavLink>
                            <NavLink className='text-sm font-normal hover:underline underline-offset-4 ' to={"/product/Smartwatches"}>
                                SMART WATCHES
                            </NavLink>
                            <NavLink className='text-sm font-normal hover:underline underline-offset-4 ' to={"/product/Premium Watches"}>PREMIUM WATCHES
                            </NavLink>
                            <NavLink className='text-sm font-normal hover:underline underline-offset-4 ' to={"/product/International Brands"}>
                                INTERNATIONAL BRANDS
                            </NavLink>
                        </div>
                        <div className='flex text-xs bg-orange-50 p-2 items-center'>
                            <span role='button' className='ps-16'><MapPin strokeWidth={1} size={20} /></span>
                            <span role='button' className='ps-2'>Select a location to see product availability</span>
                        </div>

                    </>
            }
        </>
    );
}
