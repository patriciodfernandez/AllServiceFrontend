import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const Contacto = () => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    consulta: false,
    agreed: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consulta, setConsulta] = useState("");
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if(agreed){
      setErrors((errors) => ({
        ...errors,
        agreed: false,
      }));
    }else{
      setErrors((errors) => ({
        ...errors,
        agreed: true,
      }));
    }
  },[agreed]);

  const requerido = (event) => {
    if (event.target.value !== "") {
      setErrors((errors) => ({
        ...errors,
        [event.target.name]: false,
      }));
    } else {
      setErrors((errors) => ({
        ...errors,
        [event.target.name]: true,
      }));
    }
  };

  const numerosOnly = (event) => {
    if (!isNaN(event.target.value) && event.target.value !== "") {
      setErrors((errors) => ({
        ...errors,
        [event.target.name]: false,
      }));
    } else {
      setErrors((errors) => ({
        ...errors,
        [event.target.name]: true,
      }));
    }
  };

  const emailOnly = (event) =>{
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(event.target.value)&& event.target.value !== ""){
      setErrors((errors) => ({
        ...errors,
        [event.target.name]: false,
      }));
    }else{
      setErrors((errors) => ({
        ...errors,
        [event.target.name]: true,
      }));
    }

  }

  const handleCheck = () =>{
    setAgreed(agreed => !agreed);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container-fluid">
      <div className="row bg-secondary">
        <div className="col-sm-12 col-md-5 fondoContacto"></div>
        <div className="col-sm-12 col-md-7 ">
          <main class="py-4 ">
            <div class="row boxshadow p-5 ">
              <section class="p-4">
                <div class="p-4">
                  <h1>Contáctanos</h1>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label>
                        <h4>Tu nombre:</h4>
                      </label>
                      <input
                        value={name}
                        name="name"
                        type="text"
                        class="form-control"
                        placeholder="Juan Pedro Sanchez"
                        id="nombre"
                        onBlur={(event) => requerido(event)}
                        onChange={(event) => setName(event.target.value)}
                      />
                      {errors && errors.name ? (
                        <div class="small text-light">
                          Ingresa tu nombre por favor.
                        </div>
                      ) : null}
                    </div>
                    <div class="form-group ">
                      <label>
                        <h4>Tu e-mail:</h4>
                      </label>
                      <input
                        value={email}
                        name="email"
                        type="text"
                        class="form-control"
                        placeholder="juanasd@gmail.com"
                        id="email"
                        onBlur={(event) => emailOnly(event)}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      {errors && errors.email ? (
                        <div class="small text-light">
                        Ingrese un email válido por favor.
                        </div>
                      ) : null}
                    </div>
                    <div class="form-group ">
                      <label>
                        <h4>Tu telefono:</h4>
                      </label>
                      <input
                        value={phone}
                        name="phone"
                        type="number"
                        class="form-control"
                        placeholder="0303456"
                        id="telefono"
                        onBlur={(event) => numerosOnly(event)}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                      {errors && errors.phone ? (
                        <div class="small text-light">
                          Por favor ingrese un numero valido. Solo puede ingresar numeros.
                        </div>
                      ) : null}
                    </div>
                    <div class="form-group ">
                      <label>
                        <h4>Tu consulta:</h4>
                      </label>
                      <textarea
                        value={consulta}
                        name="consulta"
                        class="form-control"
                        type="text"
                        id="consulta"
                        placeholder="Ingresa tu consulta o comentario"
                        onBlur={(event) => requerido(event)}
                        onChange={(event) => setConsulta(event.target.value)}
                      ></textarea>
                      {errors && errors.consulta ? (
                        <div class="small text-light">
                          Por favor ingrese una consulta
                        </div>
                      ) : null}
                    </div>
                    <div class="form-group ">
                      <div class="form-check  ">
                        <input
                          class="form-check-input"
                          name="agreed"
                          type="checkbox"
                          id="terminos"
                          checked={agreed}
                          onChange={handleCheck}
                        />
                        <label class="form-check-label">
                          <h5>
                            ¿Esta de acuerdo en recibir un correo de nuestra
                            parte?
                          </h5>
                        </label>
                      </div>
                      {errors && errors.agreed ? (
                        <div class="small text-light">
                        Acepte recibir un correo con la respuesta
                        </div>
                      ) : null}
                    </div>
                    <button class="btn fondo " id="btnEnviar" type="submit">
                      {" "}
                      <b> Enviar</b>
                    </button>
                    <div
                      class="alert fondo m-4 d-none"
                      id="msjEnvio"
                      role="alert"
                    >
                      El correo se envió correctamente
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
