import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProtectedRouter = ({ Component }) => {
  const navigate = useNavigate()
  useEffect(() => {
    let normaldata = JSON.parse(localStorage.getItem("loginUser")) || []

    if (Object.keys(normaldata).length === 0) {
      navigate("/unauthorised")
    }
  })
  return (
    <div>
      {Component}

    </div>
  )
}

export const AdminProtectedRouter = ({ Component }) => {
  const navigate = useNavigate()
  useEffect(() => {
    let normaldata = JSON.parse(localStorage.getItem("loginUser")) || []
    if (Object.keys(normaldata).length === 0 || normaldata.userType !== "Admin") {
      navigate("/unauthorised")
    }
  })
  return (
    <div>
      {Component}
    </div>
  )
}

