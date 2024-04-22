import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../UI/Pages/Homepage'
import Product from '../UI/Pages/Product'
import Header from '../UI/Component/Header/Header'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/product' element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
