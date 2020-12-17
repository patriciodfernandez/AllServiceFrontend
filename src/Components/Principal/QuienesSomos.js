import React from "react";
import quienessomos from "../../assets/images/quienes-somos.jpg";
import quienessomosmd from "../../assets/images/quienes-somos-md.jpg";

const QuienesSomos = () => {
  return (
    <div>
      {/* DIV PPAL */}
      <div className="fondonegro p-5">
          <h2 className="text-center verdetext letragorda mb-0 font-italic">35 AÑOS DE TRAYECTORIA NOS AVALAN</h2>
      </div>
      {/* DIV NORMAL */}
      <div className="nomd">
        <div className="row no-gutters">
          <div className="col-md-5 col-sm-12 p-0">
            <img
              className="w-100 h-100"
              src={quienessomos}
              alt="quienes somos"
            />
          </div>
          <div className="col-md-7 col-sm-12 grisclarobg px-0">
            <div className="container text-left pl-4 pr-5 py-4">
              <h1 className="verdetext letragorda pt-4 pl-4 pb-3">
                QUIENES SOMOS
              </h1>
              <h5 className="text-left text-light pl-4 pr-5">
                Somos una empresa dedicada a la reparación de artefactos a gas y
                eléctricos, como así también a la venta de repuestos originales.
                Brindamos asistencia técnica a marcas de primer nivel como
                LONGVIE, ARISTON, ORBIS, VOLCAN, MORELLI, entre otras. 35 años
                de trayectoria nos avalan.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* DIV PARA MD */}
      <div className=" noxs nosm nolg noxl">
        <div className="row no-gutters">
          <div className="col-md-5 col-sm-12 p-0">
            <img
              className="w-100 h-100"
              src={quienessomosmd}
              alt="quienes somos"
            />
          </div>
          <div className="col-md-7 col-sm-12 grisclarobg px-0">
            <div className="container text-left px-4 py-4">
              <h3 className="verdetext letragorda pt-2 pl-4 pb-3">
                QUIENES SOMOS
              </h3>
              <h5 className="text-left text-light px-4">
                Somos una empresa dedicada a la reparación de artefactos a gas y
                eléctricos, como así también a la venta de repuestos originales.
                Brindamos asistencia técnica a marcas de primer nivel como
                LONGVIE, ARISTON, ORBIS, VOLCAN, MORELLI, entre otras. 35 años
                de trayectoria nos avalan.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* DIV PPAL */}
    </div>
  );
};

export default QuienesSomos;
