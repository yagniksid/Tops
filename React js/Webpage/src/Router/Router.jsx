import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductPage from '../Ui/Pages/Category/Men/ProductPage';
import Women from '../Ui/Pages/Category/Women/Women';
import SmartWatch from '../Ui/Pages/Category/Smart Watch/SmartWatch';
import PremiumWatch from '../Ui/Pages/Category/Premium Watches/PremiumWatch';
import InternationalBrands from '../Ui/Pages/Category/International Watchs/InternationalBrands';
import Whishlist from '../Ui/Pages/Common/Whishlist';
import Cart from '../Ui/Pages/user/Cart';
import Track from '../Ui/Pages/Common/Track';
import Homepage from '../Ui/Pages/Common/Homepage/Homepage';
import Order from '../Ui/Pages/admin/Order/Order';
import User from '../Ui/Pages/admin/User/User';
import SingleProduct from '../Ui/Pages/user/Product/SingleProduct';
import UserOrder from '../Ui/Pages/user/UserOrder';
import Profile from '../Ui/Pages/Common/Profile';
import ProductAdmin from '../Ui/Pages/admin/Product/ProductAdmin';
import ReviewPage from '../Ui/Pages/Common/ReviewPage';
import Header from '../Ui/Component/Header/Header';
import Footer from '../Ui/Component/Footer/Footer';
import Dashboard from '../Ui/Pages/admin/Dashboard/Dashboard';
import { AdminProtected, UserProtected } from './ProtectedRouter';
import { useCookies } from 'react-cookie';
import Section7 from '../Ui/Component/Sections/Section7';
import UserProduct from '../Ui/Pages/user/Product/UserProduct';
import SubHeader from '../Ui/Component/Header/SubHeader';

export default function Router() {
    let [cookie, setCookie] = useCookies(["user", "token"])


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
                    <Route path='/user-product' element={<UserProtected Component={<UserProduct />} />} />
                    <Route path='/user-product:id' element={<UserProtected Component={<SingleProduct />} />} />
                    <Route path='/user-cart' element={<UserProtected Component={<Cart />} />} />
                    <Route path='/user-Order' element={<UserProtected Component={<UserOrder />} />} />

                    {/* -------------------------CATAGORY--------------------- */}
                    <Route path='/product/:type' element={<ProductPage />} />
                    <Route path='/women' element={<Women />} />
                    <Route path='/smartWatch' element={<SmartWatch />} />
                    <Route path='/premiumWatch' element={<PremiumWatch />} />
                    <Route path='/internationalBrands' element={<InternationalBrands />} />
                </Routes>
                {
                    !cookie.token &&
                    <Section7 />
                }
                <Footer />
            </BrowserRouter>
        </div >
    )
}
