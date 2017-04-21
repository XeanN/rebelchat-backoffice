import config from '../../config';
import request from './base';

const ORGID = config.ORGINAZTION_ID;

const BASE_PATH = 'avatar';

export default class Avatar {

	static getAll() {
		return request.get(BASE_PATH);
	}

}
