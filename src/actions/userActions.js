"use strict";
import User from "../models/user";
import { OK } from "../settings";
import { CONFIG_DB } from '../firebase';
import CONFIG from '../../config';

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

export function getUsers2() {
	const userRef = CONFIG_DB.ref().child(
		'users'
	).child(
		CONFIG.ORGINAZTION_ID
	).orderByChild(
		"roles"
	).equalTo(
		0
	)
	return function(dispatch) {
		userRef.on('child_added', function(snap){
			dispatch(
				{
					type: "GET_USERS_ON_FULFILLED",
					payload: {
						user: snap.val(),
						key: snap.key
					}
				}
			);
		})
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

export function setAdminUser(admin) {
	return function( dispatch) {
		dispatch(
			{
				type: "SET_SELECTED_ADMIN",
				payload: admin
			}
		);
	}
}
