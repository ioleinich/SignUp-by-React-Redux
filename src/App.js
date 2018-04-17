import React, { Component } from 'react';
import SinglePage1 from './containers/SinglePage1/SinglePage1';
import SinglePage2 from './containers/SinglePage2/SinglePage2';
import SinglePage3 from './containers/SinglePage3/SinglePage3';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      	<div className="App">
		        <Route path="/" exact component={SinglePage1} />
	        	<Route path="/2" exact component={SinglePage2} />
	        	<Route path="/3" exact component={SinglePage3} /> 
		    </div>
	    </BrowserRouter>
    );
  }
};

export default App;
