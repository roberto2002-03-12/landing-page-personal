import Slider from "react-slick";
// imagenes
import UserManagementImg from '../img/user_management.svg';
import InvoiceFacil from '../img/infoice_facil_landing.svg';
import ElBuenPastorImg from '../img/el_buen_pastor.svg';
import PokedexImg from '../img/pokedex.svg';
// imagenes pequeñas
import JavaScriptImg from '../img/javascript_logo.svg';
import ReactImg from '../img/react_logo.svg';
import NodeImg from '../img/node_logo.svg';
import TypeScriptImg from '../img/typescript_logo.svg'
// iconos
import YouTubeIcon from '@mui/icons-material/YouTube';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GitHubIcon from '@mui/icons-material/GitHub';
import DockerIcon from '../img/docker-mark-white.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/PortafolioCarrusel.css';

const iconStyle = {
  color: 'white', 
  width: '24px', 
  height: '24px', 
  marginRight: '14px' 
}

const smallImgStyle = { 
  width: '18px', 
  height: '18px' 
}

export const PortafolioCarrusel = () => {

  return (
    <section className='portafolio-carosel-container' id="portafolio-carosel-container">
      <h2>Portafolio</h2>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        slidesPerRow={1}
        arrows={true}
      >
        <div className='carousel-content'>
          <div className="row">
            <h4 className="carousel-title">User management</h4>
            <div className='carousel-image-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <img src={UserManagementImg} alt="User management" loading='lazy' />
            </div>
            <div className='carousel-info-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <h4 className="carousel-content-fist-title">User management</h4>
              <div className="carousel-info-extras">
                <div className="carousel-links">
                  <p>Links:</p>
                  <a href="https://youtu.be/lVTmLUI5qwY?si=zqT218e0Q1Gj7uB3" target="_blank">
                    <YouTubeIcon style={iconStyle} />
                  </a>
                  <a href="https://github.com/roberto2002-03-12/user-management-ts-react" target="_blank">
                    <GitHubIcon style={{...iconStyle, color: '#61DBFB'}} />
                  </a>
                  <a href="https://github.com/roberto2002-03-12/user-management-api-ts" target="_blank">
                    <GitHubIcon style={{...iconStyle, color: '#3c873a'}} />
                  </a>
                  <a href="https://github.com/roberto2002-03-12/user-management-api-ts/blob/main/docker-compose.yml" target="_blank">
                    <img src={DockerIcon} alt="Docker icon" style={iconStyle} />
                  </a>
                </div>
                
                <div className="carousel-lenguages">
                  <p>Hecho con: </p>
                  <div className="carousel-lenguage-box">
                    <img src={TypeScriptImg} alt="" style={smallImgStyle}/>
                    <span>TypeScript</span>
                  </div>
                  <div className="carousel-lenguage-box">
                    <img src={ReactImg} alt="" style={smallImgStyle} />
                    <span>React</span>
                  </div>
                  <div className="carousel-lenguage-box">
                    <img src={NodeImg} alt="" style={smallImgStyle} />
                    <span>Node</span>
                  </div>
                </div>

              </div>
              <div className="carousel-text">
                <p >
                  Es el proyecto independiente más completo que realice, útiliza como backend node.js con express y el frontend react.js, ambos hecho con TypeScript, 
                  la organización de carpetas es versatil, por lo que agregar nuevas apis o páginas no será ningún problema por ambos lados.
                  Cabe mencionar que por el lado de react al principio fue algo complejo por unos componentes como selección de roles y privilegios, debido que era algo nuevo agregar o eliminar
                  según un checkbox, pude haberlo hecho con un simple formulario pero sabia que no daría buena experiencia de usario. 
                  Puedes probar este proyecto de manera local si tienes Docker instalado o puedes ver el vídeo en youtube, ambos están en los links.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='carousel-content'>
          <div className="row">
            <h4 className="carousel-title">Invoice Fácil Landing page</h4>
            <div className='carousel-image-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <img src={InvoiceFacil} alt="Invoice Fácil" loading='lazy' />
            </div>
            <div className='carousel-info-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <h4>Invoice Fácil landing page</h4>
              <div className="carousel-info-extras">

                <div className="carousel-links">
                  <p>Links:</p>
                  <a href="https://youtu.be/3QSnsIhBpok" target="_blank">
                    <YouTubeIcon style={iconStyle} />
                  </a>
                  <a href="https://landing-page-trabajo-muestra-1.onrender.com" target="_blank">
                    <TravelExploreIcon style={iconStyle} />
                  </a>
                </div>
                
                <div className="carousel-lenguages">
                  <p>Hecho con: </p>
                  <div className="carousel-lenguage-box">
                    <img src={JavaScriptImg} alt="" style={smallImgStyle}/>
                    <span>JavaScript</span>
                  </div>
                  <div className="carousel-lenguage-box">
                    <img src={ReactImg} alt="" style={smallImgStyle} />
                    <span>React</span>
                  </div>
                  <div className="carousel-lenguage-box">
                    <img src={NodeImg} alt="" style={smallImgStyle} />
                    <span>Node</span>
                  </div>
                </div>

              </div>
              <div className="carousel-text">
                <p>
                  Landing page para una sección de la empresa donde trabaje, adicionalmente agregué un lado administrativo que permite
                  listar y filtrar reclamos, mensajes, quejas, y también la creación de blogs junto con la creación de categorias, para ver
                  sus funcionalidades les recomiendo ver el vídeo de youtube debido a que la muestra que estoy mostrando en la web solo es
                  de la landing page no el lado administrativo. Fue uno de mis proyectos durante mis practicas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='carousel-content'>
          <div className="row">
            <h4 className="carousel-title">El buen pastor</h4>
            <div className='carousel-image-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <img src={ElBuenPastorImg} alt="El buen pastor" loading='lazy' />
            </div>
            <div className='carousel-info-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <h4>El buen pastor</h4>
              <div className="carousel-info-extras">

                <div className="carousel-links">
                  <p>Links:</p>
                  <a href="https://asociacionelbuenpastor.com" target="_blank">
                    <TravelExploreIcon style={iconStyle} />
                  </a>
                </div>

                <div className="carousel-lenguages">
                  <p>Hecho con Elementor</p>
                </div>

              </div>
              <div className="carousel-text">
                <p>
                  Landing page para una sección de la empresa donde trabaje, adicionalmente agregué un lado administrativo que permite
                  listar y filtrar reclamos, mensajes, quejas, y también la creación de blogs junto con la creación de categorias, para ver
                  sus funcionalidades les recomiendo ver el vídeo de youtube debido a que la muestra que estoy mostrando en la web solo es
                  de la landing page no el lado administrativo. Fue uno de mis proyectos que realice durante mis practicas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='carousel-content'>
          <h4 className="carousel-title">Pokedex</h4>
          <div className="row">
            <div className='carousel-image-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <img src={PokedexImg} alt="Pokedex" loading='lazy' />
            </div>
            <div className='carousel-info-box col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <h4>Pokedex</h4>
              <div className="carousel-info-extras">

                <div className="carousel-links">
                  <p>Links:</p>
                  <a href="https://64545c1b312e513a7b24f1c9--merry-sawine-776fbb.netlify.app" target="_blank">
                    <TravelExploreIcon style={iconStyle} />
                  </a>
                  <a href="https://github.com/roberto2002-03-12/pokedex-react" target="_blank">
                    <GitHubIcon style={iconStyle} />
                  </a>
                </div>
                
                <div className="carousel-lenguages">
                  <p>Hecho con: </p>
                  <div className="carousel-lenguage-box">
                    <img src={JavaScriptImg} alt="" style={smallImgStyle}/>
                    <span>JavaScript</span>
                  </div>
                  <div className="carousel-lenguage-box">
                    <img src={ReactImg} alt="" style={smallImgStyle} />
                    <span>React</span>
                  </div>
                </div>

              </div>
              <div className="carousel-text">
                <p>
                  Compone las bases de react, esta página fue uno de mis primeros proyectos utilizando solo react con JavaScript, no tiene
                  backend, para las peticiones se útilizo la <a href="https://pokeapi.co/" target="_blank" style={{ color: 'white' }}>api pública pokemon</a> hecho por la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}
