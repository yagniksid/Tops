import React from 'react'
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import PageNotFound from './PageNotFound'
import NavBar from './NavBar'
import CarService from './CarService'
import BikeService from './BikeService'
import Product from './Product/Product'
import SingleProduct from './Product/singleProduct'

export default function
    () {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='/service' >
                        <Route index path='' element={<Service />} />
                        <Route path='bike' element={<BikeService />} />
                        <Route path='car' element={<CarService />} />
                    </Route>
                    <Route path='/contact' Component={Contact} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/product/:id' element={<SingleProduct />} />
                    <Route path='*' Component={PageNotFound} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
