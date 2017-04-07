"use strict";

export default function reducer(
	state = {
		list: {},
		error: null,
		selectedUser: {
			label: null,
			id: null
		},
		selectedUserMessages: null
	},
	action
){
	switch (action.type) {
		case 'GET_USERS_FULFILLED':
			return {
				...state,
				list: action.payload
			}
			break;
		case 'GET_USERS_MESSAGES_FULFILLED':
			return {
				...state,
				selectedUserMessages: action.payload
			}
			break;
		case 'SET_SELECTED_USER':
			return {
				...state,
				selectedUser: {
					label: action.payload.label,
					id: action.payload.id,
				}
			}
	}
	return state;
}
