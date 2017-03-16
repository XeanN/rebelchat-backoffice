"use strict";
import database from "../firebase";
import Helpers from './helpers';

const UserHelper = Helpers.UserHelper;

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
