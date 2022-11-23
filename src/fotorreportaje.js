import NavBar from "./navbar";
import Footer from "./footer";
import FotoPostales from "./fotoPostales";
import "./fotorreportaje.css";
import "./contactForm.css";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import fsicon from "./imagenes/fullscreen.svg";
//! para las imagenes conviene hacer lo que dice acá del import primero: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
//! ver si es mejor usar import o requiere

const urlsFotosTP = [
  require("./img-reportaje/f01.jpg"),
  require("./img-reportaje/f01p.jpg"),
  require("./img-reportaje/f02.jpg"),
  require("./img-reportaje/f02p.jpg"),
  require("./img-reportaje/f03.jpg"),
  require("./img-reportaje/f03p.jpg"),
  require("./img-reportaje/f04.jpg"),
  require("./img-reportaje/f04p.jpg"),
  require("./img-reportaje/f05.jpg"),
  require("./img-reportaje/f05p.jpg"),
  require("./img-reportaje/f06.jpg"),
  require("./img-reportaje/f06p.jpg"),
  require("./img-reportaje/f07.jpg"),
  require("./img-reportaje/f07p.jpg"),
  require("./img-reportaje/f08.jpg"),
  require("./img-reportaje/f08p.jpg"),
  require("./img-reportaje/f09.jpg"),
  require("./img-reportaje/f09p.jpg"),
  require("./img-reportaje/f10.jpg"),
  require("./img-reportaje/f10p.jpg"),
  require("./img-reportaje/f11.jpg"),
  require("./img-reportaje/f11p.jpg"),
  require("./img-reportaje/f12.jpg"),
  require("./img-reportaje/f12p.jpg"),
  require("./img-reportaje/f13.jpg"),
  require("./img-reportaje/f13p.jpg"),
  require("./img-reportaje/f14.jpg"),
  require("./img-reportaje/f14p.jpg"),
  require("./img-reportaje/f15.jpg"),
  require("./img-reportaje/f15p.jpg"),
  require("./img-reportaje/f16.jpg"),
  require("./img-reportaje/f16p.jpg"),
  require("./img-reportaje/f17.jpg"),
  require("./img-reportaje/f17p.jpg"),
  require("./img-reportaje/f18.jpg"),
  require("./img-reportaje/f18p.jpg"),
  require("./img-reportaje/f19.jpg"),
  require("./img-reportaje/f19p.jpg"),
  require("./img-reportaje/f20.jpg"),
  require("./img-reportaje/f20p.jpg"),
 
];

const Fotorreportaje = () => {
  
 

  const fotosTP = [];
  for (let i = 0; i <= 40; i++) {
    fotosTP.push({url: urlsFotosTP[i], id: i})
  }

  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="bg">
        <NavBar />
        <div className="div-flex-izquierda">
          <h1 id="andando-titulo" className="seccion-titulo">
            Fotorreportaje: Andando
          </h1>

          <div id="boton-galeria-container">
            <button id="boton-galeria" onClick={() => setToggler(!toggler)}>
              Ver como galería
            </button>
            <img height="20" alt="full screen" src={fsicon} />
          </div>
        </div>
        <FsLightbox toggler={toggler} sources={urlsFotosTP} />
        <ul>
          {fotosTP.map((e) => {
            return (
              <li>
                <FotoPostales key={e.id} src={e.url} epigrafe={e.epigrafe} />
              </li>
            );
          })}
        </ul>
        <div className="div-flex-centrado" id="andando-pie">
          <strong>
            Fotorreportaje realizado por el colectivo Andando: Jimena Avalos,
            Mariel Berlingeri, Alexis Fernández, Federico Holc, y Lucas Mangi.
          </strong>
        </div>
        <div className="div-flex-izquierda" id="andando-referencias">
          <ul>
            <div>Referencias autorales de los textos de las postales:</div>
            <br></br>

            <li>
              Nro 1: Juan Solá, fragmento de “Duermen en la penumbra los
              fragmentos de lo verdadero”{" "}
            </li>
            <li>Nro 2: Henri Meschonnic </li>
            <li>Nro 3, 5 y 8: Federico Holc </li>
            <li>Nro 4: Luca Prodan</li>
            <li>Nro 6: David González </li>

            <li>Nro 7: Pedro Pietri </li>
            <li>Nro 9: Mariano Blatt </li>
            <li>Nro 10: Adaptación de un texto Harold Norse </li>
            <li>Nro 11 y 16: Jorge Riechmann </li>

            <li>Nro 12: George Orwell</li>
            <li>Nro 13: Erri De Luca </li>
            <li>Nro 14: Jorgelina Soulet </li>
            <li>Nro 15: Kurt Lutman, fragmento de “Lleno de pájaros”.</li>
            <li>Nro 17: Adaptación de un texto de David Trashumante </li>
            <li>Nro 18: Yoko Ono </li>
            <li>Nro 19: Juako Escaso </li>
            <li>Nro 20: Alexis Fernández </li>
            <br></br>
            <br></br>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Fotorreportaje;
