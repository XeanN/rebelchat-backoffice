// 'use strict';
// import React from 'react';
// import { Route,IndexRoute } from 'react-router';
// import App from './app';
// import Index from './index';
// import Login from './login';
// import Settings from './settings';
// import Home from './home';
// import Messages from './messages';
// import Layout from './layout';
// import RouterHelper  from '../helpers/routerHelper';

// //FOR CHUNK NAMES AND ES6 YOU SHOULD PUT "DEFAULT"
// export default (
// 	<Route path="/" component={App} >
// 		<IndexRoute component={Index} onEnter={ RouterHelper.redirectToHome }/>
// 		<Route
// 			path="/login"
// 			component={ Login }
// 			onEnter={ RouterHelper.validateAuth }
// 		/>
// 		<Route
// 			path="/lobby"
// 			component={Layout}
// 			onEnter={ RouterHelper.requireAuth }
// 		>
// 			<Route
// 				path="user/:id/messages"
// 				component={ Messages }
// 			/>
// 			<Route
// 				path="home"
// 				component={ Home }
// 				onEnter={ RouterHelper.requireAuth }
// 			/>
// 			<Route
// 				path="settings"
// 				component={ Settings }
// 				onEnter={ RouterHelper.requireAuth }
// 			/>
// 		</Route>
// 		<Route
// 			path="*"
// 			getComponent={(nextState, cb) => {
// 				require.ensure([], require => {
// 					cb(null, require('./common/notfound').default)
// 				}, 'NotFound')
// 			}}
// 		/>
// 	</Route>
// );
