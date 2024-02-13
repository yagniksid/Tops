import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRouter({ Component }) {

    let navigate = useNavigate()

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("logData")) || []
        if (Object.keys(data).length === 0) {
            navigate("/")
        }
    })
    return (
        <>
            {Component}
        </>
    )
}
