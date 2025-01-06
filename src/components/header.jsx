import React, { useEffect } from "react";
import { HeaderSecondary } from "./headerSecondary";

export const Header = (props) => (
  <header id="header">
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <div id="header2">
                <div className="about-text">
                  <h2 style={{ color: "white" }}>
                    Organização e Administração
                  </h2>
                  <p style={{ color: "white" }}>
                    {props.data
                      ? props.data.HeaderSecondary.paragraph
                      : "loading..."}
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul className="about-text-li">
                      {props.data
                        ? props.data.HeaderSecondary.Structure.map((d, i) => (
                            <li key={`${d}-${i}`} style={{ color: "white" }}>
                              {d}
                            </li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  {/* <h3 style={{ color: "white" }}>Porque nos escolher?</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul className="about-text-li">
                        {props.data
                          ? props.data.HeaderSecondary.Why.map((d, i) => (
                            <li
                              key={`${d}-${i}`}
                              style={{ color: "white" }}
                            >
                              {d}
                            </li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul className="about-text-li">
                        {props.data
                          ? props.data.HeaderSecondary.Why2.map((d, i) => (
                            <li
                              key={`${d}-${i}`}
                              style={{ color: "white" }}
                            >
                              {" "}
                              {d}
                            </li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <a
          href="#features"
          className="btn btn-custom btn-lg page-scroll"
        >
          Leia Mais
        </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
