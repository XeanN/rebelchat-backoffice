"use strict";
import database from "../firebase";
import User from "../models/user";
import { OK } from "../defaultProps";

export function getUsers() {
	return function(dispatch) {
		dispatch(
			{
				type: "GET_USERS_PENDING",
			}
		);
		//TODO REMOVE SETTIMEOUT (SIMULATE SERVER DELAY)
		// window.setTimeout(() => {
		User.getAll().then(data => {
			if ( data.status == OK && data.data && data.data.data ) {
				dispatch(
					{
						type: "GET_USERS_FULFILLED",
						payload: data.data.data
					}
				);
			} else {
				dispatch(
					{
						type: "GET_USERS_REJECTED",
						payload: {
							error: {
								message: 'There was a problem trying to get the server response'
							}
						}
					}
				);
			}
		}).catch(error =>{
			dispatch(
				{
					type: "GET_USERS_REJECTED",
					payload: {
						error: error
					}
				}
			);
		});
		// }, 2000);

	}
}

export function getUserMessages(id) {
	const path = '/messages/' + id  +'/';
	return function( dispatch) {
		database.ref(
			path
		).orderByChild(
			'createdAt'
		).limitToLast(
			50
		).once('value').then (data => {
			dispatch(
				{
					type: "GET_USERS_MESSAGES_FULFILLED",
					payload: data.val()
				}
			);
		}).catch( error => {
			//TODO HANDLE ERRORS
			console.log(error);
		});
	}
}

export function setSelectedUser(user) {
	return function( dispatch) {
		dispatch(
			{
				type: "SET_SELECTED_USER",
				payload: user
			}
		);
	}
}
