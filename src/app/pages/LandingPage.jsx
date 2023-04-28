import { NavBar, Header, Resumen, Habilidades, Portafolio, Contacto } from '../components'
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
    </>
  )
}

export default LandingPage;