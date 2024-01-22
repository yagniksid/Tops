import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../UI/Page/Home'
import About from '../UI/Page/About'
import Contact from '../UI/Page/contact'
import Header from '../UI/Component/Header/Header'
import Footer from '../UI/Component/Footer/Footer'
import Product from '../UI/Page/Product/Product'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/product' element={<Product />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
