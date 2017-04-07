export default class RouterHelper{
	static redirectToHome( nextState, replace ){
		replace({ pathname: '/lobby/home'});
	}
}
