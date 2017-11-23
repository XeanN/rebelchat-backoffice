import { database } from '../lib/firebase';
import  store  from '../store';
import Notifications from 'react-notification-system-redux';
import * as MESSAGE_ACTIONS from '../constants/actions/messages';

export function watchMessagesAddedEvent(dispatch) {
	const selectedClient = store.getState().client.selected;
	if ( selectedClient ) {
		const path = `/messages/${selectedClient}}/`
		database.ref(path).on('child_added', (snap) => {
			dispatch(getMessagesAdded(snap.key, snap.val()));
		});
	}
}


function getMessagesAdded(key, messafe) {
	return {
		type: MESSAGE_ACTIONS.MESSAGES_CHILD_ADDED,
		payload: { key, messafe }
	};
}
