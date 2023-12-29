import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppProtect from './AppProtect'
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <AppProtect />
      <ToastContainer />
    </>
  )
}

export default App
