import React from 'react';
import './Header.css';

const Header = (props) => {
	let progressLine = {
		width: '100%',
		height: '10px',
		background: 'linear-gradient(to right, blue 0%, white 100%)'
	};
	switch (props.num) {
		case 1:
			progressLine = {
				width: '30%',
				height: '10px',
				background: 'blue'
			};
			break;
		case 2:
			progressLine = {
				width: '67%',
				height: '10px',
				background: 'blue'
			};
			break;
		case 3:
			progressLine = {
				width: '100%',
				height: '10px',
				background: 'blue'
			};
			break;
	}

	return (
		<div>
			<h1>{props.header}</h1>
			<div style = {progressLine}></div>
		</div>
	)
}

export default Header;