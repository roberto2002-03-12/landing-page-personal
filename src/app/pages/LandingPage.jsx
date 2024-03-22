import { NavBar, Header, Resumen, Contacto, Footer, Habilidades, PortafolioCarrusel } from '../components'
import React from 'react';
import '../styles/LandingPageStyle.css';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Resumen />
      <Habilidades />
      <PortafolioCarrusel />
      <Contacto />
      <Footer />
    </>
  )
}

export default LandingPage;