//Make Connection

var socket = io.connect('http://localhost:8000');

//Query DOM (store these ELEMENTS inside VARIABLES )
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');




//Emit Event

btn.addEventListener('click', function(){
    //socket.emit('type of message', 'message')
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    }); 
});

message.addEventListener('keypress', function(){
   socket.emit('typing', handle.value); //when client is typing other clients can see clients handler
});

// Listen for Events
socket.on('chat', function(data){
   output.innerHTML += "<p><strong>" + data.handle + "; </strong>" + data.message + "</p>";
   feedback.innerHTML = "";
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...' + '</p></em>;'
})