import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from '../Pages/Men/Men';
import Product from '../Pages/Product/Product';
import ProductReview from '../Pages/Product/ProductReview';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Men />} />
                    <Route path='/productReview' element={<ProductReview />} />
                </Routes>
            </BrowserRouter>
        </div >
    )
}
