import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <h2>Tienes alguna duda?</h2>
              <p>Contactate con nosotros atravez de nuestro Gmail</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className="send-button">Enviar</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Natasha Szmagalski Koroll.</span>
      </div>
    </>
  )
}

export default Footer
