import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { oneCard } from '../../funciones/funciones'


export const Carta = () => {
  const [carta, setCarta] = useState(null)

  const params = useParams()

  useEffect(() => {
    oneCard(params.id, setCarta)
  }, [])


  return (
    <>
      <div className='container text-center'>
        <hr />
        {carta != null ? (
          <div key={carta.id} className='container text-center'>
            <div  className="container-fluid text-center">
              <div className="list-group card text-center" style={{ width: "20rem" }}>
                <img src={`https://storage.googleapis.com/ygoprodeck.com/pics/${params.id}.jpg`} className="rounded card-img-top img-fluid"  />
                <div className="card-body">
                  <h5 className="card-title">{carta.name}</h5>
                  <p className="card-text">Desc: {carta.desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Type : {carta.type}</li>
                  <li className="list-group-item">Race: {carta.race}</li>
                  <li className="list-group-item">Price: {carta.card_prices[0].tcgplayer_price}</li>
                </ul>
              </div>
            </div>
          </div>
        ) : ('Loading Cards....')}
      </div>
    </>
  )
}
