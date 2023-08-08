import React from 'react';
import Contacto from '../components/Contacto';
import Carrousel from '../components/Carrousel';
import Navbar from '../components/NavBar';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carrousel />

      <div className="side">
        <div className="left">
          <img src="images/side.jpg" alt="Imagen lateral" />
        </div>
        <div className="right">
          <h2>¡PRUEBA ALGO NUEVO!</h2>
          <p>
            Descubre delicias, con nuevos hallazgos culinarios agregados cada semana. Encuentra tus nuevos favoritos, desde chocolates de pequeña producción y embutidos curados de forma tradicional, hasta conservas innovadoras y los mejores quesos.
          </p>
          <div className="side_btn">
            <a href="#">COMPRAR AHORA</a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main_content">
          <h2>HASTA 30% DE DESCUENTO</h2>
          <span>Más de 100 de nuestros aperitivos favoritos en oferta</span>
        </div>
      </div>

      <hr />

      <div className="keypoint">
        <h2>ELIGE ENTRE</h2>
        <div className="key_container">
          <div className="key_img">
            <img src="images/back22.jpg" alt="Elige entre" />
          </div>
          <div className="key_content">
            <ul>
              <li>Pasteles</li>
              <li>Embutidos curados</li>
              <li>Queso</li>
              <li>Alimentos especiales</li>
              <li>Recogida en la acera</li>
              <li>Fresco y Chevre</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="team">
        <h2>Nuestro Equipo</h2>
        <div className="team_container">
          <div className="team_video">
            <video controls>
              <source src="images/Restaurant food cinematic video advertisement.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="team_content">
            <p>
              Brindamos experiencias alimenticias extraordinarias, inspiradas en nuestro legado. Además, realmente amamos el queso.
            </p>
            <p>
              Somos una tienda pionera de alimentos especiales e importador que comenzó con una modesta tienda en el icónico Mercado Italiano de North Philadelphia en 1989; hoy, contamos con más de 350 orgullosos miembros del equipo y nos hemos convertido en una empresa impulsada por la comunidad con cinco ubicaciones minoristas, divisiones de catering, importación y comercio electrónico.
            </p>
          </div>
        </div>
      </div>

      <Contacto />

      <hr />

      
    </div>
  );
};

export default Home;
