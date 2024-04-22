import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crud from '../crud'
import Header from '../Header.jsx/Header'
import Homepage from '../Homepage'
import ProtectedRouter from './ProtectedRouter'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/crud' element={<ProtectedRouter Component={<Crud />} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
