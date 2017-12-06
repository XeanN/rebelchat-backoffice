# CHATBACK BACKOFFICE #

A basic back office SPA for the [rebelchat-script](https://github.com/rebelstackio/rebelchat-script)


## INSTALLATION ##
```

"Requirements"

In order to run this project you will need:

nodejs
npm
yarn
git
a text editor
a firebase project

1)

Create a firebase project on:

https://console.firebase.google.com/

2)

Get the required project information in the firebase console by clicking on "Add Firebase to your web app"

The information obtained on this step will be used on step 4.

3)

Clone the repository by opening a terminal and running:

git clone https://github.com/rebelstackio/rebelchat-backoffice.git

3)

After cloning the repo run:

cd rebelchat-backoffice

and then:

yarn install

4)

After yarn has installed all dependencies do the following:

create file ".env" inside the project's root directory, replace sample values with the values obtained on step 2:

NODE_ENV=development
APIKEY=SAMPLE_FIREBASE_APIKEY
AUTHDOMAIN=sampledomain.firebaseapp.com
DATABASEURL=https://sampledatabaseurl.firebaseio.com
STORAGEBUCKET=samplestoragebucket.appspot.com
COMPANY_NAME=FAKE
MESSAGING_SENDER_ID=samplesenderid

"You can get this values from the firebase console settings"

5)

Finally run:

npm start

If all was done correctly a demo server will run on:

http://localhost:9000

serving the rebelchat backoffice

```
