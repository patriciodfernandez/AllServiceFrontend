import './App.css';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./Components/Principal/Inicio";
import Historia from "./Components/Principal/Historia";
import Marcas from "./Components/Principal/Marcas";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import NuestrosServicios from "./Components/Principal/NuestrosServicios";
import ProductosQReparamos from "./Components/Principal/ProductosQReparamos";
import QuienesSomos from "./Components/Principal/QuienesSomos";
import Slider from "./Components/Principal/Slider";
import Contacto from "./Components/Contacto";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/slider">
          <Slider></Slider>
        </Route>
        <Route exact path="/quienessomos">
          <QuienesSomos></QuienesSomos>
        </Route>
        <Route exact path="/nuestrosservicios">
          <NuestrosServicios></NuestrosServicios>
        </Route>
        <Route exact path="/productosquereparamos">
          <ProductosQReparamos></ProductosQReparamos>
        </Route>
        <Route exact path="/historia">
          <Historia></Historia>
        </Route>
        <Route exact path="/marca">
          <Marcas></Marcas>
        </Route>
        <Route exact path="/contacto">
          <Contacto></Contacto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
