import React from 'react';
import LabelInput from './LabelInput';
import ReactDOM from 'react-dom';

// const ShowButton = React.createClass({ 
// 	getInitialState(){
// 		return {
//         type: 'password',
       // letter: document.getElementById('setPass').value == false
	// 	}
	// },
	//  hideShow(e){
	//  	e.preventDefault();
	//  	//e.stopPropagation();
	//  	this.setState({
	//  		type: this.state.type == 'text' ? 'password' : 'text'
	//  	})

	//  },
	// render() {
	// 	return(
	// 		<button onClick={this.hideShow}>{this.state.type == 'text' ? 'Hide ' : 'Show '} password</button>
	// 		)}
	// });

const LogForm = React.createClass({
    getInitialState(){
		return {
        type: 'password',
       // letter: document.getElementById('setPass').value == false
		}
	},
	 hideShow(e){
	 	e.preventDefault();
	 	//e.stopPropagation();
	 	this.setState({
	 		type: this.state.type == 'text' ? 'password' : 'text'
	 	})

	 },
	
	
	 // volume(e){
	 // 	this.setState({
	 // 		rate: ReactDOM.findDOMNode(this.refs.clo.refs.you).value
	 // 	});
	 // },
	 // shouldComponentUpdate(newProps,newState){
	 // 	if(newState.rate !== false){
	 // 		ReactDOM.render(<ShowButton/>,document.getElementById('button'));
	 // 	} else {
	 // 		ReactDOM.unmountComponentAtNode(document.getElementById('button'));
	 // 	}
	 // },
	render(){
	return (
		<form >
		<p>Log in</p>
		<LabelInput type="text" label="Email" placeholder="Put your Email"></LabelInput>
		<LabelInput type={this.state.type} label="Password" placeholder="Passwod"></LabelInput>
		<button className={this.state.type == 'text' ? 'two' : 'one'} onClick={this.hideShow}>{this.state.type == 'text' ? 'Hide ' : 'Show '} password</button>
		<button className={this.state.type == 'text' ? 'one' : 'two'}>Submit</button>

		</form>
		)
}
});

module.exports = LogForm;