import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./Components/Principal/Inicio";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Contacto from "./Components/Contacto";
import Whatsapp from "./Components/Common/Whatsapp"

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
      <Whatsapp></Whatsapp>
      <Footer></Footer>
    </Router>

  );
}

export default App;
