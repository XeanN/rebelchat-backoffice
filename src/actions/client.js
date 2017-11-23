import { database } from '../lib/firebase';
import Notifications from 'react-notification-system-redux';
import * as CLIENT_ACTIONS from '../constants/actions/client';

export function watchClientAddedEvent(dispatch) {
	database.ref('/clients').on('child_added', (snap) => {
		dispatch(getClientAdded(snap.key, snap.val()));
	});
}

export const  clientSelected = (clientKey) => {
	return dispatch => {
		return dispatch({
			type: CLIENT_ACTIONS.CLIENT_SELECTED,
			payload: clientKey
		})
	}
}


function getClientAdded(key, client) {
	return {
		type: CLIENT_ACTIONS.CLIENT_CHILD_ADDED,
		payload: {key, client}
	};
}
