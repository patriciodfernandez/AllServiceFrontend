import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo-allservice.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="sticky-top">
      {/* NAV VERDE */}
      <div className="noxs nosm nomd">
        <Navbar className="verdebg p-1 navverde">
          <div className="container">
            <p className="text-light my-auto tamanio">
              Corrientes 2514, - San Miguel de Tucumán | 4239995 - 4233733 |
              3815231792 (Service) | 3816812468 (Repuestos)
            </p>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-3"
                  icon={faFacebook}
                  color="#fff"
                  size="1x"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mx-3"
                  icon={faInstagram}
                  color="#fff"
                  size="1x"
                />
              </a>
            </div>
          </div>
        </Navbar>
      </div>
      {/* NAV OSCURO */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <div className="container py-1">
          <Nav.Link exact={true} href="/#iniciotop">
            <img src={logo} alt="logo del NavBar" width="70px"></img>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link exact={true} href="/#iniciotop" className="nav-link text-light">
                INICIO
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/#servicios"
                className="nav-link text-light">
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                exact={true}
                href="/#productosqreparamos"
                className="nav-link text-light">
                PRODUCTOS QUE REPARAMOS
              </Nav.Link>
              <Nav.Link exact={true} href="/contacto/#iniciotop" className="nav-link text-light">
                CONTACTO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
