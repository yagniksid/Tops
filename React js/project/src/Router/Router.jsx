import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Home from './Home';
import Product from './Product/Product';
import Service from './Service';
import Contact from './Contact';
import NavBar from './NavBar';
import SingleProduct from './Product/SingleProduct';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='/service2' element={<Service />} />
                    <Route path='/contact2' element={<Contact />} />
                    <Route path='/product2' element={<Product />} />
                    <Route path='/product2/:id' element={<SingleProduct />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
