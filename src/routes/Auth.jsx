import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from '../Pages/Home';
import Doctor from '../Pages/Doctor';
import Performance from '../Pages/Performance';
import Info from '../Pages/Info';
import Gallery from '../Pages/Gallery';
import Contact from '../Pages/Contact';
 import PageNotFound from '../Pages/PageNotFound';
import Lipoinyección from '../components/surguryComp/Lipoinyección';
import Abdominoplastia from '../components/surguryComp/Abdominoplastia';
import Lipoescultura from '../components/surguryComp/Lipoescultura';
import Lipoabdominoplastia from '../components/surguryComp/Lipoabdominoplastia';
import BrazilianButtLift from '../components/surguryComp/BrazilianButtLift';
import { Testimonial } from '../pages/Testimonial';



const Auth = () => {
  return (
    <div>


    <BrowserRouter>

      <Routes>

      <Route index element={<Home />}></Route>
      <Route path="/DraMelina/" element={<Home />}></Route>
        <Route path="/DraMelina/doctor" element={<Doctor />}></Route>
        <Route path="/DraMelina/procedimientos" element={<Performance />}></Route>

        {/* rutas performance */}
        <Route path="/DraMelina/procedimientos/lipoinyección" element={<Lipoinyección />}></Route>
        <Route path="/DraMelina/procedimientos/abdominoplastia" element={<Abdominoplastia />}></Route>
        <Route path="/DraMelina/procedimientos/lipoescultura" element={<Lipoescultura />}></Route>
        <Route path="/DraMelina/procedimientos/lipoabdominoplastia" element={<Lipoabdominoplastia />}></Route>
        <Route path="/DraMelina/procedimientos/brazilianButtLift" element={<BrazilianButtLift />}></Route>

        <Route path="/DraMelina/testimonios" element={<Testimonial />}></Route>
        <Route path="/DraMelina/contact" element={<Contact />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>


      </Routes>




    </BrowserRouter>



  </div>
)
}

export default Auth