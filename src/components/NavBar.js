import { Link } from "react-router-dom";
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="nav nav_top">
      <div className="logo">
        <Link to="/"><img src={logo} width="250" alt="Culinary King" /></Link>
      </div>
      <div className="nav_side">        
          <Link to="/">HOME</Link>
          <Link to="/catering">CATERING</Link>
          <Link to="/contacto">CONTACTO</Link>
      </div>
    </nav>
  );
};

export default Navbar;
