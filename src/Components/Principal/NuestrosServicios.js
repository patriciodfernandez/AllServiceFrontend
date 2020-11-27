import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import reparaciones from "../../assets/images/reparaciones.jpg";
import repuestos from "../../assets/images/repuestos.jpg";
import restauraciones from "../../assets/images/restauraciones.jpg";

const NuestrosServicios = () => {
  return (
    <div>
      <div className="verdebg p-5">
        <h1 className="text-center grisoscurotext letragorda mb-0">
          NUESTROS SERVICIOS
        </h1>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 p-0 m-0">
          <img className="w-100 h-100" src={reparaciones} alt="reparaciones" />
        </div>
        <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
          <div className="container text-left pl-5 py-4">
            <h3 className="verdetext letragorda">REPARACIONES</h3>
            <ul className="list-unstyled text-light">
              <li>Cocinas a gas y eléctricas</li>
              <li>Anafes a gas y eléctricos</li>
              <li>Termotanques a gas y eléctricos</li>
              <li>Calefactores a gas y eléctricos</li>
              <li>Hornos a gas y eléctricos</li>
              <li>Calefones a gas</li>
              <li>Lavarropas, lavavajillas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
          <div className="container text-left pl-5 py-4">
            <h3 className="verdetext letragorda">RESTAURACIONES</h3>
            <ul className="list-unstyled text-light">
              <li>Mano de obra</li>
              <li>Retiro y entrega a domicilio</li>
              <li>Mas los siguientes repuestos:</li>
              <li>Conjunto de bisagras de aperturas</li>
              <li>Burlete perimetral</li>
              <li>Lana de vidrio</li>
              <li>Manta de vidrio</li>
              <li>Sistema de seguridad</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-0 m-0">
          <img
            className="w-100 h-100"
            src={restauraciones}
            alt="restauraciones"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 p-0 m-0">
          <img className="w-100 h-100" src={repuestos} alt="repuestos" />
        </div>
        <div className="col-sm-12 col-md-6 grisoscurobg p-0 m-0">
          <div className="container text-left pl-5 py-4">
            <h3 className="verdetext letragorda">REPUESTOS</h3>
            <ul className="list-unstyled text-light">
              <li>Repuestos originales</li>
              <li>Kit quemadores LONGVIE</li>
              <li>Kit quemadores ORBIS</li>
              <li>Kit quemadores VOLCÁN</li>
              <li>Kit quemadores DOMEC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrosServicios;
