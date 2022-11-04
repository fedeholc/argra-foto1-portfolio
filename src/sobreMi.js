import NavBar from "./navbar";
import Footer from "./footer";

const SobreMi = () => {
  return (
    <>
      <NavBar />
      <h2>Sobre mi</h2>
      <div className="imagen-container">
        <img
          className="imagen-portfolio"
       
          alt="poner epigrafe"
          src="https://images4.imagebam.com/56/59/ed/MEGCXE8_o.jpg"
        />
      </div>
      <hr></hr>
      <div className="imagen-container">
        <img
          className="imagen-portfolio"
  
          alt="poner epigrafe"
          src="https://images4.imagebam.com/56/59/ed/MEGCXE8_o.jpg"
        />
      </div>
      <Footer />
    </>
  );
};

export default SobreMi;