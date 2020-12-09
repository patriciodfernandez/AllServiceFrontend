import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import Alert from "react-bootstrap/Alert";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import contacto from "../assets/Contacto.jpg";


const Contacto = () => {
  const [validated, setValidated] = useState(false);
  const [nombreConsultor, setNombreConsultor] = useState("");
  const [telefonoConsultor, setTelefonoConsultor] = useState("");
  const [emailConsultor, setEmailConsultor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    //Validacion de los campos requeridos
    if (form.checkValidity() === false) {
      setError(true);
      setValidated(true);
      e.stopPropagation();
      return;
    } else {
      setError(false);
      setValidated(true);
      //Guardamos los datos en un objeto
      const suscriptor = {
        nombreConsultor: nombreConsultor,
        telefonoConsultor: telefonoConsultor,
        emailConsultor: emailConsultor,
      };
      //Enviamos los datos a backend - NO IMPLEMENTADO
      emailjs
        .sendForm(
          "allservice",
          "template_MeHMf7Af",
          e.target,
          "user_nywctwSrox7g34oEeJ7uY"
        )
        .then(
          (result) => {
            Swal.fire(
              "Enhorabuena!",
              "Tu consulta fue enviada correctamente.",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "Ups!",
              "Hubo un problema al enviar tu consulta. Por favor intentalo nuevamente.",
              "error"
            );
          }
        );
      return suscriptor;
    }
  };

  return (
    <div className="row no-gutters">
      <div className="col-lg-6 p-5 nosm noxs nomd">
        <img className=" w-100" src={contacto} alt="Imagen 1"></img>
      </div>
      <div className="col-sm-12 col-lg-6 container p-5">
        <h3 className="mb-3"><FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="mr-1"
                size="1x"
              ></FontAwesomeIcon> Envíanos tu consulta</h3>
        {error ? (
          <Alert variant={"warning"}>Todos los campos son obligatorios, por favor asegúrese de ingresar datos válidos</Alert>
        ) : null}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="fullName">
            <Form.Label>Apellido y Nombre</Form.Label>
            <Form.Control
              required
              onChange={(e) => setNombreConsultor(e.target.value)}
              type="text"
              placeholder="Ejemplo: Perez Nahuel"
              name="user_name"
            />
          </Form.Group>
          <Form.Group controlId="direccion">
          </Form.Group>
          <Form.Group controlId="telefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              required
              onChange={(e) => setTelefonoConsultor(e.target.value)}
              type="number"
              placeholder="Ejemplo: 3816150013"
            />
          </Form.Group>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              onChange={(e) => setEmailConsultor(e.target.value)}
              type="email"
              placeholder="Ejemplo: rollingnews@gmail.com"
              name="user_email"
            />
          </Form.Group>
          
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control required as="textarea" rows={3} />
          </Form.Group><Form.Text className="text-muted">
            No compartiremos estos datos con nadie
          </Form.Text>
          <div className="text-right">
            <Button variant="verdebg" id="botonverde" type="Submit" className="ml-auto text-dark">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contacto;
