const KEY = 'rebelchat-auth-token';
const USER_KEY = 'rebelchat-user-info';
const STORE = localStorage;

let USER_INSTANCE;

export default class Auth	{

	static getMe() {
		const user =  STORE.getItem(USER_KEY);
		if ( user ) {
			return JSON.parse(user);
		} else {
			//TODO HANDLE WHEN THERE IS NO DATA ON LOCALSTORAGE
		}
	}

	static setMe( user ) {
		const _user = {
			name: user.name,
			email: user.email,
			roles: user.roles,
			chatSettings: user.chatSettings
		}
		STORE.setItem( USER_KEY,  JSON.stringify(_user) );
	}

	static removeMe() {
		STORE.setItem( USER_KEY,  null );
	}

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
		this.removeMe();
		if( !noRedirect ) {
			document.location.hash="#/login";
		}
	}

	static authenticate( response ) {
		if ( response ) {

			if ( response.data && response.data.data ) {
				const user = response.data.data;
				Auth.setMe(user);
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
