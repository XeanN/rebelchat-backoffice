import { AUTH_LOGIN_REJECTED, AUTH_LOGIN_FULFILLMENT } from '../constants/actions/auth';

const defaultState = {
	authenticated: false
};

export default function AuthReducer(state = defaultState, action) {

	switch (action.type) {
		case AUTH_LOGIN_FULFILLMENT:
			return {
				...state,
				authenticated: true
			}
		case AUTH_LOGIN_REJECTED:
			return {
				...state,
				authenticated: false
			}
		default:
			return state;
	}
}
