import './App.css'
import AddDelete from './Task/AddDelete'
import AddDeleteUpdate from './Task/AddDeleteUpdate'
import ChangeColor from './Task/ChangeColor'
import FullCrud from './Task/FullCrud'
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
      <UserInputCrud />
    </div>
  )
}

export default App
