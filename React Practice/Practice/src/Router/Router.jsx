import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../ui/Pages/Home'
import About from '../ui/Pages/About'
import Contact from '../ui/Pages/Contact'
import Services from '../ui/Pages/Services'
import Header from '../ui/Component/Header/Header'
import Login from '../ui/Pages/Login/Login'
import Register from '../ui/Pages/Register/Register'
import Product from '../ui/Pages/Product'
import UnAuthorised from '../ui/Pages/UnAuthorised'
import { LogInProtected, ProtectedRouter } from './ProtectedRouter'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product' element={<ProtectedRouter Component={<Product />} />} />
                    <Route path='/about' element={<ProtectedRouter Component={<About />} />} />
                    <Route path='/contact' element={<ProtectedRouter Component={<Contact />} />} />
                    <Route path='/service' element={<ProtectedRouter Component={<Services />} />} />
                    <Route path='/login' element={<LogInProtected Component={<Login />} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/unAuthorised' element={<UnAuthorised />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
