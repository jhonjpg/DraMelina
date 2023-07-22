import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';



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
      <ul>
        <li>Se utiliza grasa de la propia persona</li>
        <li>No hay peligro de rechazo</li>
        <li>Aumento o reducción de áreas de trabajo</li>
      </ul>

      <div className="diferences">
          <div className="">
          <img src="../img/comparFiguras/compar1.jpg" alt="" />
          </div>

          <div className="">
          <img src="../img/comparFiguras/compar2.jpg" alt="" />
          </div>
        </div>



        <div className="performanceP">

<label >Figura</label>

<ul>




<li> <div className="rounded-circle"> <img src="../img/figura/silueta.jpg" alt="" />  </div> 
    
    <h4>Lipoinyección
</h4>

    <p>Procedimiento que mejoran el contorno corporal…</p>

    <button>     

    <Link
  to={{
    pathname: `/Dra-Melina/procedimientos/Lipoinyección`,
  }}
>
  Ver más
</Link>


    </button>

    </li>
   

<li> <div className="rounded-circle"> <img src="../img/figura/silueta2.jpg" alt="" />  </div> 
    
    <h4>Abdominoplastia
</h4>

    <p>Método más efectivo para reducir estrías y...</p>

    <button>     

    <Link
  to={{
    pathname: `/Dra-Melina/procedimientos/Abdominoplastia`,
  }}
>
  Ver más
</Link>


    </button>

    </li>






    <li> <div className="rounded-circle"> <img src="../img/figura/silueta3.jpg" alt="" />  </div> 
    
    <h4>Lipoescultura
</h4>

    <p>Procedimiento ideal para modelar la figura sin</p>

    <button>     

    <Link
  to={{
    pathname: `/Dra-Melina/procedimientos/Lipoescultura`,
  }}
>
  Ver más
</Link>


    </button>

    </li>
     
     

     
<li> <div className="rounded-circle"> <img src="../img/figura/silueta4.jpg" alt="" />  </div> 
    
    <h4>Lipoabdominoplastia
</h4>

    <p>La Lipoabdominoplastia es la combinación de …</p>

    <button>     

    <Link
  to={{
    pathname: `/Dra-Melina/procedimientos/Lipoabdominoplastia`,
  }}
>
  Ver más
</Link>


    </button>

    </li>
     


     
    <li> <div className="rounded-circle"> <img src="../img/figura/silueta5.jpg" alt="" />  </div> 
    
    <h4>Brazilian Butt Lift
</h4>

    <p>El Brazilian Butt Lift utiliza la grasa de otras …</p>

    <button>     

    <Link
  to={{
    pathname: `/Dra-Melina/procedimientos/BrazilianButtLift`,
  }}
>
  Ver más
</Link>


    </button>

    </li>
     

</ul>

<button className="rounded-pill"> 
<Link
  to={{
    pathname: `/Dra-Melina/procedimientos`,
  }}
  className="p-4 w-50 text-center bg-primary fs-3 text-white rounded-pill"
>
Voler Atras</Link></button>



</div>


    </main>
  </>

    )
}

export default BrazilianButtLift

