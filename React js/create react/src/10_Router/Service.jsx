import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Service() {
    return (
        <><h1>Service</h1>
            <ul>
                <li><NavLink to={"/service/bike"}>Bike</NavLink></li>
                <li><NavLink to={"/service/car"}>Car</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}
