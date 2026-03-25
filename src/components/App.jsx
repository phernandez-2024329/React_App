import React from 'react'

export const Saludo = ({ nombre, edad}) => {
  return (
    <div>
    <h2>hola, soy {nombre}</h2>
    <p>Tengo {edad} años</p>
    </div>
  )
}
