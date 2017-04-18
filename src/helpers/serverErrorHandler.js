const DEFAULT_ERROR_MESSAGE = 'There was a problem with you request. Pleae make contact with the support team';
const DEFAULT_WARNING_MESSAGE = 'At this moment we cannot process your request.Please try later.';

const WARNING = 'warning';
const ERROR = 'error';
const INFO = 'info';
const SUCCESS = 'success';

export default class ServerErrorHandler {

	constructor( error ) {
		this._error = error;
		this._message = null;
		this._notificationLevel = null;
		this.buildError();
	}

	getErrorNotificationObject() {
		return {
			message: this._message,
			level: this._notificationLevel
		}
	}

	buildError() {
		if ( this._error.response ) {
			this._message = this.getErrorMessage(this._error.response);
			switch (this._error.response.status) {
				case 400:
					this._notificationLevel = WARNING;
					break;
				case 500:
					this._notificationLevel = ERROR;
					break;
				default:
					this._notificationLevel = ERROR;
					this._message = DEFAULT_ERROR_MESSAGE
			}
		} else {
			this._notificationLevel = ERROR;
			this._message = DEFAULT_ERROR_MESSAGE
		}
	}

	getErrorMessage ( response ) {
		if ( response.data ) {
			switch (true) {
				case response.data.error != null:
					return response.data.error.message;
				default:
					return DEFAULT_WARNING_MESSAGE;
			}
		} else {
			return DEFAULT_WARNING_MESSAGE;
		}
	}

}
