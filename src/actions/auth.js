import { auth } from '../lib/firebase';
import { AUTH_LOGIN_REJECTED, AUTH_LOGIN_FULFILLMENT, AUTH_LOGIN_PROGRESS, AUTH_LOGOUT_REJECTED, AUTH_LOGOUT_FULFILLMENT } from '../constants/actions/auth';
import Notifications from 'react-notification-system-redux';

export const login = (email, password) => {
	return dispatch => {
		dispatch(loginProgress());
		auth.signInWithEmailAndPassword(email, password).then( (user) =>{
			return dispatch(loginOK());
		}).catch((error) => {
			dispatch(Notifications.error(error));
			return dispatch(loginError(error));
		});
	}
}

export const logout = () => {
	return dispatch => {
		auth.signOut().then(() => {
			return dispatch(logoutOk());
		}).catch((error) => {
			return dispatch(logoutError());
		});
	}
}

export const logoutOk = () => {
	return {
		type: AUTH_LOGOUT_FULFILLMENT
	}
}

export const logoutError = () => {
	return {
		type: AUTH_LOGOUT_REJECTED
	}
}

export const loginProgress = () => {
	return {
		type: AUTH_LOGIN_PROGRESS
	}
}

export const loginError = (error) => {
	return {
		type: AUTH_LOGIN_REJECTED,
		payload: error
	}
}

export const loginOK = () => {
	return {
		type: AUTH_LOGIN_FULFILLMENT
	}
}
