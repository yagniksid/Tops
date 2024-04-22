import { Provider } from 'react-redux'
import './App.css'
import { store } from './Redux/app/store'
import Counter from './ui/pages/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Amount from './ui/pages/Amount';
import Point from './ui/pages/Point';
import UserInput from './ui/pages/UserInput';
import Checklist from './ui/pages/Checklist';
import User from './ui/pages/User';
import Router from './Router/Router';


export default function App() {

  return (
    <div >
      <Provider store={store}>
        {/* <Counter />
        <Amount /> */}
        {/* <Point /> */}
        <UserInput />
        {/* <Router /> */}
      </Provider>
      {/* <Checklist /> */}
    </div>
  )
}


