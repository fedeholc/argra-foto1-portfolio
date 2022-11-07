import "./index.css";
import App from "./App";

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page.js";
import ContactForm from "./contactForm";
import Archivo from "./archivo";
import TrabajosPracticos from "./trabajosPracticos";
import Fotorreportaje from "./fotorreportaje";
import SobreMi from "./sobreMi";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "argra-foto1-portfolio/",
    element: <App />,
    errorElement: <ErrorPage />,
    /* loader: homeLoader, */
  },
  {
    path: "Archivo/",
    element: <Archivo />,
    errorElement: <ErrorPage />,
    /* loader: postLoader, */
  },
  {
    path: "Contacto/",
    element: <ContactForm />,
    errorElement: <ErrorPage />,
    /* loader: postLoader, */
  },
  {
    path: "Trabajos/",
    element: <TrabajosPracticos />,
    errorElement: <ErrorPage />,
    /* loader: postLoader, */
  },
  {
    path: "Fotorreportaje/",
    element: <Fotorreportaje />,
    errorElement: <ErrorPage />,
    /* loader: postLoader, */
  },
  {
    path: "SobreMi/",
    element: <SobreMi />,
    errorElement: <ErrorPage />,
    /* loader: postLoader, */
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
