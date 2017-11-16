import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './components/common/notfound';
import { LoginContainer } from './containers/login';
import { LobbyContainer } from './containers/lobby';

const routes = (
	<Switch>
		<Route exact path="/" component={LoginContainer} />
		<Route exact path="/login" component={LoginContainer} />
		<Route path="/lobby" component={LobbyContainer} />
		<Route component={NoMatch} />
	</Switch>
);

export default routes;
