import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Contacto from './components/Contacto';

const App = () => {
  return (
    <>
     <h1> dd </h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}> </Route>
          <Route path = "/contacto" element= {<Contacto/>} > </Route>
        </Route>
      </Routes>
      </BrowserRouter>
      <h1> hola </h1>
      </>
  );
};

export default App;
