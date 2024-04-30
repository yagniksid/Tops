import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './ui/Pages/HomePage'
import { Provider } from 'react-redux'
import { store } from './Redux/App/store'

function App() {


  return (
    <>
      <Provider store={store}>
        <HomePage />
      </Provider>

    </>
  )
}

export default App
