export default class RouterHelper{
	static redirectToHome( nextState, replace ){
		console.log('===>');
		replace({ pathname: '/lobby/home'});
	}
}
