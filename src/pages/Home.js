import React from 'react';
import Contacto from '../components/Contacto';
import Carrousel from '../components/Carrousel';
import Navbar from '../components/NavBar';
import InfoPrincipal from './InfoPrincipal';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carrousel />
      <InfoPrincipal/>
      <Contacto />
      
    </div>
  );
};

export default Home;
