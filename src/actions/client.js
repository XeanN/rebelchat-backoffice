import { database, msgRef, reEstablishMessageEvents } from '../lib/firebase';
import  store  from '../store';
import Notifications from 'react-notification-system-redux';
import * as CLIENT_ACTIONS from '../constants/actions/client';
import * as MESSAGE_ACTIONS from '../constants/actions/messages';

export const watchClientAddedEvent = (dispatch) => {
	database.ref('/clients').on('child_added', (snap) => {
		console.log('--->', snap.key)
		dispatch(getClientAdded(snap.key, snap.val()));
	});
	database.ref('/clients').on('value', (snap) => {
		dispatch(getClientList(snap));
		/*snap.forEach(client => {
			dispatch(getClientAdded(client.key, client.val()));
		});*/
	});
}

export const setClientSelected = (clientKey) => {
	return dispatch => {
		var prevClient = store.getState().client.selected;
		if(prevClient != null){
			msgRef.child(prevClient.key).off('value');//just changed child_added to value
			//reEstablishMessageEvents(prevClient.key);
		}
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
//	arr = arr.reverse();
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
