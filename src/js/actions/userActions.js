"use strict";
import database from "../firebase";
import Helpers from './helpers';

const UserHelper = Helpers.UserHelper;

export function countMessageByUser(userId) {
	const path = '/messages/' + userId  +'/';
	return function(dispatch) {
		let clientsRef = database.ref(path).orderByChild('createdAt').on('child_added', function(snap){
			dispatch(
				{
					type: "USER_NEW_MESSAGES_FULFILLED",
					payload: {
						id: userId
					}
				}
			);
		});
	}
}

// export function countUnreadMessageByUser(userId) {
// 	return function(dispatch) {
// 		try {
// 			const path = '/messages/' + userId  +'/'
// 			let clientsRef = database.ref(path).orderByChild('createdAt').once('value', function(snap){
//
// 				dispatch(
// 					{
// 						type: "USER_UNREAD_MESSAGES_FULFILLED",
// 						payload: {
// 							id: userId,
// 							unreadMessage: UserHelper.countUnreadMessage(snap.val())
// 						}
// 					}
// 				);
// 			});
// 		} catch (e) {
// 			console.error('countUnreadMessageByUser Exception', e);
// 			dispatch(
// 				{
// 					type: "USER_UNREAD_MESSAGES_REJECTED",
// 					payload: e
// 				}
// 			);
// 		}
// 	}
// }


export function getUsers() {
	return function(dispatch) {
		dispatch(
			{
				type: "GET_USERS_PENDING"
			}
		);
		try {
			var clientsRef = database.ref('clients').orderByChild('-lastActivity').once('value', function(snap){
				dispatch(
					{
						type: "GET_USERS_FULFILLED",
						payload: UserHelper.transformObjectToArray(snap.val())
					}
				);
			});
		} catch (e) {
			console.error('GetUsers Exception', e);
			dispatch(
				{
					type: "GET_USERS_REJECTED",
					payload: e
				}
			);
		}
	}
}

export function onChangeUsers() {
	return function(dispatch) {
		var clientsRef = database.ref('clients').orderByChild('-lastActivity').on('child_changed', function(snap){
			let user = snap.val()
			user.id = snap.key
			dispatch(
				{
					type: "USERS_ADDED",
					payload: user
				}
			);
		});
	}
}
