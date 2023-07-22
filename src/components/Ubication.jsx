import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';



const Ubication = () => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce:true
      });


  return (



    <article ref={ref} className={inView ? 'ubicacion' : ''}>

    <div className="ubica">

    <label className="w-50 "> <img src="http://www.rubiollaverias.com/wp-content/uploads/2018/07/homs.png" alt=""  /></label>

    <div className="ubica">

    <h5><i className="bi bi-building"></i>HOMS</h5> 
    <p>Autopista Duarte Km. 2.8
Santiago, Rep. Dominicana
Tel.: 829-947-2901 / 2902
Suite: 901 – 902</p>

<pre className="fs-5">Horario de Consultas:
</pre>

<p>Lunes – Jueves, 3pm – 5pm
Por orden de llegada</p>
    



    </div>


    </div>


    <div className="ubica
">

    <label className="w-50 "> <img src="http://www.rubiollaverias.com/wp-content/uploads/2021/08/mail.jpeg" alt=""  /></label>

    <div className="ubica">

    <h5><i className="bi bi-building"></i>Renover
</h5> 
    <p>Calle Aquiles Ramírez #13,
Los Jardines Metropolitanos,
Santiago, RD.
Tel: 809-583-3999</p>

<pre className="fs-5">Horario de Consultas:
</pre>

<p>Viernes, 3pm – 5pm
Sábados, 9am – 11am
Por orden de llegada</p>
    



    </div>


    </div>


    <div className="ubica">

    <label className="w-50 "> <img src="http://www.rubiollaverias.com/wp-content/uploads/2018/07/renover.png" alt=""  /></label>

    <div className="ubica">

    <h5><i className="bi bi-building"></i>Olive Tree
</h5> 
    <p>23-09 31st St.
Astoria, NY 11105
Tel: 718-374-6689</p>

<pre className="fs-5">Doctores:


</pre>

<p>Michael Ehrenhaus. MD.
Director
Nelson Rubio. MD
Plastic Surgeon</p>
    



    </div>


    </div>



    </article>




  )
}

export default Ubication