import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from '../assets/Data/Data';
import Product from '../assets/Product/Product';


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Data />} />
                    <Route path='/product' element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div >
    )
}
