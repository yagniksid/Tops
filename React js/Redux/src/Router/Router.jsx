import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from '../ui/pages/User';
import SingleProduct from '../ui/pages/singleProduct';
import Home from '../ui/pages/Home';
import Header from '../ui/pages/Header';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/user' element={<User />} />
                    <Route path='/' element={<Home />} />
                    <Route path="/user/:id" element={<SingleProduct />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
