var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();

//port
var server = app.listen(8000, function(){
    console.log('listening to PORT ' + server);
});


//Static files
app.use(express.static('public'));


//Socket Setup
var io = socket(server);

io.on('connection', function(socket){ //io.on(event, cb func){}
   console.log('connected socket: ', socket.id) // socket gives unique id to every user
});