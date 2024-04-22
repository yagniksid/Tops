import React from 'react'

import './App.css'
import { Provider } from 'react-redux'
import { store } from './Redux/app/store'
import Crud from './CRUD/crud'
import Router from './CRUD/Router/Router'

function App() {

  return (
    <>
      <Provider store={store}>
        {/* <Router /> */}
        <Router />
      </Provider>
    </>
  )
}

export default App
