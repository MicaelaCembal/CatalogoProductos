import { Routes, Route, Link } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contacto from "./Contacto";

const Navbar = () => {
  return (
    <nav className="nav nav_top">
      <div className="logo">
        <Link to="/"><img src="images/logo.png" width="250" alt="Culinary King" /></Link>
      </div>
      <div className="nav_side">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </nav>
  );
};

export default Navbar;
