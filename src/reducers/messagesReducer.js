"use strict";

export default function reducer(
	state = {
		list: {},
		error: null,
		fetching:false,
		fetched:false,

		newServerMessage: null,
		newClientMessage: {

		}
	},
	action
){
	switch (action.type) {
		case 'GET_MESSAGES_BY_USER_PENDING':
			return {
				fetching: true,
				fetched: false,
				error: null,
				newClientMessage: {
					...state['newClientMessage']
				}
			}
			break;
		case 'GET_MESSAGES_BY_USER_FULFILLED':
			return {
				...state,
				list: action.payload,
				fetching: false,
				fetched: true,
				error: null,
				newClientMessage: {
					...state['newClientMessage']
				}
			}
			break;
		case 'GET_MESSAGES_BY_USER_REJECTED':
			return {
				...state,
				list: {},
				fetching: false,
				fetched: false,
				error: action.payload,
				newClientMessage: {
					...state['newClientMessage']
				}
			}
			break;

		case 'NEW_SERVER_MESSAGE_FULFILLED':
			return {
				...state,
				newServerMessage: action.payload,
				newClientMessage: {
					...state['newClientMessage']
				}
			}
			break;
		case 'NEW_CLIENT_MESSAGE_FULFILLED':
			if ( !action.payload.message.read && action.payload.message.source == 'CLIENT') {
				return {
					...state,
					newClientMessage: {
						...state['newClientMessage'],
						[action.payload.userId]: {
							...state['newClientMessage'][action.payload.userId],
							[action.payload.id]: action.payload.message
						}
					}
				}
			}
			break;
		case 'CLEAR_NEW_CLIENT_MESSAGE':
			const messages = state.newClientMessage;
			messages[action.payload.userId] = { }
			return {
				...state,
				newClientMessage: messages
			}
	}
	return state;
}
