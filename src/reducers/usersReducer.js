"use strict";

export default function reducer(
	state = {
		list: {},
		error: null,
		fetching: false,
		fetched: false,
		selectedUser: {
			label: null,
			userId: null,
			name: null,
			chatSettings: null
		},
		//REMOVE
		selectedUserMessages: null
	},
	action
){
	switch (action.type) {
		case 'GET_USERS_PENDING':
			return {
				...state,
				fetching: true,
				fetched: false,
				error: null
			}
			break;
		case 'GET_USERS_FULFILLED':
			return {
				...state,
				list: action.payload,
				fetching: false,
				fetched: true,
				error: null
			}
			break;
		case 'GET_USERS_REJECTED':
			return {
				...state,
				list: {},
				fetching: false,
				fetched: false,
				error: action.payload
			}
		/******************/
		case 'GET_USERS_MESSAGES_FULFILLED':
			return {
				...state,
				selectedUserMessages: action.payload
			}
			break;
		case 'GET_USERS_MESSAGES_REJECTED':
			break;
		case 'SET_SELECTED_USER':
			return {
				...state,
				selectedUser: action.payload
			}
	}
	return state;
}
