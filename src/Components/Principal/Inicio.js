import React from 'react';
import Slider from "./Slider";
import QuienesSomos from "./QuienesSomos";
import NuestrosServicios from "./NuestrosServicios";

const Inicio = () => {
    return (
        <div>
           <Slider></Slider>
           <QuienesSomos></QuienesSomos> 
           <NuestrosServicios></NuestrosServicios>
        </div>
    );
};

export default Inicio;