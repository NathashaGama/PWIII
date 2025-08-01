import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nathasha from './components/Nathasha/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nathasha teste="Olá"/>
    <Nathasha teste="Este é o primeiro projeto de PWIII"/>
    <Nathasha teste="Estamos testando variáveis criadas"/>
    </>
  )
}



export default App
