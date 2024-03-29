import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Men from '../Ui/Pages/Category/Men/Men';
import Women from '../Ui/Pages/Category/Women/Women';
import SmartWatch from '../Ui/Pages/Category/Smart Watch/SmartWatch';
import PremiumWatch from '../Ui/Pages/Category/Premium Watches/PremiumWatch';
import InternationalBrands from '../Ui/Pages/Category/International Watchs/InternationalBrands';
import Gifting from '../Ui/Pages/Category/Gifting/Gifting';
import Sale from '../Ui/Pages/Category/Sale/Sale';
import Whishlist from '../Ui/Pages/Common/Whishlist';
import Cart from '../Ui/Pages/user/Cart';
import Track from '../Ui/Pages/Common/Track';
import Homepage from '../Ui/Pages/Common/Homepage/Homepage';
import Order from '../Ui/Pages/admin/Order/Order';
import User from '../Ui/Pages/admin/User/User';
import Dashboard from '../Ui/Pages/admin/Dashboard/Dashboard';
import Product from '../Ui/Pages/user/Product/Product';
import SingleProduct from '../Ui/Pages/user/Product/SingleProduct';
import UserOrder from '../Ui/Pages/user/UserOrder';
import Profile from '../Ui/Pages/Common/Profile';
import ProductAdmin from '../Ui/Pages/admin/Product/ProductAdmin';
import ReviewPage from '../Ui/Pages/Common/ReviewPage';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    {/* -------------------------COMMON--------------------- */}
                    <Route path='/whishlist' element={<Whishlist />} />
                    <Route path='/track' element={<Track />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/reviewpage' element={<ReviewPage />} />

                    {/* -------------------------ADMIN--------------------- */}
                    <Route path='/admin-product' element={<ProductAdmin />} />
                    <Route path='/admin-dashboard' element={<Dashboard />} />
                    <Route path='/admin-order' element={<Order />} />
                    <Route path='/admin-user' element={<User />} />

                    {/* -------------------------USER--------------------- */}
                    <Route path='/product' element={<Product />} />
                    <Route path='/product:id' element={<SingleProduct />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/userOrder' element={<UserOrder />} />

                    {/* -------------------------CATAGORY--------------------- */}
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
