import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Saludo } from './components/Saludo.jsx'
import { Padre } from './components/Padre.jsx'
import { Contador } from './components/Contador.jsx'
import { Efecto } from './components/Efecto.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1> Bienvenido a React</h1>
    <Saludo nombre={"Pablo"} apellido={"Hernandez"} edad={18}/>
 
    <hr/>
 
  <Padre/>
  <Contador/>
  <Efecto/>
  </StrictMode>,
)