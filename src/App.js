import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Featured from './pages/Featured';

function App() {
  return (
    <Router basename="/PeepleWeb-wireframe">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/featured" component={Featured} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
