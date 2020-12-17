import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import slider4 from "../../assets/images/slider-4.jpg";


const Slider = () => {
  return (
    <div id="inicio">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="Imagen 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Imagen 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="Imagen 4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
