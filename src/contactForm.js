import React, { useState } from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import "./contactForm.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/014b69d0-5c97-11ed-b82c-5d75eaa7ccff"; // TODO - fill on the later step

const M1 = "holc@";
const M = "federico." + M1 + "gmail.com";
const MT = "mailto:" + M;
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <NavBar />
        <h2>Gracias, te responderé a la brevedad.</h2>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="wrap-all-component">
        <NavBar />
        <div className="div-flex-centrado wrap-center">
          <div id="form-wrapper">
            <div id="form-mensaje">
              Hola,
              <br /> Mandame un mail a <a href={MT}>{M}</a>
              .<br /> O escribime por acá:
            </div>

            <form
              id="formulario-contacto"
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target="_blank"
            >
              <div>
                <label>
                  Nombre:
                  <input type="text" name="name" required />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
              </div>
              <div className="div-flex-centrado">
                <label>
                  Mensaje:{" "}
                  <textarea rows={5} cols={30} name="message" required />
                </label>
              </div>
              <div className="div-flex-centrado">
                <button id="form-button" type="submit">
                  {" "}
                  Enviar{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="prefooter"></div>
        <Footer />
      </div>
    </>
  );
};

export default ContactForm;
