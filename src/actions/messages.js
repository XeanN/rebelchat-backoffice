import { database } from '../lib/firebase';
import  store  from '../store';
import Notifications from 'react-notification-system-redux';
import * as MESSAGE_ACTIONS from '../constants/actions/messages';

export const watchMessagesAddedEvent = (selectedClientKey) => {
	return dispatch => {
		if (selectedClientKey) {
			const path = `/messages/${selectedClientKey}/`
			return database.ref(path).on('child_added', (snap) => {
				return dispatch(getMessagesAdded(snap.key, snap.val()));
			});
		}
	}
}

function getMessagesAdded(key, message) {
	return {
		type: MESSAGE_ACTIONS.MESSAGES_CHILD_ADDED,
		payload: { key, message }
	};
}
