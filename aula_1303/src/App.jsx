import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <PrecisoEstudar nomeDaTecnologia = {"ReactJS"}/>
    </>
  )
}

export default App
