import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../UI/Pages/Home'
import About from '../UI/Pages/About'
import Header from '../UI/Component/Header/Header'
import Footer from '../UI/Component/Footer/Footer'
import NewUser from '../UI/Pages/NewUser'
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/newuser' element={<NewUser />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
