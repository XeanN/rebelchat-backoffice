import { Router, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './components/routes.jsx';
import { Provider } from 'react-redux';
import store from './store';

const APPLICATION  = (
	// <MuiThemeProvider muiTheme={getMuiTheme()}>
		<Provider store={store}>
			<Router history={hashHistory}>
				{routes}
			</Router>
		</Provider>
	// </MuiThemeProvider>
);

ReactDOM.render(
	APPLICATION ,
	document.getElementById("app")
);
