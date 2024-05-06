import React, { createContext, useState } from 'react'
import './App.css'
import Router from './Router/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { store } from './Redux/app/store';

export const LoginContext = createContext(null)
function App() {
  const [loginModal, setLoginModal] = useState(false);
  const loginToggle = () => setLoginModal(!loginModal);

  return (
    <>
      <LoginContext.Provider value={{ loginToggle, loginModal }}>
        <Provider store={store}>
          <CookiesProvider>
            <Router />
            <ToastContainer />
          </CookiesProvider>
        </Provider>
      </LoginContext.Provider>

    </>
  )
}

export default App
