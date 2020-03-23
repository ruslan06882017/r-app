import React from 'react';
import Cars from './cars/cars.jsx';
import About from './about/about.jsx';
import { Route, NavLink } from 'react-router-dom';

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
      <div>
        <Route path="/" render={() => <h1>Home page</h1>} />
        <Route path="/about" component={About} />
        <Route path="/cars" component={Cars} />
      </div>
    </React.Fragment>
  );
}

export default App;
