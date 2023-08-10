import React from 'react'
import DragImageT from '../DragImageT'
import { Link } from 'react-router-dom'



const AumentoMa = () => {
  return (
    <>
    
    <main className="headerInfo">
      <article className="position-relative w-100 bg-secondary">
      <img src="img/sen/senos2.jpg" 
    alt="" />


        <h2>Aumento Mamario</h2>
      </article>

      <p>La cirugía de aumento de mamario implica el uso de implantes para lograr senos más llenos o para restaurar la pérdida de volumen de los senos después de la reducción de peso o el embarazo. La cirugía de aumento es una opción ideal para pacientes que luchan con el tamaño de sus senos, ya que puede aumentar la plenitud y la proyección, mejorar la armonía y el equilibrio de la figura del paciente y mejorar su autoimagen y confianza en sí mismo. Las incisiones se realizan en áreas sutiles para minimizar las cicatrices visibles. Estas incisiones generalmente se realizan alrededor de la areola (incisión periareolar), pero pueden variar según el tipo de implante, el grado de agrandamiento deseado, la anatomía particular del paciente y la preferencia del paciente-cirujano. Las opciones para los implantes mamarios son gel cohesivo de silicona y solución salina. Ambos implantes están aprobados por la FDA.

</p>

      <strong>Beneficios</strong>
      <ul className="d-flex align-items-start pl-3 w-100">
        <li>Elimina gran cantidad de estrías

</li>
        <li>Se obtiene el tamaño y forma que desea

</li>
      </ul>

      <div className="diferences">
      

      <DragImageT/>
      </div>




<button className="rounded-pill"> 
<Link
to="/DraMelina/procedimientos"
className="p-2  w-100 text-center bg-primary fs-3 text-white  mb-2 mt-2"
>
Voler Atras</Link></button>

    </main>
  </>    )
}

export default AumentoMa