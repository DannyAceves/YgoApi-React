import React, { useEffect, useState } from 'react'
import { allCards } from "../../funciones/funciones";


export const AllCartas = () => {

    const [cartas, setCartas] = useState(null);

    //Constantes de Páginacion
    const [currentPage, setCurrentPage] = useState(1);

    const [postPerPage, setPostPerPage] = useState(20);


    useEffect(() => {
        allCards(setCartas)
    }, [])

    const lastPostIndex = currentPage * postPerPage;
    const firtsPostIndex = lastPostIndex - postPerPage;

    return (
        <>
            {cartas != null ? (
                cartas
                    .slice(firtsPostIndex, lastPostIndex)
                    .map(carta => (
                        <div key={carta.id} className='container'>
                            <div className="list-group card mb-3 text-center" style={{maxwidth: "540px"}}>
                                <div className="row g-0 text-center">
                                    <div className="col-md-4">
                                        <a href={`/Carta/${carta.id}`}>
                                            <img 
                                                src={`https://storage.googleapis.com/ygoprodeck.com/pics_small/${carta.id}.jpg`} 
                                                className="rounded img-fluid rounded-start img-fluid"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{carta.name}</h5>
                                            <p className="card-text">{carta.desc}</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Type : {carta.type}         
                                                </small>                                            
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Price: {carta.card_prices[0].tcgplayer_price}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
            ) : ('Loading cards....')}

        </>
    )
}

