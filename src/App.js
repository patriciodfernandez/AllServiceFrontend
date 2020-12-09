import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';

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
        <Route exact path="/contacto">
          <Contacto></Contacto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
