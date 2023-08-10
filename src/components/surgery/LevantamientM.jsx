import React from 'react'
import { Link } from 'react-router-dom'
import DragImageT from '../DragImageT'



const LevantamientM = () => {
  return (
    <>
    
    <main className="headerInfo">
      <article className="position-relative w-100 bg-secondary">
      <img src="/img/sen/seno.jpg" 
    alt="" />

        <h2>Levantamient Mamario</h2>
      </article>

      <p>A lo largo de los años, factores como el embarazo, la lactancia, y la fuerza de gravedad, tienen su efecto en la mama femenina. Como la piel pierde elasticidad, las mamas frecuentemente pierden su forma y su firmeza, y empiezan a descolgarse. Levantamiento de mama o mastopexia, es un procedimiento quirúrgico que eleva y da nueva forma a las mamas caídas y también si se desea puede reducir el tamaño de la areola. Las técnicas varían pero la más común deja una incisión en forma de T invertida siguiendo el contorno de la mama, en esta técnica se coloca la porción inferior de la mama debajo del pezón como si fuera un implante pero con el propio tejido sostenido por una asa del músculo pectoral (Graf/Bigg ), lo que impide que el seno vuelva a caer. Se conserva igual la sensibilidad. En algunos pacientes, especialmente aquellos con mamas no muy grandes y caída moderada, pueden ser candidatos a procedimientos modificados con cicatrices pequeñas. Si sus mamas son pequeñas o han perdido volumen — por ejemplo tras el embarazo — los implantes mamarios en conjunción con la mastopexia pueden aumentar tanto la firmeza como el tamaño.
</p>

      <strong>Beneficios</strong>
      <ul className="d-flex align-items-start pl-3 w-100">


        <li>      Eleva y da nueva forma a las mamas caídas


</li>
        <li>Se conserva igual la sensibilidad


</li>

<li>Puede aumentar tanto la firmeza como el tamaño



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

export default LevantamientM