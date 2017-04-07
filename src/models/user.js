import axios from 'axios';
import config from '../../config';

const ORGID = config.ORGINAZTION_ID;

const request = axios.create({
	baseURL: config.SERVER_URL,
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json",
	}
});

const BASE_PATH = 'organization/' + ORGID + '/user';

export default class User {

	static getAll() {
		return request.get(BASE_PATH);
	}

}
