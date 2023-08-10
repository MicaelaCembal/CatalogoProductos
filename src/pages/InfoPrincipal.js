import React from 'react';
import ViewDeliveryMenu from '../components/ViewDeliveryMenu';
import Main from '../components/Main';
import Product from '../components/Product';
import KeyPoints from '../components/KeyPoints';
import Team from '../components/Team';
const InfoPrincipal = () => {
  return (
    <div>
      <ViewDeliveryMenu/>
     <Main/>
      <Product/>
     <KeyPoints/>
     <Team/>
    </div>
  );
};

export default InfoPrincipal;
