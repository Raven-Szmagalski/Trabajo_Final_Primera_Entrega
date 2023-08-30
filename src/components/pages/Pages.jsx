import React from "react"
import Header from "../Header_Footer/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Inicio from "../home/Inicio"
import Footer from "../Header_Footer/footer/Footer"
import Institucional from "../Institucional/Institucional"
import Noticias from "../Noticias/Noticias"
import Contactos from "../Contactos/Contactos"

const Pages = () => {
  return (
    <>
      <Router>
        <Header /> 
        <Switch>
          <Route exact path='/' component={Inicio} />
          <Route exact path='/Institucional' component={Institucional} />
          <Route exact path='/Noticias' component={Noticias} />
          <Route exact path='/Contactos' component={Contactos} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
