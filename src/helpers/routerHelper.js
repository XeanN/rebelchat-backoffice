import Auth from '../auth';

export default class RouterHelper {

	static redirectToHome( nextState, replace ){
		replace({ pathname: '/lobby/home'});
	}

	static validateAuth( nextState, replace, callback) {
		if ( Auth.loggedIn() ) {
			return replace({ pathname: '/lobby/home'});
		}
		callback();
	}

	static requireAuth( nextState, replace, callback) {
		if ( !Auth.loggedIn() ) {
			replace( { pathname: '/login'} );
			callback();
		} else {
			callback();
		}
	}
}
