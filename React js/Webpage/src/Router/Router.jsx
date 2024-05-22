import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductPage from '../Ui/Pages/Category/Men/ProductPage';
import Whishlist from '../Ui/Pages/Common/Whishlist';
import Track from '../Ui/Pages/Common/Track';
import Homepage from '../Ui/Pages/Common/Homepage/Homepage';
import Order from '../Ui/Pages/admin/Order/Order';
import User from '../Ui/Pages/admin/User/User';
import SingleProduct from '../Ui/Pages/user/Product/SingleProduct';
import UserOrder from '../Ui/Pages/user/UserOrder';
import Profile from '../Ui/Pages/Common/Profile';
import ProductAdmin from '../Ui/Pages/admin/Product/ProductAdmin';
import Header from '../Ui/Component/Header/Header';
import Footer from '../Ui/Component/Footer/Footer';
import Dashboard from '../Ui/Pages/admin/Dashboard/Dashboard';
import { AdminProtected, ProtectedRouter, UserProtected } from './ProtectedRouter';
import { useCookies } from 'react-cookie';
import Section7 from '../Ui/Component/Sections/Section7';
import UserProduct from '../Ui/Pages/user/Product/UserProduct';
import SubHeader from '../Ui/Component/Header/SubHeader';
import Cart from '../Ui/Pages/user/Cart';
import ForgotPassword from '../Ui/Pages/Common/ForgotPassword';
import Card from '../Ui/Component/Card/Card';
import ProductPreview from '../Ui/Pages/Review/ProductPreview';

export default function Router() {
    let [cookie] = useCookies(["user", "token"])


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
                    <Route path='/profile' element={<ProtectedRouter Component={<Profile />} />} />
                    <Route path='/forgetPassword' element={<ForgotPassword />} />

                    {/* -------------------------ADMIN--------------------- */}
                    <Route path='/admin-product' element={<AdminProtected Component={<ProductAdmin />} />} />
                    <Route path='/admin-dashboard' element={<AdminProtected Component={<Dashboard />} />} />
                    <Route path='/admin-order' element={<AdminProtected Component={<Order />} />} />
                    <Route path='/admin-user' element={<AdminProtected Component={<User />} />} />

                    {/* -------------------------USER--------------------- */}
                    <Route path='/user-product' element={<UserProtected Component={<UserProduct />} />} />
                    <Route path='/user-product:id' element={<UserProtected Component={<SingleProduct />} />} />
                    <Route path='/user-cart' element={<UserProtected Component={<Cart />} />} />
                    <Route path='/user-card' element={<Card />} />
                    <Route path='/user-Order' element={<UserProtected Component={<UserOrder />} />} />
                    <Route path='/user-card/:id' element={<ProductPreview />} />

                    {/* -------------------------CATAGORY--------------------- */}
                    <Route path='/product/:type' element={<ProductPage />} />
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
