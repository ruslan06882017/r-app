import React,{Component} from 'react';
import Car from './car/car';

class Cars extends Component {
    constructor(props){
        super(props);
        this.state = {
            cars:[
                {name: "Audi", year: 2015},
                {name: "Mazda", year: 2020},
                {name: "BMW", year: 2019}
            ]
        }
    }
    goToHomePage = () => {
        this.props.history.push({
            pathname: '/',
        });
    }

    render(){
        return (
            <React.Fragment>
                <button onClick={this.goToHomePage}>Go to home page</button>
                <hr/>
                <div className="content">
                    {this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                car={car.name}
                                year={car.year}
                                {...this.props}
                            />
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default Cars;