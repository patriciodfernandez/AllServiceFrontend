import React from "react";
import logob from "../../assets/logo-allservice-blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="row no-gutters container px-5 pt-5">
        <div className="col-sm-12 col-md-4 mb-4 text-center">
          <Link exact={true} to="/">
            <img src={logob} alt="logo del Footer" width="100px"></img>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 mb-4 mt-1">
           <div className="noxs nosm text-left"> <Link className="text-light">INICIO</Link><br></br>
            <Link className="text-light">SERVICIOS</Link><br></br>
            <Link className="text-light">MARCAS QUE REPARAMOS</Link><br></br>
            <Link className="text-light">CONTACTO</Link><br></br>
            </div>
            <a
                href="https://www.facebook.com"
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
                href="https://www.instagram.com/"
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
        <p><FontAwesomeIcon
                  className="mr-2"
                  icon={faMapMarkerAlt}
                  color="#fff"
                  size="1x"
                />Corrientes 2514 - San Miguel de Tucumán</p>
            <p><FontAwesomeIcon
                  className="mr-2"
                  icon={faPhoneAlt}
                  color="#fff"
                  size="1x"
                />4239995 - 4233733 </p>
            <p><FontAwesomeIcon
                  className="mr-2"
                  icon={faWhatsapp}
                  color="#fff"
                  size="1x"
                />3815231792 (Service)</p>
            <p><FontAwesomeIcon
                  className="mr-2"
                  icon={faWhatsapp}
                  color="#fff"
                  size="1x"
                />3816812468 (Repuestos)</p>
                <p><FontAwesomeIcon
                  className="mr-2"
                  icon={faEnvelope}
                  color="#fff"
                  size="1x"
                />allservicetuc@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
