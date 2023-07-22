import React, { useReducer, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Info from '../pages/Info';
import information from '../pages/information';



const Items = ({data}) => {


    let { banner, name, parrafo, parrafo2, beneficios, img1, img2 } = data;


  return (
    <>



<li> <div className="rounded-circle"> <img src={banner} alt="" />  </div> 
    
    <h4>{name}
</h4>

    <p>{parrafo}</p>

    <button>     
    <Link
  to={{
    pathname: `/Dra-Melina/performance/${encodeURIComponent(name)}`,
    state: {
        banner: banner,
        parrafo2: parrafo2,
        beneficios: beneficios,
        img1: img1,
        img2: img2
      }
  }}
>
  Ver más
</Link>


    </button>

    </li>
   
  



{/* remember */}

{/*     
{products.map((product) => <Info key={product.id} data={product}   
        />)
        } */}







    </>


  )
}

export default Items




