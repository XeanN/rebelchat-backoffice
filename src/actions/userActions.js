"use strict";
import User from "../models/user";
import { OK } from "../settings";

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

export function getUserAndSetSelected(id) {
	return function(dispatch) {
		dispatch(
			{
				type: "GET_SINGLE_USER_PENDING",
			}
		);
		User.getById(id).then(data => {
			if ( data.status == OK && data.data && data.data.data ) {
				dispatch(
					{
						type: "GET_SINGLE_USER_FULFILLED",
						payload: data.data.data
					}
				);
				dispatch(
					{
						type: "SET_SELECTED_USER",
						payload: data.data.data
					}
				);
			} else {
				dispatch(
					{
						type: "GET_SINGLE_USER_REJECTED",
						payload: {
							errorUser: {
								message: 'There was a problem trying to get user information'
							}
						}
					}
				);
			}
		}).catch(error =>{
			dispatch(
				{
					type: "GET_SINGLE_USER_REJECTED",
					payload: {
						errorUser: error
					}
				}
			);
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
