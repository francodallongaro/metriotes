import "./App.css";
import Navbar from "./components/navbar";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ComoEstas from "./components/comoestas";
import Inspiracion from "./components/inspiracion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <h1>home</h1>
      </Route>
      <Route path="/comoestas">
        <ComoEstas />
      </Route>
      <Route path="/inspiracion">
        <Inspiracion />
      </Route>
    </BrowserRouter>
  );
}

export default App;
