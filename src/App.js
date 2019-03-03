import React from 'react';
import { render } from 'react-dom';
// import { Router } from '@reach/router';

import AppNav from './AppNav';
import HomePage from './HomePage';
import AppFooter from './AppFooter';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="inner-root-container">
				<AppNav />
				<HomePage />
				<AppFooter />
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
