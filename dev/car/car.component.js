import React from 'react';
import {Link} from 'react-router';
//const data = require('./data');
import data from './data';

class Car extends React.Component {
    // Constructor is responsible for setting up props and setting initial stte
    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            cars: []
        };
    }

    componentDidMount(){
       
        this.setState({
        	cars: data
    });
    }

    render(){
        // Get data from the route props
    	const cars = this.props.route.data
        // Map through cars and return linked cars
        const carNode = this.state.cars.map((car) => {
            return (
                <Link
                    to={"/cars/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car