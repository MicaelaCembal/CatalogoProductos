import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { CarritoContext } from "../context/CarritoContext";
import logo from "../images/logo.png";

const Navbar = () => {
  const { listaCompras } = useContext(CarritoContext);

  return (
    <nav className="nav nav_top">
      <div className="logo">
        <Link to="/">
          <img src={logo} width="250" alt="Culinary King" />
        </Link>
      </div>
      <div className="nav_side">
        <Link to="/">HOME</Link>
        <Link to="/catering">CATERING</Link>
        <Link to="/contacto">CONTACTO</Link>
        <NavLink to="/carrito">
          <Badge badgeContent={listaCompras.length} color="secondary">
            <ShoppingCart color="action" />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
