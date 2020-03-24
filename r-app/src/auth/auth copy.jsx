import React, {Component} from 'react';
import Input from '../components/ui/input/input';

class Auth extends Component {

    constructor(props){
        super(props);
        this.state = {
            formControls: {
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Введите верный Email',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Пароль',
                    errorMessage: 'Введите верный пароль',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6
                    }
                }
            }
        }
    }
    loginHandler = () => {
        // Login
    }

    registerHandler = () => {
        // Register
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}`, event.target.value);
    }
    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                />
            );
        })
    }
    render(){
        return (
            <div>
                <h1>Auth</h1>
                <form onSubmit={this.submitHandler}>
                    {this.renderInputs()}
                    <button onClick={this.loginHandler}>Log in</button> 
                    <button onClick={this.registerHandler}>Registration</button> 
                </form>
            </div>
        )
    }

}

export default Auth;