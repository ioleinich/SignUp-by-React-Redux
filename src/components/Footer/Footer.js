import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = (props) => {
	const pageUrl = +props.urlNum + 1;
	return (
		<div className = "footer">
			<ul>
				<li><Link to="/">Back</Link></li>
				<li ><Link to={"/" + pageUrl} onClick = {props.clicked} className="next">Next</Link></li>
				
			</ul>
		</div>
	)
};

export default Footer;