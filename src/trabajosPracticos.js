import NavBar from "./navbar";
import Footer from "./footer";
import FotoConEpigrafe from "./fotoConEpigrafe";
import "./trabajosPracticos.css";
import "./contactForm.css";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import fsicon from "./imagenes/fullscreen.svg";
//! para las imagenes conviene hacer lo que dice acá del import primero: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
//! ver si es mejor usar import o requiere

const urlsFotosTP = [
  require("./imagenes/FHA08495 v9.jpg"),
  require("./imagenes/FHA08774 v1.jpg"),
  require("./imagenes/FHA09675 v0.jpg"),
  require("./imagenes/FHA09817 v0.jpg"),
  require("./imagenes/FHA10301 v2.jpg"),
  require("./imagenes/FH_02172 v4.jpg"),
  require("./imagenes/FH_02197 v3.jpg"),
  require("./imagenes/FH_02997 v1.jpg"),
  require("./imagenes/FH_03201 v3.jpg"),
  require("./imagenes/FH_04597 v2.jpg"),
  require("./imagenes/FH_04970 v2.jpg"),
  require("./imagenes/FH_05073 v2.jpg"),
  require("./imagenes/FH_06550 v6.jpg"),
  require("./imagenes/FH_06835 v8.jpg"),
  require("./imagenes/FH_06861 v0.jpg"),
  require("./imagenes/tpilustracion.jpg"),
  require("./imagenes/FH_07803 v2.jpg"),
  require("./imagenes/FH_07878 v1.jpg"),
  require("./imagenes/FH_08218 v2.jpg"),
  require("./imagenes/FH_08897 v3.jpg"),
  require("./imagenes/FH_08365 v1.jpg"),
  require("./imagenes/R0000076 v2.jpg"),
];

