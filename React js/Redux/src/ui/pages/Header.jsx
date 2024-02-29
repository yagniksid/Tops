import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className='d-flex justify-content-center' style={{ backgroundColor: "#9AD0C2", borderRadius: "20px",width:"90%" }} >
                <div className='d-flex justify-content-between align-items-center w-75' >
                    <h1 style={{ color: "#201658" }}>BY</h1>
                    <div className='d-flex gap-3'>
                        <NavLink style={{ textDecoration: "none" }} to={"/"}>
                            Home
                        </NavLink>
                        <NavLink style={{ textDecoration: "none" }} to={"/user"}>User</NavLink >
                    </div>
                </div>
            </div>
        </>
    )
}
