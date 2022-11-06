import NavBar from "./navbar";
import Footer from "./footer";
import FotoConEpigrafe from "./fotoConEpigrafe";

const TrabajosPracticos = () => {
  return (
    <>
      <NavBar />
      <div class="div-flex-derecha">
        <h1 class="seccion-titulo">Trabajos Prácticos</h1>
      </div>
      <div class="div-flex-centrado">
        <h2 class="seccion-subtitulo">24 de Marzo</h2>
      </div>

      <FotoConEpigrafe
        src="https://images4.imagebam.com/56/59/ed/MEGCXE8_o.jpg"
        epigrafe="hola"
      />

      <div class="div-flex-centrado">
        <h2 class="seccion-subtitulo">Deportes</h2>
      </div>

      <FotoConEpigrafe
        src="https://images4.imagebam.com/56/59/ed/MEGCXE8_o.jpg"
        epigrafe="hola"
      />

      <h2>Espectáculos</h2>

      <FotoConEpigrafe
        src="https://images4.imagebam.com/56/59/ed/MEGCXE8_o.jpg"
        epigrafe="hola"
      />

      <Footer />
    </>
  );
};

export default TrabajosPracticos;
