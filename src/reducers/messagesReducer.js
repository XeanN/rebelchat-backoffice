"use strict";

export default function reducer(
	state = {
		list: {},
		error: null,
		fetching:false,
		fetched:false
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
		/**************/
		case 'NEW_MESSAGE':
			return{
				...state,
				list: {
					...state.list,
					[action.payload.user]: {
						...state.list[action.payload.user],
						[action.payload.id]: {
							...action.payload.message
						}
					}
				}
			}
			break;
	}
	return state;
}
