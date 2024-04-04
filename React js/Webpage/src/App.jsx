import React from 'react'
import './App.css'
import Router from './Router/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { store } from './Redux/app/store';
function App() {
  return (
    <>
      <Provider store={store}>
        <CookiesProvider>
          <Router />
          <ToastContainer />
        </CookiesProvider>
      </Provider>
    </>
  )
}

export default App
