import './App.css'
import Router from './Router/Router'
import AddDelete from './Task/AddDelete'
import AddDeleteUpdate from './Task/AddDeleteUpdate'
import ChangeColor from './Task/ChangeColor'
import CrudFull from './Task/CrudFull'
import FullCrud from './Task/FullCrud'
import MultipleShow from './Task/MultipleShow'
import PasswordVisible from './Task/PasswordVisible'
import ProductTable from './Task/ProductTable'
import StateProject from './Task/StateProject'
import UserInputCrud from './Task/UserInputCrud'
import HomePage from './project/HomePage'

function App() {
  return (
    <div className='appContainer'>

      {/* <HomePage /> */}
      {/* <ProductTable /> */}
      {/* <ChangeColor /> */}
      {/* <StateProject /> */}
      {/* <AddDelete /> */}
      {/* <AddDeleteUpdate /> */}
      {/* <FullCrud /> */}
      {/* <UserInputCrud /> */}
      {/* <CrudFull /> */}
      {/* <PasswordVisible /> */}
      {/* <MultipleShow /> */}
      <Router />
    </div>
  )
}

export default App
