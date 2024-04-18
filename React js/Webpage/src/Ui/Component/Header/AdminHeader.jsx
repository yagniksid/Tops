import { Box, GaugeCircle, MapPin, PackageCheck, User } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminHeader() {

    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='flex gap-10 justify-around w-50 py-3 relative cursor-pointer group'>
                <div className='flex flex-col justify-center items-center'>
                    {/* <GaugeCircle role="button" onClick={() => { navigate("/admin-dashboard") }} strokeWidth={1} /> */}
                    <NavLink className="text-decoration-none text-black" to={"/admin-dashboard"}>Dashboard</NavLink>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {/* <Box role="button" onClick={() => { navigate("/admin-product") }} strokeWidth={1} /> */}
                    <NavLink className="text-decoration-none text-black" to={"/admin-product"}>Product</NavLink>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {/* <PackageCheck role="button" onClick={() => { navigate("/admin-order") }} strokeWidth={1} /> */}
                    <NavLink className="text-decoration-none text-black" to={"/admin-order"}>Order</NavLink>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {/* <User role="button" onClick={() => { navigate("/admin-user") }} strokeWidth={1} /> */}
                    <NavLink className="text-decoration-none text-black" to={"/admin-user"}>User</NavLink>
                </div>
            </div>
        </div>
    );
}
