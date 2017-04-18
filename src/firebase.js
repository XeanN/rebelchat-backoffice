import firebase from 'firebase';
import CONFIG from '../config';

firebase.initializeApp(CONFIG.MESSAGE_DB);
const database = firebase.database();

const CONFIG_APP = firebase.initializeApp(CONFIG.CONFIG_DB, 'CONFIG');

//CONNECTION TO MULTIPLE DATABASES
export const MESSAGE_DB = firebase.database();

export const CONFIG_DB = CONFIG_APP.database();
