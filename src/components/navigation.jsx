import React from "react";

export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              padding: "0px",
            }}
          >
            <img
              src="/img/ercom_logo.jpeg"
              alt="Logo"
              style={{ width: "inherit", height: "inherit" }}
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#about"
                className="page-scroll"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
              >
                Como trabajamos
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="page-scroll"
              >
                Nuestros desarrollos
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
              >
                Tecnologías
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
              >
                Modalidades
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="page-scroll"
              >
                Galleria
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
