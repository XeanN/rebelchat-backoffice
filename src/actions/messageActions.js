"use strict";
import database from "../firebase";
import Helpers from './helpers';
import firebase from 'firebase';

const MESSAGE_LABEL = 'SERVER';

export function onNewMessageByUser(userId) {
	const path = '/messages/' + userId	+'/';
	return function(dispatch) {
		try {
			database.ref(path).orderByChild('createdAt').on('child_added', function(snap){
				dispatch(
					{
						type: "NEW_MESSAGE",
						payload: {
							user: userId,
							message: snap.val(),
							id: snap.key
						}
					}
				);
			});
		} catch (e) {
			dispatch(
				{
					type: "NEW_MESSAGE_ERROR",
					payload: {
						error: e
					}
				}
			);
		}
	}
}

export function sendMessage(userId, message) {
	let path = '/messages/' + userId	+'/';

	const updates = {};

	const newMessage = {
		createdAt: firebase.database.ServerValue.TIMESTAMP,
		message: message,
		read: false,
		source: MESSAGE_LABEL
	};
	const newMessageKey = database.ref().child(path).push().key;
	path += newMessageKey;
	updates[path] = newMessage;
	return firebase.database().ref().update(updates);
}
