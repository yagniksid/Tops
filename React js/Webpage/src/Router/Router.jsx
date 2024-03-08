import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../Ui/Pages/Home';
import Footer from '../Ui/Component/Footer/Footer';
import Account from '../Ui/Pages/Account';
import Whishlist from '../Ui/Pages/Whishlist';
import Cart from '../Ui/Pages/Cart';
import Track from '../Ui/Pages/Track';
import Homepage from '../Ui/Pages/Homepage/Homepage';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Homepage />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='account' element={<Account />} />
                    <Route path='whishlist' element={<Whishlist />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='track' element={<Track />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
