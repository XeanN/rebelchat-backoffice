import { auth } from '../lib/firebase';
import { AUTH_LOGIN_REJECTED, AUTH_LOGIN_FULFILLMENT, AUTH_LOGIN_PROGRESS } from '../constants/actions/auth';

export const login = (email, password) => {
	return dispatch => {
		dispatch(loginProgress());
		auth.signInWithEmailAndPassword(email, password).then( (user) =>{
			return dispatch(loginOK());
		}).catch((error) => {
			return dispatch(loginError());
		});
	}
}

export const loginProgress = () => {
	return {
		type: AUTH_LOGIN_PROGRESS
	}
}

export const loginError = () => {
	return {
		type: AUTH_LOGIN_REJECTED
	}
}

export const loginOK = () => {
	return {
		type: AUTH_LOGIN_FULFILLMENT
	}
}
