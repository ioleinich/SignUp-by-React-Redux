import React, {Component} from 'react';
import './SinglePage3.css';
import Header from '../../components/Header/Header';

import { connect } from 'react-redux';


class SinglePage3 extends Component {
	state = {
		header: 'Thank you',
		pageNum: 3
	}
	render () {
		return (
			<div className = 'singlePage3'>
				<Header header = {this.state.header} num = {this.state.pageNum}/>
				<button onClick = {this.props.onCheckState3}>Go To Dashboard</button>
				<div className="res">
					<p>Email: <span>{this.props.email}</span></p>
					<p>Password: <span>{this.props.password}</span></p>
					<p>Confirmed Password: <span>{this.props.confirmPassword}</span></p>
					<p>Day of birth: <span>{this.props.day}</span></p>
					<p>Month of birth: <span>{this.props.month}</span></p>
					<p>Year of birth: <span>{this.props.year}</span></p>
					<p>How did you find us?: <span>{this.props.howFound}</span></p>
				</div>
			</div>
		)
	}
};

const mapStateToProps = state => {
	return {
		email: state.emailRedux,
		password: state.passwordRedux,
		confirmPassword: state.confirmPasswordRedux,
		day: state.dayRedux,
		month: state.monthRedux,
		year: state.yearRedux,
		howFound: state.howFoundRedux
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onCheckState3: () => dispatch({type: 'CHECK_STATE3'}),
		onSubmitHandler1: (z) => dispatch({type: 'SUBMIT_VALUE3', value: z})
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SinglePage3);