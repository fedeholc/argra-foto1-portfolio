import "./App.css";
import Footer from "./footer";
import NavBar from "./navbar";

const FooterHome = () => {
  return (
    <div id="footer-wrapper2">
      <img
        height="60px"
        alt="logo argra"
        src="https://images4.imagebam.com/d5/6a/56/MEGJFU6_o.png"
      ></img>
      <ul className="footer2">
        <li>
          <strong>2022 - Federico Holc</strong>
        </li>
        <li>Portfolio para Fotoperiodismo I - Prof. Martín Acosta</li>
        <li>Comisión: lunes de 19-22hs - aRGra Escuela</li>
        <li></li>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <>
     
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
  return (
    <div>
     {/*  <NavBar /> */}
      <Home />
      <FooterHome />
    </div>
  );
}

export default App;
