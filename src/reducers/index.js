import { combineReducers } from "redux";
import users from "./usersReducer";
import messages from "./messagesReducer";
import auth from './auth';
import { reducer as notifications } from 'react-notification-system-redux';

export default combineReducers(
	{
		notifications,
		users,
		messages,
		auth
	}
);