const TrabajosPracticos = () => {
  const fotosTP = [
    {
      url: urlsFotosTP[0],
      epigrafe:
        "Un grupo de personas realiza una performance durante la manifestación en conmemoración del Día Nacional de la Memoria por la Verdad y la Justicia, en la CABA, Argentina, el 24 de marzo de 2022. FOTO/Federico Holc",
      id: 0,
    },
    {
      url: urlsFotosTP[1],
      epigrafe:
        "Mirta Acuña de Baravalle (izq.), Elia Espen, y Nora Cortiñas, abuelas de Plaza de Mayo, encabezan una de las columnas de organismos de derechos humanos durante la manifestación en conmemoración del Día Nacional de la Memoria por la Verdad y la Justicia, en la Plaza de Mayo, CABA, Argentina, el 24 de marzo de 2022. FOTO/Federico Holc",
      id: 1,
    },
    {
      url: urlsFotosTP[2],
      epigrafe:
        "Dos personas participan del acto en conmemoración del Día del Veterano y de los Caídos en la guerra de Malvinas, en el cenotafio de la Plaza General San Martín, CABA, Argentina, el 2 de abril de 2022. FOTO/Federico Holc",
      id: 2,
    },
    {
      url: urlsFotosTP[3],
      epigrafe:
        "Un grupo personas participan del acto en conmemoración del Día del Veterano y de los Caídos en la guerra de Malvinas, en el cenotafio de la Plaza General San Martín, CABA, Argentina, el 2 de abril de 2022. FOTO/Federico Holc",
      id: 3,
    },
    {
      url: urlsFotosTP[4],
      epigrafe:
        "Un grupo de vecinxs de los barrios de Nuñez, Belgrano y Colegiales participan de una protesta contra el código urbanístico que autoriza la construcción de grandes torres en zonas residenciales,(Ley Nro 6099 de la CABA), en Av. Cabildo y Juramento, CABA, Argentina, el 8 de abril de 2022. FOTO/Federico Holc",
      id: 4,
    },
    {
      url: urlsFotosTP[5],
      epigrafe:
        'Un grupo de integrantes del movimiento Barrios de Pie participan de la Marcha Federal de la Unidad Piquetera, bajo la consigna "Por trabajo y por salario, contra el hambre y la pobreza", en la Plaza de Mayo, CABA, Argentina, el 12 de mayo de 2022. FOTO/Federico Holc',
      id: 5,
    },
    {
      url: urlsFotosTP[6],
      epigrafe:
        'Un grupo de integrantes del Movimiento Teresa Rodríguez 12 de abril (MTR) participan de la Marcha Federal de la Unidad Piquetera, bajo la consigna "Por trabajo y por salario, contra el hambre y la pobreza", en la Plaza de Mayo, CABA, Argentina, el 12 de mayo de 2022. FOTO/Federico Holc',
      id: 6,
    },

    {
      url: urlsFotosTP[7],
      epigrafe:
        "DJ Casablanca pasa música en el Festival Pop Lock, en la sala Planta Inclán, en CABA, Argentina, el 22 de mayo de 2022. FOTO/Federico Holc",
      id: 7,
    },
    {
      url: urlsFotosTP[8],
      epigrafe:
        "Ian (izq.) y Nicolás Cruz participan de una competencia de baile, en el Festival Pop Lock, en la sala Planta Inclán, en la CABA, Argentina, el 22 de mayo de 2022. FOTO/Federico Holc",
      id: 8,
    },
    {
      url: urlsFotosTP[9],
      epigrafe:
        "Un jugador del Club Atlético San Lorenzo de Almagro (izq.) y otro del Club El Talar luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO/Federico Holc",
      id: 9,
    },
    {
      url: urlsFotosTP[10],
      epigrafe:
        "Un jugador del Club El Talar (izq.) y otro del Club Atlético San Lorenzo de Almagro luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO/Federico Holc",
      id: 10,
    },
    {
      url: urlsFotosTP[11],
      epigrafe:
        "Un jugador del Club El Talar (izq.) y otro del Club Atlético San Lorenzo de Almagro luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO/Federico Holc",
      id: 11,
    },
    {
      url: urlsFotosTP[12],
      epigrafe:
        "Igor Wagner (estudiante), durante una clase de fotoperiodismo I, en la sede de la Asociación de Reporteros Gráficos de la República Argentina, CABA, Argentina, el 4 de septiembre de 2022. FOTO/Federico Holc",
      id: 12,
    },

    {
      url: urlsFotosTP[13],
      epigrafe:
        "Marcelo Martinez en su agencia de lotería del barrio de Once, CABA, Argentina, el 9 de septiembre de 2022. FOTO/Federico Holc",
      id: 13,
    },
    {
      url: urlsFotosTP[14],
      epigrafe:
        "Marcelo Martinez en su agencia de lotería del barrio de Once, CABA, Argentina, el 9 de septiembre de 2022. FOTO/Federico Holc",
      id: 14,
    },
    {
      url: urlsFotosTP[15],
      epigrafe:
        "“Inflación”, CABA, Argentina, 16 de septiembre de 2022. ILUSTRACIÓN / Federico Holc",
      id: 15,
    },
    {
      url: urlsFotosTP[16],
      epigrafe:
        "Un grupo de personas transita por la estación Diagonal Norte de la línea C de subterráneos, en la CABA, Argentina, el 6 de Octubre de 2022. FOTO/Federico Holc",
      id: 16,
    },
    {
      url: urlsFotosTP[17],
      epigrafe:
        "Vista de un vagón del subterráneo de la línea C en la estación diagonal norte, CABA, Argentina, el 6 de Octubre de 2022. FOTO/Federico Holc",
      id: 17,
    },
    {
      url: urlsFotosTP[18],
      epigrafe:
        "Vista de la calle Diagonal Sur, en el microcentro de la CABA, Argentina, el 6 de Octubre de 2022. FOTO/Federico Holc",
      id: 18,
    },
    {
      url: urlsFotosTP[19],
      epigrafe:
        "Un grupo de militantes del sindicato de camioneros participa del acto en conmemoración del día de la lealtad peronista, en la Plaza de Mayo, CABA, Argentina, el 17 de octubre de 2022. FOTO/Federico Holc",
      id: 19,
    },
    {
      url: urlsFotosTP[20],
      epigrafe:
        "Vista de un estacionamiento de autos en el barrio de San Cristóbal, CABA, Argentina, el 21 de Octubre de 2022. FOTO/Federico Holc",
      id: 20,
    },
    {
      url: urlsFotosTP[21],
      epigrafe:
        "Vista de un baño de una escuela pública en el barrio de Once, CABA, Argentina, el 27 de Octubre de 2022. FOTO/Federico Holc",
      id: 21,
    },
  ];

  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="bg">
        <NavBar />
        <div className="div-flex-izquierda">
          <h1 className="seccion-titulo">Trabajos Prácticos</h1>
          <div id="boton-galeria-container">
            <button id="boton-galeria" onClick={() => setToggler(!toggler)}>
              Ver como galería
            </button>
            <img height="20" alt="full screen" src={fsicon} />
          </div>
        </div>

        <FsLightbox toggler={toggler} sources={urlsFotosTP} />

        {fotosTP.map((e) => {
          return (
            <FotoConEpigrafe key={e.id} src={e.url} epigrafe={e.epigrafe} />
          );
        })}

        <Footer />
      </div>
    </>
  );
};

export default TrabajosPracticos;
