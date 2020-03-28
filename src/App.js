import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Routes/LandingPage.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/resources" component={ResourcesApp} /> */}
        {/* <Route path="/addresource" component={AddResource} /> */}
        {/* <Route path="/team" component={Team} /> */}
      </Switch>
    </div>
  );
}

export default App;
