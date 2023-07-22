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
      <Route path="/dra-Melina/" element={<Home />}></Route>
        <Route path="/dra-Melina/doctor" element={<Doctor />}></Route>
        <Route path="/dra-Melina/procedimientos" element={<Performance />}></Route>

        {/* rutas performance */}
        <Route path="/dra-Melina/procedimientos/lipoinyección" element={<Lipoinyección />}></Route>
        <Route path="/dra-Melina/procedimientos/abdominoplastia" element={<Abdominoplastia />}></Route>
        <Route path="/dra-Melina/procedimientos/lipoescultura" element={<Lipoescultura />}></Route>
        <Route path="/dra-Melina/procedimientos/lipoabdominoplastia" element={<Lipoabdominoplastia />}></Route>
        <Route path="/dra-Melina/procedimientos/brazilianButtLift" element={<BrazilianButtLift />}></Route>

        <Route path="/dra-Melina/testimonios" element={<Testimonial />}></Route>
        <Route path="/dra-Melina/contact" element={<Contact />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>


      </Routes>




    </BrowserRouter>



  </div>
)
}

export default Auth