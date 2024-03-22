import React from 'react'
import './App.css'
import Router from './Router/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <>
      <CookiesProvider>
        <Router />
        <ToastContainer />
      </CookiesProvider>
    </>
  )
}

export default App
