import React from "react"
import { Contenido } from "../../data/Data"

const ContenidoCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {Contenido.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default ContenidoCard
