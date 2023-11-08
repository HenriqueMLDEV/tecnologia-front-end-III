import { useState } from 'react'
import './App.css'
import incrementarContador from './components/HookContador'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RenderizandoComFuncoes/>    
      <TrabalhandoComImagens/>
     <incrementarContador/>
      

    </>
  )
}

export default App
