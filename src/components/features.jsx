import React from "react";

export const Features = (props) => {
  console.log(props);

  return (
    <div
      id="features"
      className="text-center"
    >
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Nuestros desarrollos</h2>
        </div>
        <div
          className="row"
          style={{ marginBottom: "20px", borderBottom: "1px solid #ddd" }}
        >
          {props.data
            ? props?.data?.data?.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`col-xs-${
                    i === props.data.data.length - 1 ? "12" : "6"
                  }
                   col-md-4`}
                >
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        <div
          className="row"
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <h3>Aplicaciones De Desarrollos</h3>
            <i className="fa fa-comments-o"></i>
          </div>

          <div
            className="col-lg-4 col-sm-4 col-xs-6"
            style={{ textAlign: "justify" }}
          >
            <ul>
              {props?.data
                ? props?.data?.Why2.map((d, i) => (
                    <li
                      className="li-list"
                      key={`${d}-${i}`}
                    >
                      {d}
                    </li>
                  ))
                : "loading"}
            </ul>
          </div>
          <div
            className="col-lg-4 col-sm-4 col-xs-6"
            style={{ textAlign: "justify" }}
          >
            <ul>
              {props.data
                ? props.data.Why3.map((d, i) => (
                    <li
                      className="li-list"
                      key={`${d}-${i}`}
                    >
                      {d}
                    </li>
                  ))
                : "loading"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
