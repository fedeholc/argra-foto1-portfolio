import "./App.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FooterHome = () => {
  return (
    <div id="home-footer-wrapper">
      <img height="60px" alt="logo argra" 
      src={require("./imagenes/logoargra1.png")}></img>
      <ul id="home-footer-text">
        <li>Fotoperiodismo I - Martín Acosta</li>

        <li>Comisión: lunes de 19-22hs</li>
        <li id="home-footer-end-text">
          <strong>2022 - Federico Holc</strong>
        </li>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div id="container-encabezado">
        <div id="container-titulo">
          <div className="tituloportfolio">FEDERICO HOLC</div>
          <div className="tituloportfolio2">FOTOGRAFÍA</div>
        </div>
      </div>

      <div className="div-flex-centrado">
        <h2 className="home-menu-item" id="home-menu-item1">
          <Link to="../Trabajos">Trabajos prácticos</Link>
        </h2>
        <h2 className="home-menu-item" id="home-menu-item2">
          <Link to="../Fotorreportaje">Fotorreportaje</Link>
        </h2>
        <h2 className="home-menu-item" id="home-menu-item3">
          <Link to="../Archivo">Archivo</Link>
        </h2>
        <h2 className="home-menu-item" id="home-menu-item4">
          <Link to="../SobreMi">Sobre mi</Link>
        </h2>
        <h2 className="home-menu-item" id="home-menu-item5">
          <Link to="../Contacto">Contacto</Link>
        </h2>
      </div>
    </>
  );
};

function App() {
  // ! esto era para hacer que el fondo cambie solo, ver si lo dejo o no.
  /*  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");

      document.body.style.backgroundImage =
        'url("https://images4.imagebam.com/e3/74/77/MEGJEE8_o.jpg")'; 
  
    }, 1000);
    return () => clearInterval(interval);
  }, []); */

  return (
    <div className="appbg">
      <Home />
      <FooterHome />
    </div>
  );
}

export default App;
