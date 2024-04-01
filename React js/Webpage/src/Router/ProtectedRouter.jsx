import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const AdminProtected = ({ Component }) => {

    let [cookie, setCookie] = useCookies(["user"])
    let userData = cookie.user
    const navigate = useNavigate()

    useEffect(() => {
        if (!userData || userData.userType !== "admin") {
            navigate("/")
            toast.error("Please log in first")
        }
    }, [userData])

    return (
        <div>
            {Component}
        </div>
    )
}


export const UserProtected = ({ Component }) => {

    let [cookie, setCookie] = useCookies(["user"])
    console.log("🚀 ~ AdminProtected ~ cookie:", cookie.user)
    let userData = cookie.user
    const navigate = useNavigate()

    useEffect(() => {
        if (!userData || userData.userType !== "admin") {
            navigate("/")
            toast.error("Please log in first....")
        }
    }, [userData])

    return (
        <div>
            {Component}
        </div>
    )
}
