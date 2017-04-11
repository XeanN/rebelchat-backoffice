export default class CommonHelper{
	/**
	 * static - Create date format string
	 *
	 * @param	{timestap} createdAt timestamp
	 * @return {string}					 	string Date format
	 */
	static buildDateMessageFormat(createdAt) {
		let date;
		if ( createdAt ) {
			date = new Date(createdAt);
		} else {
			date = new Date();
		}
		return date.toLocaleTimeString("en-us");
	}
}
