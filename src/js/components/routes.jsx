'use strict';
import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './app';
import Login from './login';
import Home from './home';
import Layout from './layout';
import Helpers from '../helpers';

//LOAD ROUTER HELPER
const RouterHelper = Helpers.RouterHelper;

//FOR CHUNK NAMES AND ES6 YOU SHOULD PUT "DEFAULT"
export default (
	<Route path="/" component={App} >
		<IndexRoute component={Login} onEnter={RouterHelper.redirectToHome} />
		<Route
			path="/login"
			component={ Login }
		/>
		<Route
			path="/lobby"
			component={Layout}
		>
			<Route
				path="home"
				component={ Home }
			/>
		</Route>

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
