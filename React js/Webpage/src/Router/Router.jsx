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
import Product from '../Ui/Pages/user/Product/Product';
import SingleProduct from '../Ui/Pages/user/Product/SingleProduct';
import UserOrder from '../Ui/Pages/user/UserOrder';
import Profile from '../Ui/Pages/Common/Profile';
import ProductAdmin from '../Ui/Pages/admin/Product/ProductAdmin';
import ReviewPage from '../Ui/Pages/Common/ReviewPage';
import Header from '../Ui/Component/Header/Header';
import SubHeader from '../Ui/Component/Header/SubHeader';
import Footer from '../Ui/Component/Footer/Footer';
import Dashboard from '../Ui/Pages/admin/Dashboard/Dashboard';
import { AdminProtected, UserProtected } from './ProtectedRouter';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <SubHeader />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    {/* -------------------------COMMON--------------------- */}
                    <Route path='/whishlist' element={<Whishlist />} />
                    <Route path='/track' element={<Track />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/reviewpage' element={<ReviewPage />} />

                    {/* -------------------------ADMIN--------------------- */}
                    <Route path='/admin-product' element={<AdminProtected Component={<ProductAdmin />} />} />
                    <Route path='/admin-dashboard' element={<AdminProtected Component={<Dashboard />} />} />
                    <Route path='/admin-order' element={<AdminProtected Component={<Order />} />} />
                    <Route path='/admin-user' element={<AdminProtected Component={<User />} />} />

                    {/* -------------------------USER--------------------- */}
                    <Route path='/user-product' element={<UserProtected Component={<Product />} />} />
                    <Route path='/user-product:id' element={<UserProtected Component={<SingleProduct />} />} />
                    <Route path='/user-cart' element={<UserProtected Component={<Cart />} />} />
                    <Route path='/user-Order' element={<UserProtected Component={<UserOrder />} />} />

                    {/* -------------------------CATAGORY--------------------- */}
                    <Route path='/men' element={<Men />} />
                    <Route path='/women' element={<Women />} />
                    <Route path='/smartWatch' element={<SmartWatch />} />
                    <Route path='/premiumWatch' element={<PremiumWatch />} />
                    <Route path='/internationalBrands' element={<InternationalBrands />} />
                    <Route path='/gifting' element={<Gifting />} />
                    <Route path='/sale' element={<Sale />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div >
    )
}
