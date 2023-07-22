import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Navbar = () => {



  const [toggleOn, settoggleOn] = useState(false)


const toggleMenu = () => {

  settoggleOn(!toggleOn)

}

const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`

  return (


    <>

    {/* phone Nav */}
<nav>

<div className="menu" onClick={toggleMenu}> 
{toggleOn ?  <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
</div>

    <ul className={toggle}>
    <li className="nav-item"> <Link exact="true" to="/Dra-Melina/" activeclassname="active" >  Home</Link></li>
         <li className="nav-item"> <Link to="/Dra-Melina/doctor"  >  Doctora</Link></li>
         <li className="nav-item"> <Link to="/Dra-Melina/procedimientos"  > Procedimientos</Link></li>
         <li className="nav-item"> <Link to="/Dra-Melina/testimonios" >  Testimonios</Link></li>
         <li className="nav-item"> <Link to="/Dra-Melina/contact" >  Contacto</Link></li>


       </ul>

     

       <div className="logo"></div>




     </nav>



{/* other device */}


<div className="devices">



<div className="logo"></div>



    <ul className="">
    <li className="nav-item"> <NavLink exact="true" to="/Dra-Melina/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item"> <NavLink to="/Dra-Melina/doctor"  >  Doctora</NavLink></li>
         <li className="nav-item"> <NavLink to="/Dra-Melina/Procedimientos"  > Procedimientos</NavLink></li>
         <li className="nav-item"> <NavLink to="/Dra-Melina/testimonios" >  Testimonios</NavLink></li>
         <li className="nav-item"> <NavLink to="/Dra-Melina/contact" >  Contacto</NavLink></li>


       </ul>



     </div>




    </>

    )
}

export default Navbar