import React from 'react';

const Catering = () => {
  return (
    <div className="product" style={{ paddingTop: '100px' }}>
      <h2>EVENTOS Y CATERING</h2>
      {/* Contenido de la página de Catering */}
      <div className="product_container" style={{ paddingBottom: '50px' }}>
        <div className="item">
          <div className="item_img">
            <img src="images/cele2.jpg" alt="Imagen 1" />
          </div>
          <div className="item_content">
            <h3>CELEBRA CON FAMILIA Y AMIGOS</h3>
            <p>Creemos que la buena comida hace que la vida sea mucho mejor. Es por eso que viajamos por el mundo para encontrar los quesos, carnes y alimentos especiales más deliciosos. Luego creamos platos increíbles con ellos y los servimos en tu evento para proporcionar una experiencia culinaria inigualable.
              ¡Pregunta a nuestros expertos en catering sobre la organización de un evento al aire libre!</p>
            <br /><br /><br />
            <a href="#">ESPACIOS Y LUGARES</a>
          </div>
        </div>
        
       
      </div>
      
      <hr />
      
   
      <div className="feed">
        <h2>ESCRIBE UNA OPINIÓN</h2>
        <div className="feed_form" method="post">
          <form name="submit-googlesheet">
            <input type="text" name="Name" placeholder="Nombre" /><br />
            <input type="email" name="Email" placeholder="Correo Electrónico" /><br />
            <input type="text" name="Number" placeholder="Número de Contacto" /><br />
            <textarea rows="5" cols="7" name="Review" placeholder="Escribe tu opinión"></textarea><br />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      
      
      <footer>
        <div className="footer_logo">
          <a href="index.html"><img src="images/logo.png" width="250" alt="Culinary King" /></a>
        </div>
        <div className="pages">
          <h3>Atención al Cliente</h3>
          <a href="about.html">Sobre Nosotros</a>|
          <a href="summer.html">Venta de Verano</a>|
          <a href="catering.html">Catering</a>|
          <a href="contact.html">Contacto</a>
        </div>
        <div className="doc">
          <h3>Documentos</h3>
          <a href="#">Política de Privacidad</a>|
          <a href="#">Términos de Uso</a>|
          <a href="#">Política de Devoluciones</a>
        </div>
        
      
        
        <hr />
        <p>Derechos de autor &copy; 2021 Culinary King. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Catering;
