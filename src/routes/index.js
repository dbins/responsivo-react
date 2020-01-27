import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Contato from "../pages/contato";
import Portfolio from "../pages/portfolio";
import Ferramentas from "../pages/ferramentas";
import Aplicativos from "../pages/aplicativos";
import Blog from "../pages/blog";
import Videos from "../pages/videos";

import { restrito } from "./restrito.js";
const AllRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/videos" component={Videos} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/ferramentas" component={Ferramentas} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/aplicativos" component={Aplicativos} />
    </Switch>
  </BrowserRouter>
);

export default AllRoutes;
