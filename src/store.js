import {applyMiddleware, createStore} from "redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from "redux-logger";
import reducer from "./reducers";

const getMiddleware = () => {
	if (process.env.NODE_ENV === 'production') {

	}
	// ENABLE ADDITIONAL LOGGING IN NON-PRODUCTION ENVIRONMENTS.
	return applyMiddleware(createLogger(), thunk);
};

const store = createStore(reducer, composeWithDevTools(getMiddleware()));

export default store;
