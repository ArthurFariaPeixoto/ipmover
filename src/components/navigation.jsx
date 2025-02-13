import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
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
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              alt="Logo Institucional Instituto Pró Mover"
              src="img/logo3.PNG"
              style={{
                mixBlendMode: "darken",
                display: "inline",
                width: "40px",
              }}
            />{" "}
            Instituto Pró-Mover
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                O instituto
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Nossa Equipe
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Governança
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Atuação
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
