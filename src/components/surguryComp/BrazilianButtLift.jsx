import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import DragImageButt from '../DragImageButt';



const BrazilianButtLift = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Desplaza el scroll hasta la posición (0, 0) de golpe
  }, []);

  return (

    <>
    <Navbar />

    <main className="headerInfo">
      <article className="position-relative w-100 bg-secondary">
      <img src="../img/figura/silueta5.jpg" alt="" />

        <h2>Brazilian Butt Lift</h2>
      </article>

      <p>El Brazilian Butt Lift utiliza la grasa de otras partes del cuerpo. Esto podría destacarse como un beneficio adicional porque las áreas objetivo se succionan al mismo tiempo. Los lugares habituales para la extracción de grasa son la espalda, el estómago, las caderas y los muslos. La grasa extraída se purifica y luego se utiliza para dar forma y aumentar los glúteos. Los resultados pueden hacer que los glúteos se vean más voluminosos, más redondos, más grandes, más proporcionados y más firmes.


</p>

      <strong>Beneficios</strong>
      <ul className="d-flex align-items-start pl-3 w-100">
        <li>Se utiliza grasa de la propia persona</li>
        <li>No hay peligro de rechazo</li>
        <li>Aumento o reducción de áreas de trabajo</li>
      </ul>

      <div className="diferences">
<DragImageButt/>

        </div>


<button className="rounded-pill"> 
<Link
    to="/DraMelina/procedimientos"

  className="p-2 w-100 text-center bg-primary fs-3 text-white  mb-2 mt-2"
>
Voler Atras</Link></button>


    </main>
  </>

    )
}

export default BrazilianButtLift

