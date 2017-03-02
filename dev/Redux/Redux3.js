// Taken here
// https://www.udemy.com/react-redux-react-router/learn/v4/t/lecture/5575444

import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const counter = (state = 0, action) => {
	switch(action.type){
		case 'INCREMENT':
		return state +1;
		case 'DECREMENT':
		return state -1;
		default:
		return state;
	}
};

   export const store = createStore(counter);

let Counter = (props) => 
<div>
	<h1>{props.value}</h1>
	<button onClick={props.onIncrement}>+</button>
	<button onClick={props.onDecrement}>-</button>
</div>

  export default React.createClass({
	onIncrement(){
      store.dispatch({
      	type: 'INCREMENT'
      })
	},
	onDecrement(){
      store.dispatch({
      	type: 'DECREMENT'
      })
	},
	render(){
		return(
			<Counter
			onIncrement={this.onIncrement}
			onDecrement={this.onDecrement}
			value={store.getState()}
			/>
			)
	}
});


