"use strict";

export default function reducer(
	state = {
		list: [],
		fetching: false,
		fetched: false,
		error: null
	},
	action
){
	switch (action.type) {
		case 'GET_USERS_PENDING':
			return {
				...state,
				fetching: true
			}
		case 'GET_USERS_FULFILLED':
			return {
				...state,
				fetching: false,
				fetched: true,
				list: action.payload
			};
			break;
		case 'GET_USERS_REJECTED':
			return {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload
			};
			break;
	}
	return state;
}
