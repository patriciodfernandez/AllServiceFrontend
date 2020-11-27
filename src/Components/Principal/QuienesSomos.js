import React from "react";
import quienessomos from "../../assets/images/quienes-somos.jpg";

const QuienesSomos = () => {
  return (
    <div className="row">
      <div className="col-md-5 col-sm-12 p-0">
        <img className="w-100 h-100" src={quienessomos} alt="quienes somos" />
      </div>
      <div className="col-md-7 col-sm-12 grisclarobg px-0">
        <div className="container text-left pl-4 pr-5 py-4">
          <h1 className="verdetext letragorda pt-4 pl-4 pb-3">QUIENES SOMOS</h1>
          <h5 className="text-left text-light pl-4 pr-5">
            Somos una empresa dedicada a la reparación de artefactos a gas y
            eléctricos, como así también a la venta de repuestos originales.
            Brindamos asistencia técnica a marcas de primer nivel como LONGVIE,
            ARISTON, ORBIS, VOLCAN, MORELLI, entre otras. 35 años de trayectoria
            nos avalan.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
