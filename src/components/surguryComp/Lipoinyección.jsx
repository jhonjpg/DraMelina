import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import DragImage from '../DragImage';



const Lipoinyección = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Desplaza el scroll hasta la posición (0, 0) de golpe
  }, []);


  return (
<>
      <Navbar />

      <main className="headerInfo">
        <article className="position-relative w-100 bg-secondary
">
          <h2 className="">Lipoinyección</h2>

        <img src="../img/figura/silueta.jpg" alt="" />
        </article>



        <p>La Lipoinyeción es un procedimiento que se incluye dentro de las técnicas que mejoran el contorno corporal. La ventaja que ofrece es que la grasa que se utiliza es de la propia persona, por lo tanto no hay peligro de rechazo o encapsulamiento. Esta grasa que se obtiene es preparada y luego inyectada en los planos profundos de la piel mediante cánulas especiales. Con esto logramos restituir o aumentar el volumen en las áreas inyectadas, para así obtener rostro, cintura, cadera y glúteos perfectos. Es posible que con el paso del tiempo se reabsorba un 20 a 25 % de lo inyectado, pero el resto queda de manera permanente.</p>



        <strong>Beneficios</strong>
        <ul className="d-flex align-items-start pl-3 w-100">
          <li>Se utiliza grasa de la propia persona

</li>
          <li>No hay peligro de rechazo

</li>
          <li>Aumento o reducción de áreas de trabajo</li>
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

export default Lipoinyección