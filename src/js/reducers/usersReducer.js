"use strict";

export default function reducer(
	state = {
		list: {},
		error: null,
		selectedUser: {
			label: null,
			id: null
		}
	},
	action
){
	switch (action.type) {
		case 'USERS_ADDED':
			return{
				...state,
				list: {
					...state.list,
					[action.payload.id]: {
						...action.payload.user
					}
				}
			}
			break;
		case 'SET_SELECTED_USER':
			return{
				...state,
				selectedUser: {
					label: action.payload.label,
					id: action.payload.id,
				}
			}
	}
	return state;
}
