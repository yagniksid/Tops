import React from 'react'
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import PageNotFound from './PageNotFound'
import NavBar from './NavBar'

export default function
    () {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/contact' Component={Contact} />
                    <Route path='*' Component={PageNotFound} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
