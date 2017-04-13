"use strict";

export default function reducer(
	state = {
		list: {},
		error: null,
		fetching:false,
		fetched:false,

		newServerMessage: null,
		newClientMessage: null
	},
	action
){
	switch (action.type) {
		case 'GET_MESSAGES_BY_USER_PENDING':
			return {
				fetching: true,
				fetched: false,
				error: null
			}
			break;
		case 'GET_MESSAGES_BY_USER_FULFILLED':
			return {
				...state,
				list: action.payload,
				fetching: false,
				fetched: true,
				error: null
			}
			break;
		case 'GET_MESSAGES_BY_USER_REJECTED':
			return {
				...state,
				list: {},
				fetching: false,
				fetched: false,
				error: action.payload
			}
			break;

		case 'NEW_SERVER_MESSAGE_FULFILLED':
			return {
				...state,
				newServerMessage: action.payload
			}
			break;
		case 'NEW_CLIENT_MESSAGE_FULFILLED':
			return {
				...state,
				newClientMessage: action.payload
			}
			break;
	}
	return state;
}
