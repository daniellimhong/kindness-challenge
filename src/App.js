import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './Routes/LandingPage';
import Inspiration from './Routes/Inspiration';
import ResourcesApp from './Routes/ResourcesApp';
import Team from './Routes/Team';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/inspiration" component={Inspiration} />
          <Route path="/resources" component={ResourcesApp} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
