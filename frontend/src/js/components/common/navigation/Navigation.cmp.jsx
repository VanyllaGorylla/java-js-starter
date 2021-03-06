import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Index from 'IndexModule/Index.cmp.jsx';
import Error404Handler from '../404/Error404.cmp.jsx';

const Navigation = () => <Router>
	<div>
		<nav>
			<div className="nav-wrapper">
				<a href="/" className="brand-logo ">Java-Js-Starter</a>
				<ul className="right hide-on-med-and-down">
					<li><Link to="/">Index</Link></li>
				</ul>
			</div>
		</nav>
		<div className="container">
			<ToastContainer />
			<Switch>
				<Route exact path="/" component={Index} />
				<Route component={Error404Handler} />
			</Switch>
		</div>
	</div>
</Router>;

export default Navigation;
