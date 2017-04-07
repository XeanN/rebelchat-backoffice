import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBMB9rO2BtIaRmt6SH8sakZyE02CibIb-8",
	authDomain: "rebelstackchat.firebaseapp.com",
	databaseURL: "https://rebelstackchat.firebaseio.com",
	storageBucket: "rebelstackchat.appspot.com",
	messagingSenderId: "209932179940"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
