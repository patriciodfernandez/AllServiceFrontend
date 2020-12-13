import React from "react";
import logob from "../../assets/logo-allservice-blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="row no-gutters container px-5 pt-5">
        <div className="col-sm-12 col-md-4 mb-4 text-center">
          <Nav.Link exact={true} href="/#inicio">
            <img src={logob} alt="logo del Footer" width="100px"></img>
          </Nav.Link>
        </div>
        <div className="col-sm-12 col-md-4 mb-4 mt-1">
          <div className="noxs nosm text-left">
          <Nav.Link
                exact={true}
                href="/#inicio"
                className="nav-link text-light mb-1 p-0"
              >
                INICIO
              </Nav.Link>
            <Nav.Link
                exact={true}
                href="/#servicios"
                className="nav-link text-light mb-1 p-0"
              >
                SERVICIOS
              </Nav.Link>
            <Nav.Link
                exact={true}
                href="/#productosqreparamos"
                className="nav-link text-light mb-1 p-0"
              >
                PRODUCTOS QUE REPARAMOS
              </Nav.Link>
            <Nav.Link
                exact={true}
                href="/contacto"
                className="nav-link text-light mb-1 p-0"
              >
                CONTACTO
              </Nav.Link>
          </div>
          <a
            href="https://www.facebook.com/allservicetucuman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faFacebookSquare}
              color="#fff"
              size="2x"
            />
          </a>
          <a
            href="https://www.instagram.com/allservicetucuman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className=""
              icon={faInstagram}
              color="#fff"
              size="2x"
            />
          </a>
        </div>
        <div className="col-sm-12 col-md-4 text-light mb-4">
          <a
            href="https://www.google.com/maps/dir//All+Service,+Pcia+de+Corrientes+2514,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.818799,-65.232068,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94225c59e8cf6725:0xd0ba3b86aeabd2d4!2m2!1d-65.2334578!2d-26.8167943!3e0?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="letrasfooter text-light"
          >
            <p>
              <FontAwesomeIcon
                className="mr-2"
                icon={faMapMarkerAlt}
                color="#fff"
                size="1x"
              />
              Corrientes 2514 - San Miguel de Tucumán
            </p>
          </a>

          <p>
            <FontAwesomeIcon
              className="mr-2"
              icon={faPhoneAlt}
              color="#fff"
              size="1x"
            />
            4239995 - 4233773{" "}
          </p>
          <a
            href="https://wa.me/5493815231792"
            target="_blank"
            rel="noopener noreferrer"
            className="letrasfooter text-light"
          ><p>
            <FontAwesomeIcon
              className="mr-2"
              icon={faWhatsapp}
              color="#fff"
              size="1x"
            />
            3815231792 (Service)
          </p></a>
          <a
            href="https://wa.me/5493816812468"
            target="_blank"
            rel="noopener noreferrer"
            className="letrasfooter text-light"
          >
            <p>
              <FontAwesomeIcon
                className="mr-2"
                icon={faWhatsapp}
                color="#fff"
                size="1x"
              />
              3816812468 (Repuestos)
            </p>
          </a>
          <Nav.Link
                exact={true}
                href="/contacto/#contactotop"
                className="nav-link text-light m-0 p-0"
              >
                <p>
            <FontAwesomeIcon
              className="mr-2"
              icon={faEnvelope}
              color="#fff"
              size="1x"
            />
            allservicetuc@gmail.com
          </p>
              </Nav.Link>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
