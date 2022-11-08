import "./App.css";
import NavBar from "./navbar";
import { useEffect } from "react";


const FooterHome = () => {
  return (
    <div id="footer-wrapper2">
      <img
        height="60px"
        alt="logo argra"
        src="https://images4.imagebam.com/d5/6a/56/MEGJFU6_o.png"
      ></img>
      <ul className="footer2">
        <li>Fotoperiodismo I - Martín Acosta</li>

        <li>Comisión: lunes de 19-22hs</li>
        <li className="pt2">
          <strong>2022 - Federico Holc</strong>
        </li>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div id="contport2">
        <div className="contport">
        
            <div className="tituloportfolio">FEDERICO HOLC</div>
            <div className="tituloportfolio2">FOTOGRAFÍAS</div>
        
        </div>
      </div>

      <div className="div-flex-centrado tp">
        <h2 className="t" id="t1">
          Trabajos Prácticos
        </h2>
        <h2 className="t" id="t2">
          Fotorreportaje
        </h2>
        <h2 className="t" id="t3">
          Archivo
        </h2>
        <h2 className="t" id="t4">
          Sobre Mi
        </h2>
        <h2 className="t" id="t5">
          Contacto
        </h2>
      </div>
    </>
  );
};

function App() {
  
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
     {/*  <NavBar /> */}

      <Home />
      <FooterHome />
    </div>
  );
}

export default App;
