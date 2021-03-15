import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./componentes/Header/Header";
import { NotFound } from "./componentes/NotFound";
import { HomePage } from "./componentes/Repository/HomePage";
import { RepositoryList } from "./componentes/Repository/RepositoryList";
import { InputProvider } from "./contexts/InputContext";
import "./styles/global.scss";

export function App() {
  return (
    <InputProvider>
      <Router>
        <Header />

        <section className="repository-list">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/user/:id" component={RepositoryList} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </Router>
    </InputProvider>
  );
}
