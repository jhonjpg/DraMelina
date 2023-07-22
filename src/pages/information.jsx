import React, { useReducer, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Items from '../components/Items'

const information = ({id}) => {




  return (
<>

<Navbar/>

<main className="headerInfo">


 <article className=" position-relative w-75 ">

<img src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  className="w-100 h-100 position-absolute" />
<h2>Lopoinyection</h2>


</article>


<p>

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ex totam velit suscipit mollitia ut molestias voluptatibus possimus animi eius, quaerat aliquam a commodi quasi quis? Aut necessitatibus obcaecati est!
</p>

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
<img src="https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  />

</div>

<div className="">

  <img src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  />
</div>

</div>


 

</main>


</>




    )
}

export default information


