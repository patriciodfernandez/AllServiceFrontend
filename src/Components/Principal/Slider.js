import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";

const Slider = () => {
  return (
    <div id="iniciotop">
      <Carousel>
        <Carousel.Item>
          <img           />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Imagen 2" />
        </Carousel.Item>
      </Carousel>
      <div className=" grisoscurobg p-5">
          <h1 className="text-center verdetext letragorda mb-0 font-italic">35 AÑOS DE TRAYECTORIA NOS AVALAN</h1>
      </div>
    </div>
  );
};

export default Slider;
