import { AUTH_LOGIN_REJECTED, AUTH_LOGIN_FULFILLMENT, AUTH_LOGIN_PROGRESS, AUTH_LOGOUT_FULFILLMENT } from '../constants/actions/auth';

const defaultState = {
	authenticated: false,
	progress: false
};

export default function AuthReducer(state = defaultState, action) {

	switch (action.type) {
		case AUTH_LOGIN_FULFILLMENT:
			return {
				...state,
				authenticated: true,
				progress: false
			}
		case AUTH_LOGIN_REJECTED:
			return {
				...state,
				authenticated: false,
				progress: false
			}
		case AUTH_LOGIN_PROGRESS:
			return {
				...state,
				progress: true
			}
		case AUTH_LOGOUT_FULFILLMENT:
			return {
				...state,
				authenticated: false
			}
		default:
			return state;
	}
}
