import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import DragImage from '../DragImage';





const Lipoabdominoplastia = () => {


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Desplaza el scroll hasta la posición (0, 0) de golpe
  }, []);



  return (
<>
      <Navbar />

      <main className="headerInfo">
        <article className="position-relative w-100 bg-secondary">
        <img src="../img/figura/silueta4.jpg" alt="" />

          <h2>Lipoabdominoplastia</h2>
        </article>

        <p>La Lipoabdominoplastia es la combinación de ambos procedimientos, liposucción de áreas específicas más abdominoplastia en el mismo tiempo quirúrgico. Esta técnica es necesaria en algunos pacientes para poder proporcionar un mejor contorno corporal.

</p>

        <strong>Beneficios</strong>
        <ul className="d-flex align-items-start pl-3 w-100">
          <li>Proporciona un mejor contorno corporal.
</li>
          <li>Combinación de Liposucción y Abdominoplastia</li>
        </ul>

        <div className="diferences">
        <DragImage/>
        </div>





<button className="rounded-pill"> 
<Link
    to="/DraMelina/procedimientos"

  className="p-2  w-100 text-center bg-primary fs-3 text-white  mb-2 mt-2"
>

Voler Atras</Link></button>
      </main>
    </>   )
}

export default Lipoabdominoplastia