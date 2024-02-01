import { Provider } from 'react-redux'
import './App.css'
import { store } from './Redux/app/store'
import Counter from './ui/pages/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Amount from './ui/pages/Amount';
import Point from './ui/pages/Point';


export default function App() {

  return (
    <>
      <Provider store={store}>
        <Counter />
        <Amount />
        <Point />
      </Provider>
    </>
  )
}


