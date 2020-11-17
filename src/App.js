import './App.css';

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
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
