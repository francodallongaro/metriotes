import "./App.css";
import Navbar from "./components/navbar";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ComoEstas from "./components/comoestas";
import Inspiracion from "./components/inspiracion";
import Metas from "./components/metas";
import MetasProvider from "./context/metasContext";

function App() {
  return (
    <MetasProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Metas />
          </Route>
          <Route path="/comoestas">
            <ComoEstas />
          </Route>
          <Route path="/inspiracion">
            <Inspiracion />
          </Route>
        </Switch>
      </BrowserRouter>
    </MetasProvider>
  );
}

export default App;
