
const initialState = {
	emailRedux: '1',
	passwordRedux: '1',
	confirmPasswordRedux: '1',
	dayRedux: '1',
	monthRedux: '1',
	yearRedux: '1',
	howFoundRedux: '1'
	
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'CHECK_STATE1':
			return {
				...state,
				emailRedux: state.emailRedux +1,
				passwordRedux: state.passwordRedux + 2,
				confirmPasswordRedux: state.confirmPasswordRedux + 3
			}
		case 'SUBMIT_VALUE1':
			// const arr = action.value.email.value;
			return {
				...state,
				emailRedux: action.value.email.value,
				passwordRedux: action.value.password.value,
				confirmPasswordRedux: action.value.confirmPassword.value
			};
		case 'CHECK_STATE2':
			return {
				...state,
				dayRedux: state.dayRedux +1,
				monthRedux: state.monthRedux + 2,
				yearRedux: state.yearRedux + 3,
				howFoundRedux: state.howFoundRedux +4
			};
		case 'SUBMIT_VALUE2':
			// const arr = action.value;
			// console.log(arr)
			return {
				...state,
				dayRedux: action.value.day.value,
				monthRedux: action.value.month.value,
				yearRedux: action.value.year.value,
				howFoundRedux: action.value.howFound.value
				
			};
		case 'SUBMIT_VALUE3':
			// const arr = action.value;
			// console.log(arr)
			return {
				...state,
				emailRedux: action.value.email.value,
				passwordRedux: action.value.password.value,
				confirmPasswordRedux: action.value.confirmPassword.value,
				dayRedux: action.value.day.value,
				monthRedux: action.value.month.value,
				yearRedux: action.value.year.value,
				howFoundRedux: action.value.howFound.value
				
			};
		case 'CHECK_STATE3':
			return {
				...state,
				emailRedux: state.emailRedux,
				passwordRedux: state.passwordRedux,
				confirmPasswordRedux: state.confirmPasswordRedux,
				dayRedux: state.dayRedux,
				monthRedux: state.monthRedux,
				yearRedux: state.yearRedux,
				howFoundRedux: state.howFoundRedux
			};

		default:
			console.log('Ups');
	}
	return state;
};

export default reducer;