import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-allservice.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div>
      <Navbar className="verdebg p-2 navverde">
        <div className="container">
          <p className="text-light my-auto">
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
                size="2x"
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
                size="2x"
              />
            </a>
          </div>
        </div>
      </Navbar>
      <Navbar bg="dark" expand="lg">
        <div className="container py-1">
          <NavLink exact={true} to="/">
            <img src={logo} alt="logo del NavBar" width="70px"></img>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink
                exact={true}
                to={`/`}
                className="text-light nav-link"
              ></NavLink>
              <Nav.Link exact={true} to={`/`} className="text-light">
                INICIO
              </Nav.Link>
              <Nav.Link
                exact={true}
                to={"/nuestrosservicios"}
                className="text-light"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                exact={true}
                to={"/productosquereparamos"}
                className="text-light"
              >
                PRODUCTOS QUE REPARAMOS
              </Nav.Link>
              <Nav.Link to={"/contacto"} className="text-light">
                CONTACTO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
