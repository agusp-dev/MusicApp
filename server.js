var express = require('express');
var bodyParser = require('body-parser');
var songsController = require('./controllers/songsController');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var port = '8080';

app.listen(port, function() {
    console.log("Server listening on port " + port);
});

app.get('/songs', songsController.getSongs);
app.get('/songs/:id', songsController.getSongById);