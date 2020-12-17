import React from "react";
import Carousel from "react-bootstrap/Carousel";
import volcan from "../../assets/images/marcas/volcan.png";
import longvie from "../../assets/images/marcas/longvie.png";
import ariston from "../../assets/images/marcas/ariston.png";
import orbis from "../../assets/images/marcas/orbis.png";
import depaolo from "../../assets/images/marcas/depaolo.png";
import midea from "../../assets/images/marcas/midea.png";
import morelli from "../../assets/images/marcas/morelli.png";
import usman from "../../assets/images/marcas/usman.png";

const Marcas = () => {
  return (
    <div>
      <div className="mt-5 pt-3 row no-gutters">
        <div className="col-md-3 px-4 nomd">
          <hr></hr>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="font-weight-light text-center">
            MARCAS QUE REPARAMOS
          </h1>
        </div>
        <div className="col-md-3 px-4 nomd">
          <hr></hr>
        </div>
      </div>
      {/* FIN TITULO */}
      <div className="nosm noxs">
        <div className="row no-gutters">
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={volcan} alt="volcan" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={longvie} alt="longvie" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={ariston} alt="ariston" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={orbis} alt="orbis" />
          </div>
        </div>
        <div className="row no-gutters mb-5">
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={depaolo} alt="depaolo" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={midea} alt="midea" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={morelli} alt="morelli" />
          </div>
          <div className="col-sm-12 col-md-3 px-5">
            <img className="w-100" src={usman} alt="usman" />
          </div>
        </div>
      </div>
      {/* SLIDER SM */}
      <div className="nomd nolg noxl px-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={volcan} alt="volcan" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={longvie} alt="longvie" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ariston} alt="ariston" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={orbis} alt="orbis" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={depaolo} alt="depaolo" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={midea} alt="midea" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={morelli} alt="morelli" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={usman} alt="usman" />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
};

export default Marcas;
