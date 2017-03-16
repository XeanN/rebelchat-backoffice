export default class UserHelper{

	static transformObjectToArray(userObj){
		let users = [];
		if ( userObj ) {
			let keys = Object.keys(userObj);
			keys.forEach ( key => {
				let obj = userObj[key];
				obj.id = key;
				users.push(obj);
			});
    }
		return users;
	}
}
