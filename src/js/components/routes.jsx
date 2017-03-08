'use strict';
import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './app';
import Login from './login';
// import NotFound from './components/common/notfound';


//FOR CHUNK NAMES AND ES6 YOU SHOULD PUT "DEFAULT"
export default (
	<Route path="/" component={App} >
		<IndexRoute component={Login} />
		<Route
			path="/login"
			component={ Login }
		/>
		<Route
			path="*"
			getComponent={(nextState, cb) => {
				require.ensure([], require => {
					cb(null, require('./common/notfound').default)
				}, 'NotFound')
			}}
		/>
	</Route>
);
