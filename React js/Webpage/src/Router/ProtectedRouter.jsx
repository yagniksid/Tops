import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const ProtectedRouter = ({ Component }) => {

    let [{ user, token }] = useCookies(["user"])
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/")
            toast.error("Please log in first")
        }
    }, [user])

    return (
        <div>
            {Component}
        </div>
    )
}

export const AdminProtected = ({ Component }) => {

    let [{ user }] = useCookies(["user"])
    const navigate = useNavigate()

    useEffect(() => {
        if (!user || user?.userType !== "admin") {
            navigate("/")
            toast.error("Please log in first")
        }
    }, [user])

    return (
        <div>
            {Component}
        </div>
    )
}


export const UserProtected = ({ Component }) => {

    let [{ user }] = useCookies(["user"])
    // console.log("🚀 ~ AdminProtected ~ cookie:", cookie.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user || user?.userType !== "customer") {
            navigate("/")
            toast.error("Please log in first....")
        }
    }, [user])

    return (
        <div>
            {Component}
        </div>
    )
}
