import NavBar from "./navbar";
import Footer from "./footer";
import FotoConEpigrafe from "./fotoConEpigrafe";
import "./trabajosPracticos.css";


const TrabajosPracticos = () => {
  return (
    <>
      <div className="bg">
        <NavBar />
        <div className="div-flex-izquierda">
          <h1 className="seccion-titulo">Trabajos Prácticos</h1>
        </div>
        <div className="div-flex-centrado">
          <h2 className="seccion-subtitulo">24 de Marzo</h2>
        </div>
        <FotoConEpigrafe
          src="https://images4.imagebam.com/56/59/ed/MEGCXE8_o.jpg"
          epigrafe="hola"
        />
        <div className="div-flex-centrado">
          <h2 className="seccion-subtitulo">Deportes</h2>
        </div>

    
        <FotoConEpigrafe
          src="https://images4.imagebam.com/56/59/ed/MEGCXE8_o.jpg"
          epigrafe="hola"
        />

        <Footer />
      </div>
    </>
  );
};

export default TrabajosPracticos;
