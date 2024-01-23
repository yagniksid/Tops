import { ToastContainer } from 'react-toastify'
import './App.css'
import Router from './Router/Router'
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/dist/sweetalert2.min.css';

function App() {

  return (
    <>
      {/* <Header /> */}
      <Router />
      <ToastContainer />

      {/* <YourComponent /> */}
    </>
  )
}

export default App
