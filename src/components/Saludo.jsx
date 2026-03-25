import React from 'react'
 
export const Saludo = (props) => {
  return (
    <div>
        <h2>Hola,
            yo soy  {props.nombre}  {props.apellido}</h2>
        <p>Tengo {props.edad} años</p>
 
    </div>
  )
}