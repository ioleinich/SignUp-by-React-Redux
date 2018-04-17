import React, {Component} from 'react';
import './Input.css';

class Input extends Component {
	render() {
	let inputElement = null;
	let inputClass = 'inputElement';
	if (this.props.isvalid && this.props.shouldValidate && this.props.touched) {
		inputClass = 'invalid';
	}
	switch (this.props.elementType) {
		case ('input'):
			inputElement = 
				<input 
					className={inputClass} 
					{...this.props.elementConfig} 
					value={this.props.value} 
					onChange = {this.props.changed}
					onBlur = {this.props.blured} />;
			break;
		case ('email'):
			inputElement = 
				<input 
					className={inputClass} 
					{...this.props.elementConfig} 
					value={this.props.value} 
					onChange = {this.props.changed}/>;
			break;
		case ('select'):
			inputElement = (
				<select 
					className={inputClass}  
					value={this.props.value}
					onChange = {this.props.changed}>
					{this.props.elementConfig.options.map(option => (
						<option key = {option.value} value= {option.value}>{option.displayValue}</option>
					))}
				</select>
			);
			break;
		default: 
			inputElement = 
				<input 
					className={inputClass} 
					{...this.props.elementConfig} 
					value={this.props.value}
					onChange = {this.props.changed} />;
		}

	return (
		<div className={'input'}>
			<label className={'label'}>{this.props.label}</label>
			{inputElement}
		</div>
	);
	};
}

export default Input;