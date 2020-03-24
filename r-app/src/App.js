import React, {Component} from 'react';
import Cars from './cars/cars.jsx';
import CarDetail from './car-detail/car-detail.jsx';
import Auth from './auth/auth.jsx';
import About from './about/about.jsx';
import { NavLink,Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  };
  
  render(){
    return (
      <React.Fragment>
        <div>
          <nav>
            <ul>
              <li><NavLink to="/"> Home </NavLink></li>
              <li><NavLink to="/cars"> Cars </NavLink></li>
              <li><NavLink to="/about"> About </NavLink></li>
              <li><NavLink to="/auth"> Auth </NavLink></li>
            </ul>
          </nav>
          <p>{this.state.loggedIn ? 'Hello, Ruslan' : 'Please log in'}</p>
          <button onClick={() => this.setState({loggedIn: true})}> Log in. </button>
        </div>
        <Switch>
          <Route path="/" exact render={() => <h1>Home page</h1>} />
          {this.state.loggedIn ? <Route path="/about" component={About}/> : null}          
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          <Route path="/auth" component={Auth} />
          <Redirect to={"/"} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
