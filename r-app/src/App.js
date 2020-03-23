import React, {Component} from 'react';
import Cars from './cars/cars.jsx';
import CarDetail from './car-detail/car-detail.jsx';
import About from './about/about.jsx';
import { NavLink,Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="/cars"> Cars </NavLink></li>
            <li><NavLink to="/about"> About </NavLink></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact render={() => <h1>Home page</h1>} />
        <Route path="/about" component={About} />
        <Route path="/cars/:name" component={CarDetail} />
        <Route path="/cars" component={Cars} />
        <Redirect to={"/"} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
