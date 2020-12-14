import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Alert from "react-bootstrap/Alert";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

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
      <div className="col-lg-6 p-5 text-center nosm noxs nomd container p-5">
        <h5 className="mb-3">
          <FontAwesomeIcon
            className="mr-2"
            icon={faPhoneAlt}
            color="#282828"
            size="1x"
          />
          4239995 - 4233773
        </h5>
        <a
          href="https://wa.me/5493815231792"
          target="_blank"
          rel="noopener noreferrer"
          className="letrasfooter text-dark"
        >
          <h5 className="mb-3">
            <FontAwesomeIcon
              className="mr-2"
              icon={faWhatsapp}
              color="#282828"
              size="1x"
            />
            3815231792 (Service)
          </h5>
        </a>
        <a
          href="https://wa.me/5493816812468"
          target="_blank"
          rel="noopener noreferrer"
          className="letrasfooter text-dark"
        >
          <h5 className="mb-3">
            <FontAwesomeIcon
              className="mr-2"
              icon={faWhatsapp}
              color="#282828"
              size="1x"
            />
            3816812468 (Repuestos)
          </h5>
        </a>
        <a
          href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          <h5 className="mb-3">
            <FontAwesomeIcon
              className="mr-2"
              icon={faMapMarkerAlt}
              color="#282828"
              size="1x"
            />
            Corrientes 2514 - San Miguel de Tucumán
          </h5>
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7121.3296679872765!2d-65.23206769931612!3d-26.81879873867179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94225c59e8cf6725%3A0xd0ba3b86aeabd2d4!2sall%20service%20tucuman!3m2!1d-26.816794299999998!2d-65.2334578!5e0!3m2!1ses!2sar!4v1607548696091!5m2!1ses!2sar"
          width="400"
          height="300"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div className="col-sm-12 col-lg-6 container p-5">
        <h3 className="mb-3">
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            className="mr-1"
            size="1x"
          ></FontAwesomeIcon>{" "}
          Envíanos tu consulta
        </h3>
        {error ? (
          <Alert variant={"warning"}>
            Todos los campos son obligatorios, por favor asegúrese de ingresar
            datos válidos
          </Alert>
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
          <Form.Group controlId="direccion"></Form.Group>
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
            <Form.Label>Escribe tu consulta aquí</Form.Label>
            <Form.Control required as="textarea" rows={4} />
          </Form.Group>
          <Form.Text className="text-muted">
            No compartiremos estos datos con nadie
          </Form.Text>
          <div className="text-right">
            <Button
              variant="verdebg"
              id="botonverde"
              type="Submit"
              className="ml-auto text-dark mt-2"
            >
              Enviar
            </Button>
          </div>
        </Form>
      </div>
      <div className="col-lg-6 p-5 text-center nolg noxl container p-5">
        <h5 className="mb-3">
          <FontAwesomeIcon
            className="mr-2"
            icon={faPhoneAlt}
            color="#282828"
            size="1x"
          />
          4239995 - 4233773
        </h5>
        <a
          href="https://wa.me/5493815231792"
          target="_blank"
          rel="noopener noreferrer"
          className="letrasfooter text-dark"
        >
          <h5 className="mb-3">
            <FontAwesomeIcon
              className="mr-2"
              icon={faWhatsapp}
              color="#282828"
              size="1x"
            />
            3815231792 (Service)
          </h5>
        </a>
        <a
          href="https://wa.me/5493816812468"
          target="_blank"
          rel="noopener noreferrer"
          className="letrasfooter text-dark"
        >
          <h5 className="mb-3">
            <FontAwesomeIcon
              className="mr-2"
              icon={faWhatsapp}
              color="#282828"
              size="1x"
            />
            3816812468 (Repuestos)
          </h5>
        </a>
        <a
          href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          <h5 className="mb-3">
            <FontAwesomeIcon
              className="mr-2"
              icon={faMapMarkerAlt}
              color="#282828"
              size="1x"
            />
            Corrientes 2514 - San Miguel de Tucumán
          </h5>
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7121.3296679872765!2d-65.23206769931612!3d-26.81879873867179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94225c59e8cf6725%3A0xd0ba3b86aeabd2d4!2sall%20service%20tucuman!3m2!1d-26.816794299999998!2d-65.2334578!5e0!3m2!1ses!2sar!4v1607548696091!5m2!1ses!2sar"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
