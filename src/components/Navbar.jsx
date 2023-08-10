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
    <li className="nav-item"> <Link  onClick={toggleMenu} exact="true" to="/DraMelina/" activeclassname="active" >  Home</Link></li>
         <li className="nav-item"> <Link onClick={toggleMenu} to="/DraMelina/doctor"  >  Doctora</Link></li>
         <li className="nav-item"> <Link onClick={toggleMenu} to="/DraMelina/procedimientos"  > Procedimientos</Link></li>
         <li className="nav-item"> <Link onClick={toggleMenu} to="/DraMelina/testimonios" >  Testimonios</Link></li>
         <li className="nav-item"> <Link onClick={toggleMenu} to="/DraMelina/contact" >  Contacto</Link></li>


       </ul>

     

       <div className="logo"></div>




     </nav>



{/* other device */}


<div className="devices">



<div className="logo"></div>



    <ul className="">
    <li className="nav-item"> <NavLink exact="true" to="/DraMelina/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item"> <NavLink to="/DraMelina/doctor"  >  Doctora</NavLink></li>
         <li className="nav-item"> <NavLink to="/DraMelina/Procedimientos"  > Procedimientos</NavLink></li>
         <li className="nav-item"> <NavLink to="/DraMelina/testimonios" >  Testimonios</NavLink></li>
         <li className="nav-item"> <NavLink to="/DraMelina/contact" >  Contacto</NavLink></li>


       </ul>



     </div>




    </>

    )
}

export default Navbar