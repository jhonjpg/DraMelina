import React from 'react'
import Ubication from '../components/Ubication'

const Contact = () => {
  return (

    <>

    <div className="contacto">
    <i className="bi bi-clipboard2-fill"></i>
<label>CONTACTANOS</label>

<p>Realiza tus preguntas en confianza y cuéntanos tu caso. Llena tus datos rápidamente y podrás recibir una respuesta directa de nuestro equipo de cirujanos plásticos.
</p>

<strong>Para emergencias llamar a Nairoby Jiménez: 849 621-3204</strong>
    </div>

    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
    

    <form className="formu w-100  d-flex justify-content-center align-items-center">

<h6>Formulario de contacto
</h6>

     <input type="text" name="" required="" placeholder="Nombre"/>
     <input type="email" name="" required="" placeholder="email"/>

     <input type="tel" name="" required="" placeholder="Telefono"/>

<textarea name="" id="" cols="33" rows="4" placeholder="Message"></textarea>     
 <center>
   <a href="#">
          Revisar Cita
      <span></span>
   </a></center>
 </form>

 <div className="generalInf">

<pre className="fs-1">Informacion General</pre>

<div className="">

<label htmlFor=""> Dr. Melina Perez</label>

<p>Telefono Movil</p>

<strong>809-589-6950</strong>


<p>Email</p>

<strong>melinaPerez@gmail.com</strong>

</div>

 </div>

 </div>

 <Ubication/>
    


</>
    
  )
}

export default Contact