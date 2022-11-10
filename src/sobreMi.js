import NavBar from "./navbar";
import Footer from "./footer";
import "./contactForm.css";
import "./sobreMi.css";

const SobreMi = () => {
  return (
    <>
      <div className="wrap-all-component">
        <NavBar />
        <div className="wrap-center">
          <div className="div-flex-izquierda">
            <h1 className="seccion-titulo">Sobre mi</h1>
          </div>
          <div id="hola">Hola, soy fede =)</div>
          <img
            border="2"
            width="300px"
            alt="autorretrato"
            src="https://images4.imagebam.com/29/f2/93/MEGOBN6_o.jpg"
          />

          <br />
          <br />
          <div>
            Mi biografía no es relevante,
            <br />
            si querés algo para leer,
            <br /> mejor te dejo algunas poesías:
          </div>
          <br />
          <br />
          <br />

          <div className="container-encabezado-poesia">
            <div className="container-titulo-poesia">
              <div className="texto-poesia">
                Instrucciones para vivir una vida:
                <br />
                Prestar atención.
                <br />
                Sorprenderse. <br />
                Contarlo.
              </div>
              <div className="titulo-poesia">Mary Oliver</div>
            </div>
          </div>

          <div className="separador">***</div>

          <div className="container-encabezado-poesia">
            <div className="container-titulo-poesia">
              <div className="texto-poesia">
                Morí por la Belleza – pero apenas <br />
                fui ubicada en mi Tumba <br />
                a Alguien que había muerto por la Verdad pusieron <br />
                en el Cuarto de al lado-
                <br />
                <br /> Me preguntó, amable, por qué había muerto
                <br /> «Por la Belleza», dije – <br />
                «Y yo por la Verdad, las Dos son Una – <br />
                Somos Hermanas», dijo – <br />
                <br />Y así, como Parientes que una Noche se conocen – <br />
                de un Cuarto al otro hablamos – <br />
                hasta que el Musgo nos llegó a los labios – <br />y cubrió
                nuestros nombres –
              </div>
              <div className="titulo-poesia">Emily Dickinson</div>
            </div>
          </div>

          <div className="separador">***</div>

          <div className="container-encabezado-poesia">
            <div className="container-titulo-poesia">
              <div className="texto-poesia">
                Todo está tan lleno de luz que encandila
                <br />
                todo está lleno de esperanza
                <br />
                todo está tan lleno de vida
                <br />
                en este pozo.
              </div>
              <div className="titulo-poesia">Mariano Blatt</div>
            </div>
          </div>

          <div className="separador">***</div>

          <div className="container-encabezado-poesia">
            <div className="container-titulo-poesia">
              <div className="texto-poesia">
                Si yo no ardo <br />
                si tú no ardes <br />
                si nosotrxs no ardemos, <br />
                ¿Cómo de las tinieblas <br />
                haremos claridad?
                <br />
              </div>
              <div className="titulo-poesia">Nazim Hikmet</div>
            </div>
          </div>

          <div className="separador">***</div>

          <div className="container-encabezado-poesia">
            <div className="container-titulo-poesia">
              <div className="texto-poesia">
                DESEAR <br />
                que siga existiendo el mundo para que siga existiendo <br />
                toda la belleza del mundo
                <br /> es una ingenuidad a la que no renunciamos.
              </div>
              <div className="titulo-poesia">Jorge Riechmann</div>
            </div>
          </div>

          <div className="separador">***</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SobreMi;
