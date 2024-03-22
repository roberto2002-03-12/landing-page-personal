import { useEffect, useState, memo } from 'react';
import NodeSvg from '../img/node_logo.svg';
import ReactSvg from '../img/react_logo.svg';
import MySQLSvg from '../img/mysql_logo.svg';
import AnacondaSvg from '../img/anaconda_logo.svg';
import MongodbSvg from '../img/mongodb_logo.svg';
import SequelizeSvg from '../img/sequelize_logo.svg';
import ReactReduxSvg from '../img/react_redux_logo.svg';
import ReactRouterSvg from '../img/react_router_logo.svg';
import ReactMuiSvg from '../img/react_mui_logo.svg';
import DockerSvg from '../img/docker_logo.svg';
import AwsSvg from '../img/aws_logo.svg';
import TypeScriptSvg from '../img/typescript_logo.svg';
import JavaScriptSvg from '../img/javascript_logo.svg';
import PythonSvg from '../img/python_logo.svg';
import '../styles/HabilidadesStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const imgStyle = {
  width: '85px',
  height: '85px',
  marginRight: '8px'
}

export const Habilidades = memo(() => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsWideScreen(true);
  }, []);

  return (
    <section className='skills-section' id='skills-section'>
      <div 
        className='skills-tech-page row'
        data-aos={isWideScreen ? 'fade-down-right' : '' }
        data-aos-duration="1000"
      >
        <h4>Técnologias de desarrollo que utilizo</h4>
        <div className="skills-tech-content-box d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div className='skills-box'>
            <img style={imgStyle} src={NodeSvg} alt="Node image" />
            <div className="skills-box-text">
              <h5>Node.js</h5>
              <p>Node.js junto con express.js son mi base que utilizo para realizar Api's sencillas hasta complejas.</p>
            </div>
          </div>
        </div>
        <div className="skills-tech-content-box d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div className='skills-box'>
            <img style={imgStyle} src={ReactSvg} alt="Node image" />
            <div className="skills-box-text">
              <h5>React.js</h5>
              <p>Framework que utilizó para el lado front-end web, realizando SPA's y custom Hooks</p>
            </div>
          </div>
        </div>
        <div className="skills-tech-content-box d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <div className='skills-box'>
            <img style={imgStyle} src={AnacondaSvg} alt="Node image" />
            <div className="skills-box-text" style={{ marginBottom: '20px' }}>
              <h5>Anaconda</h5>
              <p>Herramient de python que utilizó para realizar operaciones estadisticas basado con datos.</p>
            </div>
          </div>
        </div>
        <div className="skills-tech-content-box d-flex justify-content-center col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
          <div className='skills-box'>
            <img style={imgStyle} src={MySQLSvg} alt="Node image" />
            <div className="skills-box-text" style={{ marginBottom: '20px' }}>
              <h5>MySQL</h5>
              <p>Creación de base de datos relacional y creación de queries</p>
            </div>
          </div>
        </div>
        <div className="skills-tech-content-box d-flex justify-content-center col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
          <div className='skills-box'>
            <img style={imgStyle} src={MongodbSvg} alt="Node image" />
            <div className="skills-box-text">
              <h5>MongoDB</h5>
              <p>Uso de base de datos no relacional para operaciones a tiempo real como chats</p>
            </div>
          </div>
        </div>

        <div className="skills-tech-content-library-box col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h5>Libreria que suelo utilizar: </h5>
          <div className='skills-tech-box-library'>
            <img src={SequelizeSvg} style={{ width: '24px', height: '24px' }} alt="Sequelize logo" />
            <span>Sequelize</span>
          </div>
          <div className='skills-tech-box-library'>
            <span style={{ marginLeft: '12px', marginRight: '12px' }}>Mongoose</span>
          </div>
          <div className='skills-tech-box-library'>
            <img src={ReactReduxSvg} style={{ width: '24px', height: '24px' }} alt="react redux logo" />
            <span>React redux</span>
          </div>
          <div className='skills-tech-box-library'>
            <img src={ReactRouterSvg} style={{ width: '24px', height: '24px' }} alt="react router logo" />
            <span>React router</span>
          </div>
          <div className='skills-tech-box-library'>
            <img src={ReactMuiSvg} style={{ width: '24px', height: '24px' }} alt="" />
            <span>React mui</span>
          </div>
        </div>
      </div>

      <div 
        className='skills-other-tech-page'
        data-aos={isWideScreen ? 'fade-up-left' : '' }
        data-aos-duration="1000"
      >
        <div className="skills-other-tech-box">
          <h4>Conocimiento de infrestructura y despliegue</h4>
          <div className='skills-box'>
            <img style={imgStyle} src={DockerSvg} alt="Node image" />
            <div className="skills-box-text">
              <h5>Docker</h5>
              <p>Crear imagenes o contenedores de programas y desplegarlos en la nube como en servicos Lambda</p>
            </div>
          </div>
          <div className='skills-box'>
            <img style={imgStyle} src={AwsSvg} alt="Node image" />
            <div className="skills-box-text">
              <h5>AWS</h5>
              <p>Uso de servicios como EC2, Lambda, S3, etc. Estoy en proceso de conseguir certificado practioner</p>
            </div>
          </div>
        </div>
        <div className="skills-other-content-box">
          <h4>Otras habilidades</h4>
          <div className='skills-other-box-text'>
            <h5>Ingles B1+</h5>
            <p>Resultado según examen de clasificación en la universidad ESAN</p>
          </div>
          <div className='skills-other-box-text'>
            <h5>Diseño de base de datos</h5>
            <p>Definir el tipo y las relaciones con otras tablas</p>
          </div>
          <div className='skills-other-box-text'>
            <h5>Ingenieria de requerimientos</h5>
            <p>Realización de la documentación y definición de casos en programas.</p>
          </div>
        </div>
      </div>

      <h4 style={{ color: 'white', fontSize: '16px', width: '100%', textAlign: 'center' }}>Lenguajes de programación</h4>
      <div className="program-languages-known">
        <div className='known-lenguage-box'>
          <img src={TypeScriptSvg} style={{ width: '18px', height: '18px' }} alt="react redux logo" />
          <span>TypeScript</span>
        </div>
        <div className='known-lenguage-box'>
          <img src={JavaScriptSvg} style={{ width: '18px', height: '18px' }} alt="react redux logo" />
          <span>JavaScript</span>
        </div>
        <div className='known-lenguage-box'>
          <img src={PythonSvg} style={{ width: '18px', height: '18px' }} alt="react redux logo" />
          <span>Python</span>
        </div>
      </div>
    </section>
  )
});
