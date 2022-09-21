import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { oneCard } from '../funciones/funciones'


export const Carta = () => {
  const[carta,setCarta]= useState(null)

  const params = useParams()

    useEffect(() => {
      oneCard(params.id,setCarta)
    }, [])
    

  return (
    <>
      {carta != null ?(
        <div>
          <h2>Carta con el id {params.id}</h2>
        <p>con el nombre {carta.name}</p>
        </div>
      ):('no hay')}
    </>
  )
}
