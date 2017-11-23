import * as AUTH_ACTIONS  from '../constants/actions/auth';

const defaultState = {
	authenticated: false,
	progress: false
};

export default function AuthReducer(state = defaultState, action) {

	switch (action.type) {
		case AUTH_ACTIONS.AUTH_LOGIN_FULFILLMENT:
			return {
				...state,
				authenticated: true,
				progress: false
			}
		case AUTH_ACTIONS.AUTH_LOGIN_REJECTED:
			return {
				...state,
				authenticated: false,
				progress: false
			}
		case AUTH_ACTIONS.AUTH_LOGIN_PROGRESS:
			return {
				...state,
				progress: true
			}
		case AUTH_ACTIONS.AUTH_LOGOUT_FULFILLMENT:
			return {
				...state,
				authenticated: false
			}
		case AUTH_ACTIONS.AUTH_USER_ALREADY_AUTHENTICATED:
			return {
				...state,
				authenticated: true
			}
		default:
			return state;
	}
}
