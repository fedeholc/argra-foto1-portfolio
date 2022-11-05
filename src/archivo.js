import NavBar from "./navbar";
import Footer from "./footer";
import FotoConEpigrafe from "./fotoConEpigrafe";

const Archivo = () => {

 
  return (
    <>
      <NavBar />

      <h2>Archivo</h2>

      <FotoConEpigrafe
        src="https://images4.imagebam.com/56/59/ed/MEGCXE8_o.jpg"
        epigrafe="hola"
      />

      <Footer />
    </>
  );
};

export default Archivo;
