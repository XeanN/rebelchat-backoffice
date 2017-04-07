const fields = ['email', 'lastActivity', 'name', 'visitDate'];

export default class UserHelper{


	/**
	 * static - Check if the incoming user object has the valid atributtes
	 *
	 * @param  {type} user description
	 * @return {type}      description
	 */
	static validUserObject(user){
		return user && user.name && user.email && user.lastActivity;
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
