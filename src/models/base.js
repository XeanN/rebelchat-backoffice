import axios from 'axios';
import config from '../../config';

const request = axios.create({
	baseURL: config.SERVER_URL,
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json"
	}
});

export default request;
