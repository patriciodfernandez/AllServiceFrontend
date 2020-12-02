import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="container">
      <div className="row m-4 bg-secondary">
        <div className="col-sm-12 col-md-5 fondoContacto" ></div>
        <div className="col-sm-12 col-md-7 ">
          <main class="container py-4 ">
            <div class="row boxshadow p-5 ">
              <section class="p-4">
                <div class="p-4 ">
                  <h1>Contáctame</h1>
                </div>
                <div>
                  <form onsubmit="validarGeneral(event)">
                    <div class="form-group">
                      <label>
                        <h4>Tu nombre:</h4>
                      </label>
                      <input type="text" class="form-control" placeholder="Juan asd" id="nombre"
                        onblur="requerido(this)" onkeyup="requerido(this)" />
                      <div class="valid-feedback">
                        Perfecto, continuar.
                                </div>
                      <div class="invalid-feedback">
                        Ingresa tu nombre por favor.
                                </div>
                    </div>
                    <div class="form-group ">
                      <label>
                        <h4>Tu e-mail:</h4>
                      </label>
                      <input type="text" class="form-control" placeholder="juanasd@gmail.com" id="email"
                        onblur="revisarEmail(this)" onkeyup="revisarEmail(this)" />
                      <div class="valid-feedback">
                        Perfecto, continuar.
                                </div>
                      <div class="invalid-feedback">
                        Ingrese un email válido por favor
                                </div>
                    </div>
                    <div class="form-group ">
                      <label>
                        <h4>Tu telefono:</h4>
                      </label>
                      <input type="text" class="form-control" placeholder="0303456" id="telefono"
                        onblur="revisarNumeros(this)" onkeyup="revisarNumeros(this)" />
                      <div class="valid-feedback">
                        Perfecto, continuar.
                                </div>
                      <div class="invalid-feedback">
                        Solo debe ingresar números.
                                </div>
                    </div>
                    <div class="form-group ">
                      <label>
                        <h4>Consultame:</h4>
                      </label>
                      <textarea class="form-control" type="text" id="consulta"
                        placeholder="Ingresa tu consulta o comentario"
                        onblur="revisarConsulta(this)"></textarea>
                      <div class="valid-feedback">

                      </div>
                      <div class="invalid-feedback">
                        Por favor ingrese una consulta
                                </div>
                    </div>
                    <div class="form-group ">
                      <div class="form-check  ">
                        <input class="form-check-input" type="checkbox" id="terminos" />
                        <label class="form-check-label">
                          <h5>¿Esta de acuerdo en recibir un correo de mi parte?</h5>
                        </label>
                        <div class="valid-feedback">
                        </div>
                        <div class="invalid-feedback">

                        </div>
                      </div>
                    </div>
                    <button class="btn fondo " id="btnEnviar" type="submit"> <b> Enviar</b></button>
                    <div class="alert fondo m-4 d-none" id="msjEnvio" role="alert">
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