const fields = ['email', 'lastActivity', 'name', 'visitDate'];

export default class UserHelper{

	static transformObjectToArray(userObj){
		let users = [];
		if ( userObj ) {
			let keys = Object.keys(userObj);
			keys.forEach ( key => {
				//CHECK IF THE NEW VALUE COMES FROM ONCE EVENT ON FIREBASE
				let temp = (fields.indexOf(key) >= 0);
				if (!temp) {
					let obj = userObj[key];
					obj.id = key;
					//FLAGS TO THE USER, CHECK IF THE ARE OLD UNREAD MESSAGE AND NEW MESSAGES
					obj.unreadMessage = 0;
					obj.newMessages = 0
					users.push(obj);
				}
			});
		}
		return users;
	}

	static countUnreadMessage(messagesObj) {
		let messages = [];
		let messagesKeys = Object.keys(messagesObj);

		messagesKeys.forEach( msgKey => {
			let msg = messagesObj[msgKey];
			msg.id = msgKey
			messages.push(msg);
		});

		let unreadMessages = messages.filter( message => {
			return message.read == false
		}).length;

		return unreadMessages;
	}

}
