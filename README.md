This document will show how you to run notchapp_backend app, set it up and deploy it on heroku

* Download or clone the project

// ** First install the dependencies //

1- npm install //will fetch package.json file and install the needed dependencies


// ** Start the project //

2- npm start PS: if the project won't start, try to install nodemon globally using npm install -g nodemon


* Project Deployment

1- Create app on heroku (Node.js app)
2- Using the heroku CLI login to your account using ' heroku login + adding credentials '
2- add the project as remote origin to the local project
3- push the local project to heroku
4- set up environment variables for the app hosted on heroku
5- Host database on https://www.freemysqlhosting.net/