import { database, msgRef } from '../lib/firebase';
import  store  from '../store';
import Notifications from 'react-notification-system-redux';
import * as MESSAGE_ACTIONS from '../constants/actions/messages';

export const watchMessagesAddedEvent = (selectedClientKey) => {
	return dispatch => {
		if (selectedClientKey) {
			return msgRef.child(selectedClientKey).on('value', (snap) => {//child_added -> value
				//console.log("client key: ",snap.val());
				//This is supposed to say all msgs where read but still i have to manually chage to read:true on every message
				//database.ref('messages/'+selectedClientKey+'/'+snap.key).update({read: true});
				//return dispatch(getMessagesAdded(snap.key, snap.val()));
				snap.forEach(child => {
					console.log("child: ",child.val());
					if(!child.val().read){
						database.ref('messages/'+selectedClientKey+'/'+child.key).update({read: true});
					}
				})

				return dispatch(getMassageList(snap));
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

function getMassageList(snap){
	var arr = [];
	snap.forEach(element => {
		arr[element.key] = element.val();
	});
	return {
		type: "MESSAGE_LIST_UPDATED",
		payload: arr
	};
}
