import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';



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
        <ul>
          <li>Se utiliza grasa de la propia persona

</li>
          <li>No hay peligro de rechazo

</li>
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

export default Lipoinyección