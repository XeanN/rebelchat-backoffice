"use strict";
import database from "../firebase";
import Helpers from './helpers';

export function onNewMessageByUser(userId) {
	const path = '/messages/' + userId	+'/';
	return function(dispatch) {
		database.ref(path).orderByChild('createdAt').on('child_added', function(snap){
			// console.log(userId, '=========>', snap.val(), snap.key);
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
	}
}
