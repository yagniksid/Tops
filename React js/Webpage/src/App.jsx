import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-600 flex justify-center space-50px'>
        <h1 className='text-7xl text-center text-white '>Hello World</h1>
        <h1 className='text-7xl text-center text-blue-950 '>Hello World</h1>
        <h1 className='text-7xl text-center text-blue-950 '>Hello World</h1>
      </div>
    </>
  )
}

export default App
