import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contacto from './components/Contacto';
import Catering from './components/Catering';
import ViewDeliveryMenu from './components/ViewDeliveryMenu';
import './App.css';

const App = () => {
  return (    
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>          
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/catering" element={<Catering />}></Route>
          <Route path="/ViewDeliveryMenu" element={<ViewDeliveryMenu />}></Route>
	      </Route>
       </Routes>
     </BrowserRouter>            
  );
};

export default App;
