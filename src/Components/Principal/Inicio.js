import React from "react";
import Slider from "./Slider";
import QuienesSomos from "./QuienesSomos";
import NuestrosServicios from "./NuestrosServicios";
import ProductosQReparamos from "./ProductosQReparamos";
import Historia from "./Historia";
import Marcas from "./Marcas";

const Inicio = () => {
  return (
    <div>
      <Slider></Slider>
      <ProductosQReparamos></ProductosQReparamos>
      <Marcas></Marcas>
      <NuestrosServicios></NuestrosServicios>
      <QuienesSomos></QuienesSomos>
      <Historia></Historia>
      
    </div>
  );
};

export default Inicio;
