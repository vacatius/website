import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./types/Routes";
import Invite from "./screens/Invite";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Vacatius</h1>
        </Route>
        <Route path={Routes.INVITE}>
          <Invite />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
