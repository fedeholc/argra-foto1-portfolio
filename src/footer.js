import "./footer.css";

const Footer = () => {
  return (
 
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
