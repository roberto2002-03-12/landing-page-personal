import { memo } from 'react';
import '../styles/HeaderStyle.css';
import ProgramadorLogo from '../img/programador-logo.svg'

export const Header = memo(() => {
  return (
    <header>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 presentation">
          <div className='content-presentation'>
            <div className="header-box-1">
              <p>Hola, soy</p>
            </div>
            <div className="header-text-presentation">
              <h2>
                Roberto C. G.
              </h2>
              <h3>Full-stack developer</h3>
              <h4>Carrera diseño y desarrollo de software</h4>
            </div>
            <div className="header-box-2">
              <button className='button-header'>
                <a href="https://drive.google.com/file/d/1n3Tu-HfPRQXyXHKiaZzdKHakO1LzQp_V/view?usp=sharing" target='_blank'>
                  Descargar CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-none d-lg-flex image d-flex justify-content-center align-content-center">
          <img src={ProgramadorLogo} alt="" />
        </div>
      </div>
    </header>
  );
});
