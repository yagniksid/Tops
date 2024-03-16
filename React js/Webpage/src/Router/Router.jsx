import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Whishlist from '../Ui/Pages/Whishlist';
import Cart from '../Ui/Pages/Cart';
import Track from '../Ui/Pages/Track';
import Homepage from '../Ui/Pages/Homepage/Homepage';
import Men from '../Ui/Pages/Category/Men/Men';
import Women from '../Ui/Pages/Category/Women/Women';
import SmartWatch from '../Ui/Pages/Category/Smart Watch/SmartWatch';
import PremiumWatch from '../Ui/Pages/Category/Premium Watches/PremiumWatch';
import InternationalBrands from '../Ui/Pages/Category/International Watchs/InternationalBrands';
import Gifting from '../Ui/Pages/Category/Gifting/Gifting';
import Sale from '../Ui/Pages/Category/Sale/Sale';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/whishlist' element={<Whishlist />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/track' element={<Track />} />
                    <Route path='/men' element={<Men />} />
                    <Route path='/women' element={<Women />} />
                    <Route path='/smartWatch' element={<SmartWatch />} />
                    <Route path='/premiumWatch' element={<PremiumWatch />} />
                    <Route path='/internationalBrands' element={<InternationalBrands />} />
                    <Route path='/gifting' element={<Gifting />} />
                    <Route path='/sale' element={<Sale />} />
                </Routes>
            </BrowserRouter>
        </div >
    )
}
