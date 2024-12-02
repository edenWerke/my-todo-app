import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <div className=" h-3/4 border shadow-lg rounded-lg bg-gray-100 flex items-center justify-center">
    <Home />
  </div>

  </>
  )
}

export default App
