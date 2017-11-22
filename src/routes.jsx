import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './components/common/notfound';
import LoginContainer  from './containers/login';
import LobbyContainer  from './containers/lobby';
import requireAuth from './components/common/require-auth';
import checkAuth from './components/common/check-auth';

const routes = (
	<Switch>
		<Route exact path="/" component={checkAuth(LoginContainer)} />
		<Route exact path="/login" component={checkAuth(LoginContainer)} />
		<Route path="/lobby" component={requireAuth(LobbyContainer)} />
		<Route component={NoMatch} />
	</Switch>
);

export default routes;
