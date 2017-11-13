import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import logger from "redux-logger";
import reducer from "./reducers";
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);
const getMiddleware = () => {
	if (process.env.NODE_ENV === 'production') {
		return applyMiddleware(epicMiddleware);
	}
	// ENABLE ADDITIONAL LOGGING IN NON-PRODUCTION ENVIRONMENTS.
	return applyMiddleware(epicMiddleware, createLogger());
};

const store = createStore(reducer, composeWithDevTools(getMiddleware()));

export default store;
