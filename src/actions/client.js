import { database } from '../lib/firebase';
import Notifications from 'react-notification-system-redux';
import * as CLIENT_ACTIONS from '../constants/actions/client';
import * as MESSAGE_ACTIONS from '../constants/actions/messages';

export const watchClientAddedEvent = (dispatch) => {
	database.ref('/clients').on('child_added', (snap) => {
		console.log('--->', snap.key)
		dispatch(getClientAdded(snap.key, snap.val()));
	});
	/*database.ref('/clients').on('value', (snap) => {
		dispatch(getClientList(snap));
	});*/
}

export const setClientSelected = (clientKey) => {
	return dispatch => {
		dispatch({
			type: MESSAGE_ACTIONS.MESSAGES_CLEAN_MESSAGES
		});
		return dispatch({
			type: CLIENT_ACTIONS.CLIENT_SELECTED,
			payload: clientKey
		})
	}
}

function getClientList(snap){
	var arr = [];
	snap.forEach(element => {
		arr[element.key] = element.val();
	});
	return {
		type: "CLIENT_LIST_UPDATED",
		payload: arr
	};
}

function getClientAdded(key, client) {
	return {
		type: CLIENT_ACTIONS.CLIENT_CHILD_ADDED,
		payload: {key, client}
	};
}
