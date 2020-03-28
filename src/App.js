import React from 'react';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './Routes/LandingPage.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route path="/about" component={Inspiration} />
          <Route path="/resources" component={ResourcesApp} />
          <Route path="/team" component={Team} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
