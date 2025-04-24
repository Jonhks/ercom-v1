import React from "react";

export const Testimonials = (props) => {
  console.log(props);

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Modalidades de colaboración</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>
                Desarrollo en Sitio: <span>INPLANTS</span>
              </h3>
              <p>
                Implementación de requerimientos o proyectos específicos en
                cualquiera de sus etapas.
              </p>
              <p>Recursos inplant en la operación del cliente.</p>
              <p>
                Participación de Ingenieros en Sistemas, Informática, Telemática
                o relacionados:
              </p>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>
                Desarrollo Remoto: <span>PROYECTOS</span>
              </h3>
              <p>
                Implementación de requerimientos o proyectos específicos en
                cualquiera de sus etapas.
              </p>
              <p>Contacto remoto + visitas periódicas a instalaciones.</p>
              <p>
                Consultoria para definición, validación, desarrollo y entrega de
                requerimientos.
              </p>
              <p>
                Participación de Arquitectos de Software para el diseño de la
                soución
              </p>
              <p>Desarrollo de software bajo metodologias ágiles.</p>
              <p>Esquemas de desarrollo continuo, soporte y mantenimiento.</p>
              {/* <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
