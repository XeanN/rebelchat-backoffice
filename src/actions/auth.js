import { auth } from '../lib/firebase';
import { AUTH_LOGIN_REJECTED, AUTH_LOGIN_FULFILLMENT } from '../constants/actions/auth';

export const login = (email, password) => {
	return dispatch => {
		auth.signInWithEmailAndPassword(email, password).then( (user) =>{
			disp
		}).catch((error) => {
			dispatch(loginError());
		});
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
