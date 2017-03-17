import { combineReducers } from "redux";
import users from "./usersReducer";
import messages from "./messagesReducer";

export default combineReducers(
	{
		users,
		messages
	}
);
