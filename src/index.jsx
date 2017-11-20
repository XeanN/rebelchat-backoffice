import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';

const APPLICATION  = (
	<Provider store={store}>
		<Router>
			{routes}
		</Router>
	</Provider>
);

ReactDOM.render(
	APPLICATION ,
	document.getElementById("app")
);
