"use strict";

export default function reducer(
	state = {
		//ALL USERS
		list: {},
		error: null,
		fetching: false,
		fetched: false,

		//SINGLE USER
		fetchingUser: false,
		fetchedUser: false,
		errorUser: null,
		singleUser: null,

		//SELECTED USER
		userIsSelected: false,
		selectedUser: {
			label: null,
			userId: null,
			name: null,
			chatSettings: null
		},

	},
	action
){
	switch (action.type) {
		case 'GET_USERS_ON_FULFILLED':
			return {
				...state,
				list: {
					...state['list'],
					[action.payload.key]: action.payload.user
				}
			}
			break;
		case 'GET_USERS_PENDING':
			return {
				...state,
				fetching: true,
				fetched: false,
				error: null
			}
			break;
		case 'GET_USERS_FULFILLED':
			return {
				...state,
				list: action.payload,
				fetching: false,
				fetched: true,
				error: null
			}
			break;
		case 'GET_USERS_REJECTED':
			return {
				...state,
				list: {},
				fetching: false,
				fetched: false,
				error: action.payload
			}
			break;

			case 'GET_SINGLE_USER_PENDING':
				return {
					...state,
					fetchingUser: true,
					fetchedUser: false,
					errorUser: null,
					singleUser: null
				}
				break;
			case 'GET_SINGLE_USER_FULFILLED':
				return {
					...state,
					fetchingUser: false,
					fetchedUser: true,
					errorUser: null,
					singleUser: action.payload
				}
				break;
			case 'GET_SINGLE_USER_REJECTED':
				return {
					...state,
					list: {},
					fetchingUser: false,
					fetchedUser: false,
					errorUser: action.payload,
					singleUser: null
				}
				break;

		case 'SET_SELECTED_USER':
			return {
				...state,
				selectedUser: action.payload,
				userIsSelected: true
			}
			break;
	}
	return state;
}
