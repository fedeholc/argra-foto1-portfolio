import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbarwrapper">
      <ul className="navbar">
        <li>
          <Link to="../argra-foto1-portfolio">Inicio</Link>
        </li>
        <li>
          <Link to="../Trabajos">Trabajos Prácticos</Link>
        </li>
        <li>
          <Link to="../Fotorreportaje">Fotorreportaje</Link>
        </li>
        <li>
          <Link to="../Archivo">Archivo</Link>
        </li>
        <li>
          <Link to="../SobreMi">Sobre Mi</Link>
        </li>
        <li>
          <Link to="../Contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;