import '../styles/HeaderStyle.css';
import ProgramadorLogo from '../img/programador-logo.svg'

export const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-xl-6 presentation">
          <div>
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

            </div>
            <button className='button-header'>
              <a href="">
                Descargar CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-xl-6 image">
          <img src={ProgramadorLogo} alt="" />
        </div>
      </div>
    </header>
  );
};
