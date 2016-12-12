import React from 'react';

const LabelInput = (props) =>
	<div className="label-input">
		<label>{props.label}</label>
		<input  type={props.type} placeholder={props.placeholder}/>
		</div>
module.exports = LabelInput;

