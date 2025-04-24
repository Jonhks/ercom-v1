import React from "react";

export const Services = (props) => {
  return (
    <div
      id="services"
      className="text-center"
    >
      <div className="container">
        <div className="section-title">
          <h2>Como trabajamos</h2>
        </div>
        <div
          className="row"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 col-sm-6 col-xs-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: "center",
                    // marginBottom: "20px",
                  }}
                >
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
