import { NavBar, Header, Resumen, Habilidades, Portafolio, Contacto, Footer } from '../components'
import React from 'react';
import '../styles/LandingPageStyle.css';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Resumen />
      <Habilidades />
      <Portafolio />
      <Contacto />
      <Footer />
    </>
  )
}

export default LandingPage;