"use strict";
import database from "../firebase";
import firebase from 'firebase';
import {SERVER_SOURCE} from '../defaultProps';

export function getMessagesByUser(userId) {
	const path = '/messages/' + userId  +'/';
	return function( dispatch) {
		dispatch(
			{
				type: "GET_MESSAGES_BY_USER_PENDING",
			}
		)
		database.ref(
			path
		).orderByChild(
			'createdAt'
		).limitToLast(
			50
		).once('value').then (data => {
			dispatch(
				{
					type: "GET_MESSAGES_BY_USER_FULFILLED",
					payload: data.val()
				}
			);
		}).catch( error => {
			dispatch(
				{
					type: "GET_MESSAGES_BY_USER_REJECTED",
					payload: error
				}
			)
		});
	}
}

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
		source: SERVER_SOURCE
	};
	const newMessageKey = database.ref().child(path).push().key;
	path += newMessageKey;
	updates[path] = newMessage;
	return firebase.database().ref().update(updates);
}
