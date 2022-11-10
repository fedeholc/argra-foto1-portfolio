import "./footer.css";

const Footer = () => {
  return (
    /*     <div id="footer-wrapper">
      <ul className="footer">
        <li>
          <strong>2022 - Federico Holc</strong>
        </li>
        <li>Portfolio para Fotoperiodismo I - Prof. Martín Acosta</li>
        <li>Comisión: lunes de 19-22hs - aRGra Escuela</li>
        <li>
          <img
            height="80px"
            alt="logo argra"
            src="https://i.postimg.cc/XY5HgTKc/logoargra.jpg"
          ></img>
        </li>
      </ul>
    </div> */
    <div id="footer-wrapper">
      <img
        height="80px"
        alt="logo argra"
        src={require("./imagenes/logoargra2.jpg")}
      ></img>

      <ul className="footer">
        <li>Fotoperiodismo I - Martín Acosta</li>

        <li>Comisión: lunes de 19-22hs</li>
        <li className="pt2">
          <strong>2022 - Federico Holc</strong>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
