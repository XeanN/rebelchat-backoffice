"use strict";
import database from "../firebase";

export function getUsers() {
	return function(dispatch) {
		// dispatch(
		// 	{
		// 		type: "GET_USERS_PENDING",
		// 		payload: snap.val()
		// 	}
		// );
		try {
				var clientsRef = database.ref('clients').orderByChild('-lastActivity').once('value', function(snap){
					console.log(snap.val());
					dispatch(
						{
							type: "GET_USERS_FULFILLED",
							payload: snap.val()
						}
					);
				});
				// clientsRef.on('child_added', function(snap) {
				//
				// });
		} catch (e) {
			dispatch(
				{
					type: "GET_USERS_REJECTED",
					payload: e
				}
			);
		}
	}
}
