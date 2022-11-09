import NavBar from "./navbar";
import Footer from "./footer";
import FotoConEpigrafe from "./fotoConEpigrafe";
import "./trabajosPracticos.css";
import "./contactForm.css";

const TrabajosPracticos = () => {
  const fotosTP = [
    {
      url: "https://i.postimg.cc/C5Mxw7Tv/FHA08495-v9.webp",
      epigrafe:
        "Un grupo de personas realiza una performance durante la manifestación en conmemoración del Día Nacional de la Memoria por la Verdad y la Justicia, en la CABA, Argentina, el 24 de marzo de 2022. FOTO / Federico Holc",
      id: 0,
    },
    {
      url: "https://i.postimg.cc/5N02Gsmy/FHA08774-v1-01.webp",
      epigrafe:
        "Mirta Acuña de Baravalle (izq.), Elia Espen, y Nora Cortiñas, abuelas de Plaza de Mayo, encabezan una de las columnas de organismos de derechos humanos durante la manifestación en conmemoración del Día Nacional de la Memoria por la Verdad y la Justicia, en la Plaza de Mayo, CABA, Argentina, el 24 de marzo de 2022. FOTO / Federico Holc",
      id: 1,
    },
    {
      url: "https://i.postimg.cc/Wz7qntjy/FHA09675-v0.webp",
      epigrafe:
        "Dos personas participan del acto en conmemoración del Día del Veterano y de los Caídos en la guerra de Malvinas, en el cenotafio de la Plaza General San Martín, CABA, Argentina, el 2 de abril de 2022. FOTO / Federico Holc",
      id: 2,
    },
    {
      url: "https://i.postimg.cc/6qzTZSfJ/FHA09817-v0.webp",
      epigrafe:
        "Un grupo personas participan del acto en conmemoración del Día del Veterano y de los Caídos en la guerra de Malvinas, en el cenotafio de la Plaza General San Martín, CABA, Argentina, el 2 de abril de 2022. FOTO / Federico Holc",
      id: 3,
    },
    {
      url: "https://i.postimg.cc/W3GdNtD4/FHA10301-v2.webp",
      epigrafe:
        "Un grupo de vecinxs de los barrios de Nuñez, Belgrano y Colegiales participan de una protesta contra el código urbanístico que autoriza la construcción de grandes torres en zonas residenciales,(Ley Nro 6099 de la CABA), en Av. Cabildo y Juramento, CABA, Argentina, el 8 de abril de 2022. FOTO / Federico Holc",
      id: 4,
    },
    {
      url: "https://i.postimg.cc/h40XNzWy/FH-02172-v4.webp",
      epigrafe:
        'Un grupo de integrantes del movimiento Barrios de Pie participan de la Marcha Federal de la Unidad Piquetera, bajo la consigna "Por trabajo y por salario, contra el hambre y la pobreza", en la Plaza de Mayo, CABA, Argentina, el 12 de mayo de 2022. FOTO / Federico Holc',
      id: 5,
    },
    {
      url: "https://i.postimg.cc/3wpR1WFZ/FH-02197-v3.webp",
      epigrafe:
        'Un grupo de integrantes del Movimiento Teresa Rodríguez 12 de abril (MTR) participan de la Marcha Federal de la Unidad Piquetera, bajo la consigna "Por trabajo y por salario, contra el hambre y la pobreza", en la Plaza de Mayo, CABA, Argentina, el 12 de mayo de 2022. FOTO / Federico Holc',
      id: 6,
    },

    {
      url: "https://i.postimg.cc/gJ8ZxN7m/FH-02997-v1.webp",
      epigrafe:
        "DJ Casablanca pasa música en el Festival Pop Lock, en la sala Planta Inclán, en CABA, Argentina, el 22 de mayo de 2022. FOTO / Federico Holc",
      id: 7,
    },
    {
      url: "https://i.postimg.cc/LsrP4rNx/FH-03201-v3.webp ",
      epigrafe:
        "Ian (izq.) y Nicolás Cruz participan de una competencia de baile, en el Festival Pop Lock, en la sala Planta Inclán, en la CABA, Argentina, el 22 de mayo de 2022. FOTO / Federico Holc",
      id: 8,
    },
    {
      url: "https://i.postimg.cc/TY7pYzPn/FH-04597-v2.webp",
      epigrafe:
        "Un jugador del Club Atlético San Lorenzo de Almagro (izq.) y otro del Club El Talar luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO / Federico Holc",
      id: 9,
    },
    {
      url: "https://i.postimg.cc/cLPCffwH/FH-04970-v2-01.webp",
      epigrafe:
        "Un jugador del Club El Talar (izq.) y otro del Club Atlético San Lorenzo de Almagro luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO / Federico Holc",
      id: 10,
    },
    {
      url: "https://i.postimg.cc/7h4T0Sv7/FH-05073-v2.webp",
      epigrafe:
        "Un jugador del Club El Talar (izq.) y otro del Club Atlético San Lorenzo de Almagro luchan por la pelota durante el partido correspondiente a la 1ra división de la Liga Nacional de Futsal, disputado en el estadio del Club Atlético San Lorenzo de Almagro, en CABA, Argentina, el 5 de Junio de 2022. FOTO / Federico Holc",
      id: 11,
    },
    {
      url: "https://i.postimg.cc/fTw9b7fQ/FH-06550-v6.webp",
      epigrafe:
        "Igor Wagner (estudiante), durante una clase de fotoperiodismo I, en la sede de la Asociación de Reporteros Gráficos de la República Argentina, CABA, Argentina, el 4 de septiembre de 2022. FOTO / Federico Holc",
      id: 12,
    },

    {
      url: "https://i.postimg.cc/dt4TZ75k/FH-06835-v8.webp",
      epigrafe:
        "Marcelo Martinez en su agencia de lotería del barrio de Once, CABA, Argentina, el 9 de septiembre de 2022. FOTO / Federico Holc",
      id: 13,
    },
    {
      url: "https://i.postimg.cc/4dQ3CMM7/FH-06861-v0.webp",
      epigrafe:
        "Marcelo Martinez en su agencia de lotería del barrio de Once, CABA, Argentina, el 9 de septiembre de 2022. FOTO / Federico Holc",
      id: 14,
    },
    {
      url: "https://i.postimg.cc/zDpf0sK4/TPf-012-FOTO-ILUSATRACI-N-collage-HOLC-00001-v0.webp",
      epigrafe:
        "“Inflación”, CABA, Argentina, 16 de septiembre de 2022. ILUSTRACIÓN / Federico Holc",
      id: 15,
    },
    {
      url: "https://i.postimg.cc/nrnCCZ7G/FH-07803-v2.webp",
      epigrafe:
        "Un grupo de personas transita por la estación Diagonal Norte de la línea C de subterráneos, en la CABA, Argentina, el 6 de Octubre de 2022. FOTO / Federico Holc",
      id: 16,
    },
    {
      url: "https://i.postimg.cc/d0T7f5wr/FH-07878-v1.webp",
      epigrafe:
        "Vista de un vagón del subterráneo de la línea C en la estación diagonal norte, CABA, Argentina, el 6 de Octubre de 2022. FOTO / Federico Holc",
    id: 17,},
    {
      url: "https://i.postimg.cc/8zcfR1Yy/FH-08218-v2.webp",
      epigrafe:
        "Vista de la calle Diagonal Sur, en el microcentro de la CABA, Argentina, el 6 de Octubre de 2022. FOTO / Federico Holc",
    id: 18,},
    {
      url: "https://i.postimg.cc/K83vc4wy/FH-08897-v3.webp ",
      epigrafe:
        "Un grupo de militantes del sindicato de camioneros participa del acto en conmemoración del día de la lealtad peronista, en la Plaza de Mayo, CABA, Argentina, el 17 de octubre de 2022. FOTO / Federico Holc",
    id: 19,},
    {
      url: "https://i.postimg.cc/d1Y0xvWc/FH-08365-v1.webp",
      epigrafe:
        "Vista de un estacionamiento de autos en el barrio de San Cristóbal, CABA, Argentina, el 21 de Octubre de 2022. FOTO / Federico Holc",
    id: 20,},
    {
      url: "https://i.postimg.cc/PfbDhVZM/R0000076-v2.webp",
      epigrafe:
        "Vista de un baño de una escuela pública en el barrio de Once, CABA, Argentina, el 27 de Octubre de 2022. FOTO / Federico Holc",
   id: 21, },
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
