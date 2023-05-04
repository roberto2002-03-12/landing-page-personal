import { memo } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/NavBarStyle.css';
import ScrollIntoView from 'react-scroll-into-view';

export const NavBar = memo(() => {
  return (
    <nav className="navbar navbar-expand-lg navbar-landing fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <MenuIcon sx={{color: 'white'}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <ScrollIntoView selector='#section-resumen'>
                <a className="nav-link scroll-nav">Resumen</a>
              </ScrollIntoView>
            </li>
            <li className="nav-item">
              <ScrollIntoView selector='#seccion-habilidades'>
                <a className="nav-link scroll-nav">Habilidades</a>
              </ScrollIntoView> 
            </li>
            <li className="nav-item">
              <ScrollIntoView selector='#section-proyectos'>
                <a className="nav-link scroll-nav">Portafolio</a>
              </ScrollIntoView>
            </li>
            <li className="nav-item">
              <ScrollIntoView selector='#section-contacto'>
                <a className="nav-link scroll-nav">Contacto</a>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
});
