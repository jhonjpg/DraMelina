import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import DragImage from '../DragImage';


const Lipoescultura = () => {


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Desplaza el scroll hasta la posición (0, 0) de golpe
  }, []);



  return (


<>
      <Navbar />

      <main className="headerInfo">
        <article className="position-relative w-100 bg-secondary">
        <img src="../img/figura/silueta3.jpg" alt="" />

          <h2>Lipoescultura</h2>
        </article>

        <p>La cirugía de contorno corporal es la solución para lograr la figura perfecta sin importar la edad. Es un concepto estético único, que modifica en forma integral el contorno del cuerpo humano y el cual consiste en planificar en forma global las cirugías que se efectuarán en el paciente, para eliminar los defectos y asimetrías que le deforman la figura. Con estas intervenciones se recupera el contorno de la cintura, cadera, muslos y abdomen, al eliminar los cúmulos de grasa y la flacidez de la piel, modificando la estructura y forma del cuerpo.

</p>

        <strong>Beneficios</strong>
        <ul className="d-flex align-items-start pl-3 w-100">
          <li>Mínima cicatrización
</li>
          <li>Discreta
</li>
          <li>Esculpe la figura con poco esfuerzo</li>
        </ul>

        <div className="diferences">
       <DragImage/>
        </div>



<button className="rounded-pill"> 
<Link
   to="/DraMelina/procedimientos"

  className="p-2  w-100 text-center bg-primary fs-3 text-white mb-2 mt-2"
>
Voler Atras</Link></button>

      </main>
    </> 
        )
}

export default Lipoescultura