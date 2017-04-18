import axios from 'axios';
import config from '../../config';
import request from './base';

const ORGID = config.ORGINAZTION_ID;

const BASE_PATH = 'organization/' + ORGID + '/user';

const LOGIN_PATH = 'organization/' + ORGID + '/login';

export default class User {

	static getAll() {
		return request.get(BASE_PATH);
	}

	static getById(id) {
		const path = BASE_PATH + '/' + id;
		return request.get(path);
	}

	static login( payload ) {
		return request.post(LOGIN_PATH, payload);
	}

}
