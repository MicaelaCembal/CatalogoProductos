import React from 'react';
import Contacto from '../components/Contacto';
import Carrousel from '../components/Carrousel';
import Navbar from '../components/NavBar';
import InfoPrincipal from '../components/InfoPrincipal';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';

const Home = () => {
  return (
    <div>
      <Navbar/>
   
      <Carrousel />
      <InfoPrincipal/>
      <Contacto />
      <Footer/>

      

      
    </div>
  );
};

export default Home;
