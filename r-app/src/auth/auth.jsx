import React, {Component} from 'react';

class Auth extends Component {

    loginHandler = () => {
        // Login
    }

    registerHandler = () => {
        // Register
    }

    submitHandler = (event) => {
        event.preventDefault();
        
    }
    render(){
        return (
            <div>
                <h1>Auth</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Log in"/> <br/>
                    <input type="text" placeholder="Password"/> <br/>
                    <button onClick={this.loginHandler}>Log in</button> 
                    <button onClick={this.registerHandler}>Registration</button> 
                </form>
            </div>
        )
    }

}

export default Auth;