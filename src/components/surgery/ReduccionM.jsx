import React from 'react'
import DragImageT from '../DragImageT'
import { Link } from 'react-router-dom'



const ReduccionM = () => {
  return (
    <>
    
    <main className="headerInfo">
      <article className="position-relative w-100 bg-secondary">
      <img src="img/sen/senos3.jpg" 
    alt="" />


        <h2>Reduccion Mamaria</h2>
      </article>

      <p>Los senos demasiado grandes conducen a empobrecer la imagen del cuerpo; tener dolor en la espalda, cuello y hombros; problemas con la postura; abrasiones o laceraciones por los tirantes del brassiere, entre otros síntomas. En estos casos el procedimiento de elección es una mamoplastia reductiva en el cual el cirujano reduce el tamaño de la mama, pero a la vez esculpe el busto para darle la mejor forma posible.

</p>

      <strong>Beneficios</strong>
      <ul className="d-flex align-items-start pl-3 w-100">
      <li>      Se conserva igual la función



</li>
        <li>Se conserva igual la sensibilidad



</li>

<li>Se conserva igual la capacidad de lactar a un posible bebé



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

export default ReduccionM