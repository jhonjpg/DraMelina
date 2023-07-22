import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';


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
        <ul>
          <li>Elimina gran cantidad de estrías

</li>
          <li>Tonificar el abdomen

</li>
          <li>Elimina la piel colgante</li>
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
    </>   )
}

export default Abdominoplastia