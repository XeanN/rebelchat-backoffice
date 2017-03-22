"use strict";

export default function reducer(
	state = {
		list: {},
		error: null
	},
	action
){
	switch (action.type) {
		case 'USERS_ADDED':
			return{
				...state,
				fetched: false,
				list: {
					...state.list,
					[action.payload.id]: {
						...action.payload.user
					}
				}
			}
			break;
	}
	return state;
}
