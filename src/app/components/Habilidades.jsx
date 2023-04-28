import React from 'react';
import ReactLogo from '../img/react.svg';
import NodeLogo from '../img/node.svg';
import JavaScriptLogo from '../img/javascript.svg';
import MySqlLogo from '../img/mysql.svg';
import TypescriptLogo from '../img/typescript.svg';
import ApiLogo from '../img/api.svg';
import '../styles/HabilidadesStyle.css';

export const Habilidades = () => {
  return (
    <section className='seccion-habilidades'>
      <div className="row">
        <div className="col-xl-6 skills-column-left">
          <h3>Mis habilidades</h3>
          <div className='skills-column-1'>
            <div className="skill">
              <div className="text-skill-1">
                <h4>React.js</h4>
                <p>Manejo de React redux, uso de hooks, creación de hooks</p>
              </div>
              <div className="img-skill-1">
                <img src={ReactLogo} alt="" />
              </div>
            </div>
            <div className="skill">
              <div className="text-skill-1">
                <h4>Node.js</h4>
                <p>Operaciones CRUD, Autenticaciones, utilizar servicios de terceros</p>
              </div>
              <div className="img-skill-1">
                <img src={NodeLogo} alt="" />
              </div>
            </div>
            <div className="skill">
              <div className="text-skill-1">
                <h4>JavaScript</h4>
                <p>Estructura de datos, clousures, asincronismo, Ecma Script 6+</p>
              </div>
              <div className="img-skill-1">
                <img src={JavaScriptLogo} alt="" />
              </div>
            </div>
            <div className="skill">
              <div className="text-skill-1">
                <h4>Base de datos</h4>
                <p>Diseño de base de datos y uso de ORM’s</p>
              </div>
              <div className="img-skill-1">
                <img src={MySqlLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 skills-column-right">
          <h3>Habilidades a futuro</h3>
          <div className="skills-column-2">
            <div className="skill">
              <div className="img-skill-2">
                <img src={TypescriptLogo} alt="" />
              </div>
              <div className="text-skill-2">
                <h4>TypeScript</h4>
                <p>Para remplazar a JavaScript, debido a su reducción de errores.</p>
              </div>
            </div>
            <div className="skill">
              <div className="img-skill-2">
                <img src={ApiLogo} alt="" />
              </div>
              <div className="text-skill-2">
                <h4>API’s a tiempo real</h4>
                <p>Desde un simple chat hasta seguimiento de ubicación a tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
