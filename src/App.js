import "./App.css";
import Navbar from "./components/navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComoEstas from "./components/comoestas";
import Inspiracion from "./components/inspiracion";
import Metas from "./components/metas";
import MetasProvider from "./context/metasContext";
import ComoEstasProvider from "./context/como-estas-context";
import QuotesProvider from "./context/quotes-context";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MetasProvider>
            <Metas />
          </MetasProvider>
        </Route>
        <Route path="/comoestas">
          <ComoEstasProvider>
            <ComoEstas />
          </ComoEstasProvider>
        </Route>
        <Route path="/inspiracion">
          <QuotesProvider>
            <Inspiracion />
          </QuotesProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
