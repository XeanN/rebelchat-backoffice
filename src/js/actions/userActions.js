"use strict";
import database from "../firebase";

export function getUsers() {
	return function(dispatch) {
		dispatch(
			{
				type: "GET_USERS_PENDING"
			}
		);
		try {
				setTimeout(function(){
					if ( true ) {
						dispatch(
							{
								type: "GET_USERS_REJECTED",
								payload: 'error'
							}
						);
					}
					// var clientsRef = database.ref('clients').orderByChild('-lastActivity').once('value', function(snap){
					// 	dispatch(
					// 		{
					// 			type: "GET_USERS_FULFILLED",
					// 			payload: snap.val()
					// 		}
					// 	);
					// });
				}, 2000);
		} catch (e) {
			console.log('====>', e);
			dispatch(
				{
					type: "GET_USERS_REJECTED",
					payload: e
				}
			);
		}
	}
}
