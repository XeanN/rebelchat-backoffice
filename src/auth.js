const KEY = 'rebelchat-auth-token';
const STORE = localStorage;

export default class Auth	{


	static getToken() {
		return STORE.getItem(KEY) || null ;
	}

	static setToken( token ) {
		if ( token ) {
			STORE.setItem( KEY, token );
		} else {
			STORE.removeItem(KEY);
		}
	}

	static loggedIn() {
		return !!this.getToken();
	}

	static logout( noRedirect ) {
		this.setToken(null);
		if( !noRedirect ) {
			document.location.hash="#/login";
		}
	}

	static authenticate( response ) {
		if ( response ) {

			if ( response.data && response.data.data ) {
				//TODO SAVE USER INTO LOCAL STORAGE ???
			}

			if ( response.headers ) {
				const token = response.headers['authorization'];
				if ( token ) {
					this.setToken(token);
				} else {
					throw new Error('Invalid response from the server')
				}
			} else {
				throw new Error('Invalid response from the server')
			}
		} else {
			throw new Error('Invalid response from the server')
		}
	}

}
