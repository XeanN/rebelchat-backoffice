"use strict";
import { MESSAGE_DB } from "../firebase";
import firebase from 'firebase';
import { SERVER_SOURCE } from '../settings';

export function getMessagesByUser(userId) {
	const path = '/messages/' + userId  +'/';
	return function( dispatch) {
		dispatch(
			{
				type: "GET_MESSAGES_BY_USER_PENDING",
			}
		)
		MESSAGE_DB.ref(
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
			MESSAGE_DB.ref(path).orderByChild('createdAt').on('child_added', function(snap){

				dispatch(
					{
						type: "NEW_CLIENT_MESSAGE_FULFILLED",
						payload: {
							userId: userId,
							message: snap.val(),
							id: snap.key
						}
					}
				);
			});
		} catch (e) {
			dispatch(
				{
					type: "NEW_CLIENT_MESSAGE_REJECTED",
					payload: {
						error: e
					}
				}
			);
		}
	}
}

export function clearNewClientMessages(userId) {
	return function(dispatch) {
		dispatch(
			{
				type: 'CLEAR_NEW_CLIENT_MESSAGE',
				payload: {
					userId: userId
				}
			}
		)
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
	const newMessageKey = MESSAGE_DB.ref().child(path).push().key;
	path += newMessageKey;
	updates[path] = newMessage;
	return MESSAGE_DB.ref().update(updates);
}

export function newServerMessage(message) {
	message.createdAt =  (+ new Date())
	message.id =  (+ new Date())
	return function(dispatch) {
		dispatch(
			{
				type: "NEW_SERVER_MESSAGE_FULFILLED",
				payload: message
			}
		);
	}
}
