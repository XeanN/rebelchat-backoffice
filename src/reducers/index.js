import { combineReducers } from "redux";
import users from "./usersReducer";
import messages from "./messagesReducer";
import auth from './auth';

export default combineReducers(
	{
		users,
		messages,
		auth
	}
);
