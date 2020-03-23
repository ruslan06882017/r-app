import React,{Component} from 'react';

const Car = (props) => {

    return (
        <div className="content">
            <div className="car">
                <h1>{props.car}</h1>
                <p>
                    {props.year}
                </p>
            </div>
        </div>
    )
}

export default Car;