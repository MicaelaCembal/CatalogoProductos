import { Link } from "react-router-dom";
import logo from '../images/logo.png';


const Navbar = () => {
  return (
    <nav className="nav nav_top">
      <div className="logo">
        <Link to="/"><img src={logo} width="250" alt="Culinary King" /></Link>
      </div>
      <div className="nav_side">        
          <Link to="/">Home</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
