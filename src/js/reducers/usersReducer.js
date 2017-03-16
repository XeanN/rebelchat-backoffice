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
		case 'USER_UNREAD_MESSAGES_FULFILLED':
			return{
				...state,
				list: state.list.map(user =>{
					if ( user.id == action.payload.id) {
						return {
							...user,
							unreadMessage: action.payload.unreadMessage
						}
					}
					return user;
				})
			}
			break;
		case 'USERS_ADDED':
			//TODO CHECK IF THE USER ALREADY EXISTS
			return{
				...state,
				list: state.list.concat(action.payload)
			}
			break;
		case 'GET_USERS_PENDING':
			return {
				...state,
				fetching: true
			}
			break;
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
