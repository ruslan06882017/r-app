import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

const Car = (props) => {

    return (
        <div className="content">
            <div className="car">
                <h1 
                    onClick={() => props.history.push('/cars/' + props.car.toLowerCase())}>
                    {props.car}
                </h1>
                <p>
                    {props.year}
                </p>
            </div>
        </div>
    )
}

export default withRouter(Car);