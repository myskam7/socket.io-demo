var express = require('express');

//App setup
var app = express();

//port
var port = app.listen(4000, function(){
    console.log('listening to PORT ' + port);
});


//Static files
app.use(express.static('public'));