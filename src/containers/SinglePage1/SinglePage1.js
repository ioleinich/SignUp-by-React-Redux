import React, {Component} from 'react';
import './SinglePage1.css';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';


class SinglePage1 extends Component {
	state = {
		header: 'Signup',
		pageNum: 1,
		formIsValid: false,
		registrationForm: {
			email: {
				label: 'EMAIL IS REQUIRED', 
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'example@gmail.com'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			password: {
				label: 'PASSWORD',
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Type your password'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			'confirmPassword': {
				label: 'CONFIRM PASSWORD', 
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Repeat your password'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			}
		}
	};

	checkValidity(value, rules) {
		let isValid = true;
		if (rules.validation.required) {
			isValid = value.trim() !== '' && isValid;
		};
	return isValid;
	};

	inputChangedHandler = (event, inputIdentifier) => {

		//Copy first this.state level
		const updatedRegistrationForm = {
			...this.state.registrationForm
		};

		//Copy nested this.state.level
		const updatedFormEl = {
			...updatedRegistrationForm[inputIdentifier]
		};
		
		updatedFormEl.value = event.target.value;
		updatedRegistrationForm[inputIdentifier] = updatedFormEl;
		updatedFormEl.valid = this.checkValidity(updatedFormEl.value, updatedFormEl);
		
		updatedFormEl.touched = true; 
		let formIsValid = true;
		for (let inputIdentifier in updatedFormEl) {
			formIsValid = updatedFormEl[inputIdentifier].valid && formIsValid;
		}
		this.setState({registrationForm: updatedRegistrationForm, formIsValid: formIsValid});
	};

	render () {
		const formValidationArray = [];
		for (let key in this.state.registrationForm) {
			formValidationArray.push({
				id: key,
				config: this.state.registrationForm[key]
			});

		}
		let form = (
			<form>
				{ formValidationArray.map(validEl => (
					<Input 
						key = {validEl.id}
						label = {validEl.config.label}
						elementType = {validEl.config.elementType} 
						elementConfig = {validEl.config.elementConfig} 
						value={validEl.config.value} 
						changed={(event) => this.inputChangedHandler(event, validEl.id)}
						shouldValidate = {validEl.config.validation}
						touched = {validEl.config.touched}
						isvalid = {!validEl.config.valid} 
						/>
					)
				) }  
			</form>
		);
		return (
			<div className = 'singlePage1'>
				<Header header = {this.state.header} num = {this.state.pageNum}/>
				{form}
				<Footer 
					clicked = {() => this.props.onSubmitHandler1(this.state.registrationForm)}
					btnType = {!this.state.formIsValid}
					urlNum = {this.state.pageNum}>
				</Footer>
			</div>
		);
	};
};

const mapStateToProps = state => {
	return {
		email: state.emailRedux,
		password: state.passwordRedux,
		confirmPassword: state.confirmPasswordRedux,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onCheckState: () => dispatch({type: 'CHECK_STATE1'}),
		onSubmitHandler1: (t) => dispatch({type: 'SUBMIT_VALUE1', value: t})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage1);