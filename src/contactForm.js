import React, { useState } from "react";
import Footer from "./footer";
import NavBar from "./navbar";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/014b69d0-5c97-11ed-b82c-5d75eaa7ccff"; // TODO - fill on the later step

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
      <NavBar />
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default ContactForm;
