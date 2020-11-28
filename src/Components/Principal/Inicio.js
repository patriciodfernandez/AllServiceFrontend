import React from 'react';
import Slider from "./Slider";
import QuienesSomos from "./QuienesSomos";
import NuestrosServicios from "./NuestrosServicios";
import ProductosQReparamos from './ProductosQReparamos';
import Historia from './Historia';
import Marcas from './Marcas';


const Inicio = () => {
    return (
        <div>
           <Slider></Slider>
           <QuienesSomos></QuienesSomos> 
           <NuestrosServicios></NuestrosServicios>
           <ProductosQReparamos></ProductosQReparamos>
           <Historia></Historia>
           <Marcas></Marcas>
        </div>
    );
};

export default Inicio;