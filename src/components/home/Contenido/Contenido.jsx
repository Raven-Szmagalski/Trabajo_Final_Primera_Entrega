import React from "react"
import Heading from "../../Header_Footer/Heading"
import "./Contenido.css"
import ContenidoCards from "./ContenidoCards"

const Contenido = () => {
  return (
    <>
      <section className='Contenido background'>
        <div className='container'>
          <Heading title='Secciones' />
          <ContenidoCards/>
        </div>
      </section>
    </>
  )
}

export default Contenido