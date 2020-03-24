import React, {Component} from 'react';
import Input from '../components/ui/input/input';

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
                    <Input label="Email"/> <br/>
                    <Input label="Пароль" /> <br/>
                    <button onClick={this.loginHandler}>Log in</button> 
                    <button onClick={this.registerHandler}>Registration</button> 
                </form>
            </div>
        )
    }

}

export default Auth;