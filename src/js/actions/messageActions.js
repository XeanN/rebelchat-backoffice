"use strict";
import database from "../firebase";
import Helpers from './helpers';

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
