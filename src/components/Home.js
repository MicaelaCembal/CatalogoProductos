import React from 'react';
import './style.css';
import Contacto from './Contacto';
import Carrousel from './Carrousel';

const Home = () => {
  return (
    <div>
      <div className="slide">
        <div className="slide_container">
          <Carrousel/>
        </div>
        <div className="slide_con">
          <div className="slide_content">
            <h2>ENVÍO GRATIS en compras superiores a $100*
              <br />
              <span>Envía un regalo gourmet o date un gusto</span>
            </h2>
            <div className="slide_btn">
              <a href="#">COMPRAR AHORA</a>
            </div>
          </div>
        </div>
      </div>
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
          <h2>HASTA 30% DE DESCUENTO
            <br />
            <span>Más de 100 de nuestros aperitivos favoritos en oferta</span>
          </h2>
        </div>
      </div>
      <div className="product">
        <h2>MÁS VENDIDOS</h2>
        <div className="product_container">
          {/* Aquí van los elementos del producto */}
          {/* ... */}
        </div>
      </div>
      <hr />
      <div className="keypoint">
        <h2>ELIGE ENTRE</h2><br /><br /><br />
        <div className="key_container">
          <div className="key_img">
            <img src="images/back22.jpg" alt="Elige entre" />
          </div>
          <div className="key_content">
            <li>Pasteles</li>
            <li>Embutidos curados</li>
            <li>Queso</li>
            <li>Alimentos especiales</li>
            <li>Recogida en la acera</li>
            <li>Fresco y Chevre</li>
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
            <p>Brindamos experiencias alimenticias extraordinarias, inspiradas en nuestro legado. Además, realmente amamos el queso.</p>
            <br /><p>Somos una tienda pionera de alimentos especiales e importador que comenzó con una modesta tienda en el icónico Mercado Italiano de North Philadelphia en 1989; hoy, contamos con más de 350 orgullosos miembros del equipo y nos hemos convertido en una empresa impulsada por la comunidad con cinco ubicaciones minoristas, divisiones de catering, importación y comercio electrónico.</p>
          </div>
        </div>
      </div>
      
     <Contacto/>
      <hr />
      <footer>
        <div className="footer_logo">
          <a href="index.html"><img src="images/logo.png" width="250" alt="Culinary King" /></a>
        </div>
        <div className="pages">
          <h3>Atención al Cliente</h3>
          <a href="about.html">Sobre nosotros</a>|
          <a href="summer.html">Venta de verano</a>|
          <a href="catering.html">Catering</a>|
          <a href="contact.html">Contacto</a>
        </div>
        <div className="doc">
          <h3>Documentos</h3>
          <a href="#">Política de privacidad</a>|
          <a href="#">Términos de uso</a>|
          <a href="#">Política de reembolso</a>
        </div>
        <div className="social">
          <h3>Síguenos</h3>
          <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
      
        <hr />
        <p>Derechos de autor &copy; 2021 Culinary King. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
