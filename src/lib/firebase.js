import firebase from 'firebase';

const config = {
	apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	databaseURL: process.env.DATABASEURL,
	messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const database = firebase.database();

export const auth = firebase.auth();

export const messaging = firebase.messaging();

messaging.requestPermission().then(function(){
	return  messaging.getToken();
}).then(function(token){
	database.ref("messages").on('child_added',function(snapshot){
		var client = snapshot.key,
		val = snapshot.val();
		database.ref(`messages/${client}/`).on("child_added",function(snap){
			var key = snap.key,
			val = snap.val(),
			createdAt = val.createdAt,
			message = val.message,
			source = val.source;
			if(source == "CLIENT"){
				var now = new Date(),
					then  = new Date(createdAt),
					diff = now - then;
				if(diff < 60*1000){
					sendNotification(token);
					playAudio();
				}
			}
		});
	});
}).catch(function(err){
	console.log('You do not have permission for web notifications.');
});

messaging.onMessage(function(payload){
	//console.log('payload: ', payload);
});

function sendNotification(token){
	if(localStorage && 
		localStorage.getItem("webNotifications") && 
		localStorage.getItem("webNotifications") != 0){
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST','https://fcm.googleapis.com/fcm/send',true);
	xhttp.setRequestHeader("Authorization", `key=AAAAMODu2eQ:APA91bHJ289azvBIqjkxHsM47CBfo4RwqytdCZcgyFdzBCDL37ILofeCU_HAHIIDisy-1qrysYE0HJOrrWbpRjju8oaenx7wGmj_BboyUkI4N7Cmj_XTvKSWCzpO4juTsY_hzrH43R38`);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(`{
		"to":"${token}",
	  "notification": {
	  "title":"Rebelchat backoffice",
	  "body":"you have new messages",
	  "icon":"images/logo.png"
	  }
	  }`);
	}
}

function playAudio(){
	if(localStorage &&
		localStorage.getItem("soundNotifications") &&
		localStorage.getItem("soundNotifications") != 0){
		if(Audio){
			const audio = new Audio(['https://firebasestorage.googleapis.com/v0/b/rebelchat-53a46.appspot.com/o/assets%2Faudio%2Fyour-turn.mp3?alt=media&token=d511dbd6-98da-4d47-a6c0-f7c75b2b3327']);
			if ( audio ) {
				audio.play();
			}
		}
	}
}