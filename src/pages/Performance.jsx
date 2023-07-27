import React, { useReducer } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

import { AllPerformance, informations } from '../components/AllPerformanc'
import { TYPES } from '../components/AllPerformAction'
import Items from '../components/Items';
import Lipoinyección from '../components/surguryComp/Lipoinyección';
import Abdominoplastia from '../components/surguryComp/Abdominoplastia';
import BrazilianButtLift from '../components/surguryComp/BrazilianButtLift';
import Lipoabdominoplastia from '../components/surguryComp/Lipoabdominoplastia';
import Lipoescultura from '../components/surguryComp/Lipoescultura';





const Performance = () => {

  return (

    <>

<Navbar/>

<div className="performanceP">

<div className="fronP">

<strong className="w-100 text-center">PROCEDIMIENTO</strong>

</div>


<label >Figura</label>

<ul>

<li> <div className="rounded-circle"> <img src="../img/figura/silueta.jpg" alt="" />  </div> 
    
    <h4>Lipoinyección
</h4>

    <p>Procedimiento que mejoran el contorno corporal…</p>

    <button>     

    <Link
  to={{
    pathname: `/DraMelina/procedimientos/Lipoinyección`,
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
    pathname: `/DraMelina/procedimientos/Abdominoplastia`,
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
    pathname: `/DraMelina/procedimientos/Lipoescultura`,
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
    pathname: `/DraMelina/procedimientos/Lipoabdominoplastia`,
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
    pathname: `/DraMelina/procedimientos/BrazilianButtLift`,
  }}
>
  Ver más
</Link>


    </button>

    </li>
     

</ul>


<label htmlFor="">Senos</label>

<ul>



<li> <div className="rounded-circle"> <img src="../img/sen/seno.jpg" alt="" />  </div> 
    
    <h4>Levantamiento Mamario


</h4>

    <p>Procedimiento quirúrgico que eleva y da nueva …

</p>

    <button>Leer Mas</button>

    
    </li>
   

    <li> <div className="rounded-circle"> <img src="../img/sen/senos2.jpg" alt="" />  </div> 
    
    <h4>Aumento Mamario
</h4>

    <p>Procedimiento quirúrgico que se realiza para mejorar el tamaño y</p>


    <button>Leer Mas</button>

    
    </li>


    <li> <div className="rounded-circle"> <img src="../img/sen/senos3.jpg" alt="" />  </div> 
    
    <h4>Reducción Mamaria
</h4>

    <p>Reducción de el tamaño del busto para darle …
</p>


    <button>Leer Mas</button>

    
    </li>
   

</ul>


<label htmlFor="">Rostro</label>

<ul>



<li> <div className="rounded-circle"> <img src="../img/face/face.jpg" alt="" />  </div> 
    
    <h4>Blefaroplastia


</h4>

    <p>El objetivo de la cirugía es de mejorar el aspecto y la forma de los párpados…
</p>

    <button>Leer Mas</button>

    
    </li>
   

    <li> <div className="rounded-circle"> <img src="../img/face/face3.jpg" alt="" />  </div> 

    <h4>Rinoplastia
</h4>

    <p>La cirugía de nariz es uno de los procedimientos más … </p>


    <button>Leer Mas</button>

    
    </li>


    <li> <div className="rounded-circle"> <img src="../img/face/face2.jpg" alt="" />  </div> 

    <h4>Lifting Facial
</h4>

    <p>La finalidad es la de dotar a la persona de un rostro apacible…</p>


    <button>Leer Mas</button>

    
    </li>
   

</ul>




</div>

    </>
  )
}

export default Performance