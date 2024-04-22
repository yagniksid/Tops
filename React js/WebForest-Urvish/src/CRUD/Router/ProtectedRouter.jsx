import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRouter({ Component }) {
    let navigate = useNavigate()

    useEffect(() => {
        let normalData = JSON.parse(localStorage.getItem("user")) || []
        console.log("🚀 ~ useEffect ~ normalData:", normalData)
        if (normalData.length === 0) {
            navigate("/")
        }
    }, [])

    return (
        <div>
            {Component}
        </div>
    )
}
