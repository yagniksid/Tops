import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='service' element={<Service />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
