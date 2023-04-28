import React from 'react'
import '../styles/ResumenStyle.css';
import ImageExample from '../img/perro-sentado.jpg';

export const Resumen = () => {
  return (
    <>
      <section className="section-resumen">
        <div className="row">
          <div className="col-xl-6 section-res-img">
            <div>
              <img src={ImageExample} alt="" />
              <h4>Roberto Contreras Gonzales</h4>
            </div>
          </div>
          <div className="col-xl-6 section-res-text">
            <div>
              <span className='globo-res-text'></span>  
              <h4>Resumen de mí</h4>
              <p>
                Nací en el año 2002. Me gusta la programación porque no hay tanto papeleo y puedo dar rienda 
                suelta a mi creatividad. Estudié una carrera técnica de 3 años para tener una base de la 
                programación para luego seguir aprendiendo por mi cuenta. Además, hablo dos idiomas, español 
                e inglés, lo que me permite comunicarme aún más.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
