import React from "react";
import Header from "./components/Header";
import Global from "./styles/generic/Global";
import Create from "./pages/clients/create";
import Search from "./pages/clients/search";
import Edit from "./pages/clients/edit";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/create" component={Create} />
        <Route path="/edit" component={Edit} />
      </Switch>
      <Global />
    </Router>
  );
}

export default App;
