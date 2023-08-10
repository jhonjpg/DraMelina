import React from 'react';
import Navbar from '../components/Navbar';
import { useParams, useLocation } from 'react-router-dom';

const Info = () => {
  const { name } = useParams();
  const location = useLocation();

  const { banner, parrafo2, beneficios, img1, img2 } = location.state;

  console.log(location);

  return (
    <>
      <Navbar />

      <main className="headerInfo">
        <article className="position-relative w-75">
          <img
            src="https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="w-100 h-100 position-absolute"
          />
          <h2>{name}</h2>
        </article>

        <p>{parrafo2}</p>

        <strong>{beneficios}</strong>
        <ul>
          <li>Se utiliza grasa de la propia persona</li>
          <li>No hay peligro de rechazo</li>
          <li>Aumento o reducción de áreas de trabajo</li>
        </ul>

        <div className="diferences">
          <div className="">
            <img src="https://cdn.pixabay.com/photo/2021/02/05/20/46/weight-loss-5985844_1280.jpg" alt="" />
          </div>

          <div className="">
            <img src="https://cdn.pixabay.com/photo/2021/02/05/20/46/weight-loss-5985844_1280.jpg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Info;
