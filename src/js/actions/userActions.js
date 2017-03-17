"use strict";
import database from "../firebase";
import Helpers from './helpers';

const UserHelper = Helpers.UserHelper;

export function onUsersAdded() {
	return function(dispatch) {
		database.ref('clients').orderByChild('-lastActivity').on('child_added', function(snap){
			const user = snap.val();
			if ( UserHelper.validUserObject(user) ) {
				dispatch(
					{
						type: "USERS_ADDED",
						payload: {
							id: snap.key,
							user: user
						}
					}
				);
			}
		});
	}
}
