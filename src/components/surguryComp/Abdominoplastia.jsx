import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import DragImage from '../DragImage';


const Abdominoplastia = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Desplaza el scroll hasta la posición (0, 0) de golpe
  }, []);



  return (
<>
      <Navbar />

      <main className="headerInfo">
        <article className="position-relative w-100 bg-secondary">
        <img src="../img/figura/silueta2.jpg" 
      alt="" />

          <h2>Abdominoplastia</h2>
        </article>

        <p>En el tema de estrías y abdomen flácido, el método más efectivo es el procedimiento quirúrgico denominado abdominoplastia, conocido por su nombre popular en inglés, “tummy tuck”. Este procedimiento puede eliminar la mayoría de las estrías y tonificar el abdomen, eliminando el exceso o piel colgante. La herida queda oculta dentro de la zona del biquini, de forma similar a la herida de una cesárea pero con extensión a ambos lados.

</p>

        <strong>Beneficios</strong>
        <ul className="d-flex align-items-start pl-3 w-100">
          <li>Elimina gran cantidad de estrías

</li>
          <li>Tonificar el abdomen

</li>
          <li>Elimina la piel colgante</li>
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

export default Abdominoplastia