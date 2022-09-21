import React, { useEffect, useState } from 'react'
import { allCards } from "../funciones/funciones";

export const Home = () => {

    const [cartas, setCartas] = useState(null)

    useEffect(() => {
        allCards(setCartas)
    }, [])


    return (
        <>
            {cartas != null ? (
                cartas.map(carta=>(
                    <div key={carta.id}>
                        <img src={`https://storage.googleapis.com/ygoprodeck.com/pics_small/${carta.id}.jpg`} alt=""/>
                        <a href={`/Carta/${carta.id}`}>{carta.name}</a>
                        
                    </div>
                ))
            ): ('Cargando...')}
        
        
        </>
    )
}
