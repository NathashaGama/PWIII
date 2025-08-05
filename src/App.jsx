import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nathasha from './components/Nathasha/index'
import Teste from './components/Teste/teste'
import Cont from './components/cont/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <>
    <Nathasha nome= "Nathasha"/>
    <Nathasha idade={17}/>
    <Nathasha teste="Olá"/>
    <Nathasha teste="Este é o primeiro projeto de PWIII"/>
    <Nathasha teste="Estamos testando variáveis criadas"/>
    <div> 
      <Teste genero="homem" nome="Luis"/>
      <Teste genero="mulher" nome="Nathasha"/>
      <Teste />
    </div>
    <div>
      <Cont></Cont> 
    </div>
    
    </>
  )
}



export default App
