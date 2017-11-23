import { combineReducers } from "redux";
import users from "./usersReducer";
import messages from "./messagesReducer";
import auth from './auth';
import client from './client';
import ui from './ui';
import message from './message';
import { reducer as notifications } from 'react-notification-system-redux';

export default combineReducers(
	{
		notifications,
		client,
		messages,
		auth,
		ui,
		message
	}
);
