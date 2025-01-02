import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  message: "",
  telefone: "",
  responder_wpp: "false",
};

export const Contact = (props) => {
  const [{ name, email, message, telefone, responder_wpp }, setState] =
    useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });

    // Optional: Reset the form inputs manually if needed
    const form = document.querySelector("form[name='sentMessage']");
    if (form) {
      form.reset();
    }
  };

  const sendemail = async (target) => {
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        target,
        process.env.REACT_APP_PUBLIC_KEY
      );
      console.log(result.text);
      clearState();
      return result.text; // Retorna o resultado para o toast
    } catch (error) {
      console.error(error.text);
      throw new Error(error.text); // Lança o erro para ser capturado no toast
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await toast.promise(sendemail(e.target), {
      loading: "Enviando...",
      success: <b>E-mail enviado com sucesso!</b>,
      error: (err) => <b>Erro ao enviar e-mail: {err.message}</b>,
    });
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Entre em contato</h2>
                <p>
                  Por gentileza, preencha o formulário abaixo e nos envie um
                  email. Responderemos o quanto antes.
                </p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome Completo"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="form-control"
                    placeholder="Telefone (XX) XXXXX-XXXX"
                    required
                    pattern="\(\d{2}\) \d{4,5}-\d{4}"
                    value={telefone}
                    onInput={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3")
                        .slice(0, 15);
                    }}
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="O que deseja nos dizer?"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <label style={{ fontSize: "15px" }}>
                    <input
                      type="checkbox"
                      id="responder_wpp"
                      name="responder_wpp"
                      checked={responder_wpp === "Reponder via whatsapp"}
                      onChange={(e) =>
                        setState((prevState) => ({
                          ...prevState,
                          responder_wpp: e.target.checked
                            ? "Reponder via whatsapp"
                            : "Não responder via whatsapp",
                        }))
                      }
                    />
                    Desejo ser respondido pelo WhatsApp
                  </label>
                </div>
                <br />
                <div className="form-group">
                  <label style={{ fontSize: "15px" }}>
                    <input
                      type="checkbox"
                      id="lgpdConsent"
                      name="lgpdConsent"
                      value="accepted"
                      required
                      onChange={(e) =>
                        handleChange({
                          target: {
                            name: "lgpdConsent",
                            value: e.target.checked,
                          },
                        })
                      }
                    />
                    Aceito os termos da LGPD
                  </label>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informações de contato</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Endereço
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> E-mail
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>© 2024 Time ABC, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
