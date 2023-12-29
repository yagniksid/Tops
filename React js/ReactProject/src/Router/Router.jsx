import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../UI/Pages/Home'
import About from '../UI/Pages/About'
import Header from '../UI/Component/Header/Header'
import Footer from '../UI/Component/Footer/Footer'
import { AdminProtectedRouter, ProtectedRouter } from './ProtectedRouter'
import Profile from '../UI/Pages/Profile'
import Admin from '../UI/Pages/Admin'
import Unauthorised from '../UI/Pages/Unauthorised'
import NewUser from '../UI/Pages/NewUser'
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='/about' element={<ProtectedRouter Component={<About />} />} />
                    <Route path='/unauthorised' element={<Unauthorised />} />
                    <Route path='/newuser' element={<ProtectedRouter Component={<NewUser />} />} />
                    <Route path='/profile' element={<ProtectedRouter Component={<Profile />} />} />
                    <Route path='/admin' element={<AdminProtectedRouter Component={<Admin />} />} />
                </Routes>
                <Footer />
            </BrowserRouter>F
        </>
    )
}
