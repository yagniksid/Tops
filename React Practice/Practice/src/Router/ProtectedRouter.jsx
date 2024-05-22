import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const ProtectedRouter = ({ Component }) => {

    const navigate = useNavigate()
    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("logData")) || []
        if (Object.keys(userData).length === 0) {
            navigate("/unAuthorised")
        }
    }, [])
    return (
        <div>
            {Component}
        </div>
    )
}

export const LogInProtected = ({ Component }) => {

    const navigate = useNavigate()
    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("logData")) || []
        if (Object.keys(userData).length > 1) {
            navigate("/unAuthorised")
        }
    }, [])
    return (
        <div>
            {Component}
        </div>
    )
}
