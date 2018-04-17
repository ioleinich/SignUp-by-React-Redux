import React, {Component} from 'react';
import './SinglePage2.css';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';


class SinglePage2 extends Component {
	state = {
		header: 'Signup',
		pageNum: 2,
		formIsValid: false,
		registrationForm: {
			day: {
				label: 'DAY', 
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'DD'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			month: {
				label: 'MONTH', 
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'MM'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			year: {
				label: 'YEAR', 
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'YYYY'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			
			'howFound': {
				label: 'Where did you hear about us', 
				elementType: 'select',
				elementConfig: {
					options: [
						{value: "Internet", displayValue: "From internet"}, 
						{value: "Friends", displayValue: "From friends"}
					]
				},
				valid: true,
				touched: false
			}
		}
	}

	checkValidity(value, rules) {
		let isValid = true;
		if (rules.required) {
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
			<div className = 'singlePage2'>
				<Header header = {this.state.header} num = {this.state.pageNum}/>
				<h1>Date of Birth</h1>
				{form}
				<Footer 
					clicked = {() => this.props.onSubmitHandler2(this.state.registrationForm)}
					urlNum = {this.state.pageNum}>
				</Footer>
			</div>
		)
	}
};

const mapStateToProps = state => {
	return {
		day: state.dayRedux,
		month: state.monthRedux,
		year: state.yearRedux,
		howFound: state.howFoundRedux
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onCheckState: () => dispatch({type: 'CHECK_STATE2'}),
		onSubmitHandler2: (v) => dispatch({type: 'SUBMIT_VALUE2', value: v})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage2)