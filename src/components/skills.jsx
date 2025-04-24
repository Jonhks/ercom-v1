import { Image } from "./image";
import React from "react";

export const Skills = (props) => {
  return (
    <div
      id="portfolio"
      className="text-center"
    >
      <div className="container">
        <div className="section-title">
          <h2>Tecnologías</h2>
        </div>
        <div className="row">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h3>Tecnologías Front End y Back End</h3>
            </div>
            <div className="col-xs-12 col-md-6">
              <h3>Middleware</h3>
            </div>
          </div>

          <div className="col-xs-12 col-md-4">
            <h4>Lenguajes</h4>
            <div className="list-style">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.lenguajes.map((d, i) => (
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
          <div className="col-xs-12 col-md-4">
            <h4>Base de datos</h4>
            <div className="list-style">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.bdd.map((d, i) => (
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
          <div className="col-xs-12 col-md-4">
            <h4>Amazon Web Services</h4>
            <div className="list-style">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.aws.map((d, i) => (
                        <li
                          className="li-list"
                          key={`${d}-${i}`}
                        >
                          {d}
                        </li>
                      ))
                    : "loading"}
                </ul>
                <h4>Servidores Web</h4>
                <ul>
                  {props.data
                    ? props.data.servidores.map((d, i) => (
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
          <div className="row">
            <div
              className="col-xs-12 col-md-12"
              style={{ borderTop: "1px solid #ddd" }}
            >
              <h4>Sistemas Operativos</h4>
              <ul>
                {props.data
                  ? props.data.ISOs.map((d, i) => (
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
    </div>
  );
};
