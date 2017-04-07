"use strict";

export default function reducer(
	state = {
		list: {},
		error: null
	},
	action
){
	switch (action.type) {
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
