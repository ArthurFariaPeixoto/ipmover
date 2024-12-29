import React, { useEffect } from "react";
import { HeaderSecondary } from "./headerSecondary";

export const Header = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
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
                <div id="about">
                  <div className="about-text">
                    <h2>Organização e Administração</h2>
                    <p>
                      {props.data
                        ? props.data.HeaderSecondary.paragraph
                        : "loading..."}
                    </p>
                    <ul>
                      {props.data
                        ? props.data.HeaderSecondary.Structure.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                    <h3>Porque nos escolher?</h3>
                    <div className="list-style">
                      <div className="col-lg-6 col-sm-6 col-xs-12">
                        <ul>
                          {props.data
                            ? props.data.HeaderSecondary.Why.map((d, i) => (
                                <li key={`${d}-${i}`}>{d}</li>
                              ))
                            : "loading"}
                        </ul>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-xs-12">
                        <ul>
                          {props.data
                            ? props.data.HeaderSecondary.Why2.map((d, i) => (
                                <li key={`${d}-${i}`}> {d}</li>
                              ))
                            : "loading"}
                        </ul>
                      </div>
                    </div>
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
};
