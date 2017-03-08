"use strict";

export default function reducer(
	state = {
		list: [],
		fetching: false,
		fetched: false,
		error: null,
		firstLoad: false
	},
	action
){
	switch (action.type) {
		case 'GET_USERS_FULFILLED':
			return {
				...state,
				fetching: false,
				list: state.list.concat(action.payload)
			};
			break;
		case 'GET_USERS_REJECTED':
			return {
				...state,
				error: action.payload
			};
			break;
	}
	return state;
}
