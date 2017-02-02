var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var corsOptions = {
   origin: 'http://localhost:3000'
}

app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
   secret: config.sessionSecret,
   resave: true,
   saveUninitialized: true
}));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getfriends);


app.listen(3000, function(){
   console.log("Listening on port 3000...")
});