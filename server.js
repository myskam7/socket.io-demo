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

   socket.on('chat', function(data){
       //once msg is sent io.sockets.emit(type of msg, data) will send it to all the clients
       io.sockets.emit('chat', data);
   });

   socket.on('typing', function(data){
       socket.broadcast.emit('typing', data); //renders 'typing to all clients except to the client typing
   });
});