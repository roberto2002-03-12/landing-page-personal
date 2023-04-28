import React from 'react'
import '../styles/NavBarStyle.css'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-landing fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link scroll-nav" href="#">Resumen</a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll-nav" href="#">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll-nav" href="#">Portafolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll-nav" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
