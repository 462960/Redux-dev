import React from "react";

export default class LoginForm extends React.Component {

	render(){
		return(
			<form>
				<p>Login</p>
				<div className="label-input">
					<label>Email Address</label>
					<input placeholder="usuario@dominio.com" />
				</div>
				<div className="label-input">
					<label>Password</label>
					<input placeholder="Password" />
				</div>
				<a>Forgot Password?</a>
				<button>Login</button>
			</form>
		);
	}
}