import React, {Component} from 'react';
import classes from './input.css';

function isInvalid({valid, touched, shouldValidate}){
    return !valid && shouldValidate && touched;
}

const Input = (props) => {
    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
        <div className="input">
            <label htmlFor="">{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props)
                ?  <span>{props.errorMessage || 'Введите верное значение'}</span> : null
            }
              
        </div>
        
    )

}

export default Input;