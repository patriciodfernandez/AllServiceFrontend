import React from "react";
import cocina from "../../assets/images/productos/cocina.png";
import anafe from "../../assets/images/productos/anafe.png";
import horno from "../../assets/images/productos/horno.png";
import termotanques from "../../assets/images/productos/termotanques.png";
import calefactor from "../../assets/images/productos/calefactor.png";
import calefon from "../../assets/images/productos/calefon.png";
import lavarropas from "../../assets/images/productos/lavarropas.png";
import lavavajillas from "../../assets/images/productos/lavavajillas.png";

const ProductosQReparamos = () => {
  return (
    <div id="productosqreparamos">
      {/* TITULO */}
      <div className="mt-3 row no-gutters">
        <div className="col-md-3 container noxs nosm nomd">
          <hr></hr>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="font-weight-light text-center">
            PRODUCTOS QUE REPARAMOS
          </h1>
        </div>
        <div className="col-md-3 container noxs nosm nomd">
          <hr></hr>
        </div>
      </div>
      {/* FIN TITULO */}
      <div className="row no-gutters my-5">
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0">COCINAS A GAS Y ELÉCTRICAS</h5>
          <img className="w-100" src={cocina} alt="cocina" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0">ANAFES A GAS Y ELÉCTRICOS</h5>
          <img className="w-100" src={anafe} alt="anafe" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0">HORNOS A GAS Y ELÉCTRICOS</h5>
          <img className="w-100" src={horno} alt="horno" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0">TERMOTANQUES A GAS Y ELÉCTRICOS</h5>
          <img className="w-100" src={termotanques} alt="termotanques" />
        </div>
      </div>
      <div className="row no-gutters mb-5">
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0">CALEFACTORES A GAS Y ELÉCTRICOS</h5>
          <img className="w-100" src={calefactor} alt="calefactor" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0">CALEFONES</h5>
          <img className="w-100" src={calefon} alt="calefon" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0">LAVARROPAS</h5>
          <img className="w-100" src={lavarropas} alt="lavarropas" />
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="text-center px-3 m-0">LAVAVAJILLAS</h5>
          <img className="w-100" src={lavavajillas} alt="lavavajillas" />
        </div>
      </div>
    </div>
  );
};

export default ProductosQReparamos;
