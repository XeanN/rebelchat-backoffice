import firebase from 'firebase';

const config = {
	apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	databaseURL: process.env.DATABASEURL
};

firebase.initializeApp(config);

export const database = firebase.database();

export const auth = firebase.auth();
