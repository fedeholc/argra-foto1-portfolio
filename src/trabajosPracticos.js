import NavBar from "./navbar";
import Footer from "./footer";
import FotoConEpigrafe from "./fotoConEpigrafe";
import "./trabajosPracticos.css";
import "./contactForm.css";

const TrabajosPracticos = () => {
  const fotosTP = [
    {
      url: "https://i.postimg.cc/W1jZSD97/FHA08495-v9.jpg",
      epigrafe:
        "Un grupo de personas realiza una performance durante la manifestación en conmemoración del Día Nacional de la Memoria por la Verdad y la Justicia, en la CABA, Argentina, el 24 de marzo de 2022. FOTO / Federico Holc",
      id: 0,
    },
    {
      url: "https://i.postimg.cc/fRK9PwpQ/FHA08774-v1.jpg",
      epigrafe:
        "Mirta Acuña de Baravalle (izq.), Elia Espen, y Nora Cortiñas, abuelas de Plaza de Mayo, encabezan una de las columnas de organismos de derechos humanos durante la manifestación en conmemoración del Día Nacional de la Memoria por la Verdad y la Justicia, en la Plaza de Mayo, CABA, Argentina, el 24 de marzo de 2022. FOTO / Federico Holc",
      id: 1,
    },
    {
      url: "https://i.postimg.cc/J4HHRNFx/FHA09675-v0.jpg",
      epigrafe:
        "Dos personas participan del acto en conmemoración del Día del Veterano y de los Caídos en la guerra de Malvinas, en el cenotafio de la Plaza General San Martín, CABA, Argentina, el 2 de abril de 2022. FOTO / Federico Holc",
      id: 2,
    },
    {
      url: "https://i.postimg.cc/3JGNsKyb/FHA09817-v0.jpg",
      epigrafe:
        "Un grupo personas participan del acto en conmemoración del Día del Veterano y de los Caídos en la guerra de Malvinas, en el cenotafio de la Plaza General San Martín, CABA, Argentina, el 2 de abril de 2022. FOTO / Federico Holc",
      id: 3,
    },
    {
      url: "https://i.postimg.cc/sxQxDzTx/FHA10301-v2.jpg",
      epigrafe:
        "Un grupo de vecinxs de los barrios de Nuñez, Belgrano y Colegiales participan de una protesta contra el código urbanístico que autoriza la construcción de grandes torres en zonas residenciales,(Ley Nro 6099 de la CABA), en Av. Cabildo y Juramento, CABA, Argentina, el 8 de abril de 2022. FOTO / Federico Holc",
      id: 4,
    },
    {
      url: "https://i.postimg.cc/5ts2ByGj/FH-02172-v4.jpg",
      epigrafe:
        'Un grupo de integrantes del movimiento Barrios de Pie participan de la Marcha Federal de la Unidad Piquetera, bajo la consigna "Por trabajo y por salario, contra el hambre y la pobreza", en la Plaza de Mayo, CABA, Argentina, el 12 de mayo de 2022. FOTO / Federico Holc',
      id: 5,
    },
    {
      url: "https://i.postimg.cc/d3yQcB0T/FH-02197-v3.jpg",
      epigrafe:
        'Un grupo de integrantes del Movimiento Teresa Rodríguez 12 de abril (MTR) participan de la Marcha Federal de la Unidad Piquetera, bajo la consigna "Por trabajo y por salario, contra el hambre y la pobreza", en la Plaza de Mayo, CABA, Argentina, el 12 de mayo de 2022. FOTO / Federico Holc',
      id: 6,
    },

    {
      url: "https://i.postimg.cc/KjRkkB8Z/FH-02997-v1.jpg",
      epigrafe:
        "DJ Casablanca pasa música en el Festival Pop Lock, en la sala Planta Inclán, en CABA, Argentina, el 22 de mayo de 2022. FOTO / Federico Holc",
      id: 7,
    },
    {
      url: "https://i.postimg.cc/pr49DrmK/FH-03201-v3.jpg",
      epigrafe:
        "Ian (izq.) y Nicolás Cruz participan de una competencia de baile, en el Festival Pop Lock, en la sala Planta Inclán, en la CABA, Argentina, el 22 de mayo de 2022. FOTO / Federico Holc",
      id: 8,
    },
    {
      url: "https://i.postimg.cc/pT1yHrY3/FH-04597-v2.jpg",
      epigrafe:
        "Un jugador del Club Atlético San Lorenzo de Almagro (izq.) y otro del Club El Talar luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO / Federico Holc",
      id: 9,
    },
    {
      url: "https://i.postimg.cc/7ZM6Lmn3/FH-04970-v2.jpg",
      epigrafe:
        "Un jugador del Club El Talar (izq.) y otro del Club Atlético San Lorenzo de Almagro luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO / Federico Holc",
      id: 10,
    },
    {
      url: "https://i.postimg.cc/7ZgC2xwT/FH-05073-v2.jpg",
      epigrafe:
        "Un jugador del Club El Talar (izq.) y otro del Club Atlético San Lorenzo de Almagro luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO / Federico Holc",
      id: 11,
    },
    {
      url: "https://i.postimg.cc/W4TdmQ1Y/FH-06550-v6.jpg",
      epigrafe:
        "Igor Wagner (estudiante), durante una clase de fotoperiodismo I, en la sede de la Asociación de Reporteros Gráficos de la República Argentina, CABA, Argentina, el 4 de septiembre de 2022. FOTO / Federico Holc",
      id: 12,
    },

    {
      url: "https://i.postimg.cc/3RwWVmpg/FH-06835-v8.jpg",
      epigrafe:
        "Marcelo Martinez en su agencia de lotería del barrio de Once, CABA, Argentina, el 9 de septiembre de 2022. FOTO / Federico Holc",
      id: 13,
    },
    {
      url: "https://i.postimg.cc/MK1Ry0YT/FH-06861-v0.jpg",
      epigrafe:
        "Marcelo Martinez en su agencia de lotería del barrio de Once, CABA, Argentina, el 9 de septiembre de 2022. FOTO / Federico Holc",
      id: 14,
    },
    {
      url: "https://i.postimg.cc/FKCJ9ThP/TPf-012-FOTO-ILUSATRACI-N-collage-HOLC-00001-v0.jpg",
      epigrafe:
        "“Inflación”, CABA, Argentina, 16 de septiembre de 2022. ILUSTRACIÓN / Federico Holc",
      id: 15,
    },
    {
      url: "https://i.postimg.cc/Kcw4pKYM/FH-07803-v2.jpg",
      epigrafe:
        "Un grupo de personas transita por la estación Diagonal Norte de la línea C de subterráneos, en la CABA, Argentina, el 6 de Octubre de 2022. FOTO / Federico Holc",
      id: 16,
    },
    {
      url: "https://i.postimg.cc/pTyXqxbC/FH-07878-v1.jpg",
      epigrafe:
        "Vista de un vagón del subterráneo de la línea C en la estación diagonal norte, CABA, Argentina, el 6 de Octubre de 2022. FOTO / Federico Holc",
      id: 17,
    },
    {
      url: "https://i.postimg.cc/8C4jZtFp/FH-08218-v2.jpg",
      epigrafe:
        "Vista de la calle Diagonal Sur, en el microcentro de la CABA, Argentina, el 6 de Octubre de 2022. FOTO / Federico Holc",
      id: 18,
    },
    {
      url: "https://i.postimg.cc/cJLnypGg/FH-08897-v3.jpg",
      epigrafe:
        "Un grupo de militantes del sindicato de camioneros participa del acto en conmemoración del día de la lealtad peronista, en la Plaza de Mayo, CABA, Argentina, el 17 de octubre de 2022. FOTO / Federico Holc",
      id: 19,
    },
    {
      url: "https://i.postimg.cc/kM0K6YKz/FH-08365-v1.jpg",
      epigrafe:
        "Vista de un estacionamiento de autos en el barrio de San Cristóbal, CABA, Argentina, el 21 de Octubre de 2022. FOTO / Federico Holc",
      id: 20,
    },
    {
      url: "https://i.postimg.cc/W1RFzDLv/R0000076-v2.jpg",
      epigrafe:
        "Vista de un baño de una escuela pública en el barrio de Once, CABA, Argentina, el 27 de Octubre de 2022. FOTO / Federico Holc",
      id: 21,
    },
  ];

  return (
    <>
      <div className="bg">
        <NavBar />
        <div className="div-flex-izquierda">
          <h1 className="seccion-titulo">Trabajos Prácticos</h1>
        </div>

        {fotosTP.map((e) => {
          return (
            <FotoConEpigrafe key={e.id} src={e.url} epigrafe={e.epigrafe} />
          );
        })}
        {/* 

        <FotoConEpigrafe src={fotosTP[0].url} epigrafe={fotosTP[0].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} />
        <FotoConEpigrafe src={fotosTP[1].url} epigrafe={fotosTP[1].epigrafe} /> */}
        <Footer />
      </div>
    </>
  );
};

export default TrabajosPracticos;
