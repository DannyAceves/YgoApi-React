import React from 'react'

export const Cards = ({cards}) => {
    return (
        <div className="row">
            {cards.length === 0 && <p>Cargando...</p>}
            {
                [cards].map((card) => {
                                return(     
                                    <div key={card.id} className="col">
                                        <div className="card" style={{minWidth:"200px"}}>
                                            <img src="" alt="" />
                                            <div className='card-body'>
                                                <h5 className='card-title'>{card.name}</h5>
                                                <hr />
                                                <p>Descripcion: {card.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                }           )
            }

        </div>
    )
}
