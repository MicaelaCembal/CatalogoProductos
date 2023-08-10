import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contacto from './components/Contacto';
import './App.css';

const App = () => {
  return (    
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>          
          <Route path="/contacto" element={<Contacto />}></Route>
	      </Route>
       </Routes>
     </BrowserRouter>            
  );
};

export default App;
