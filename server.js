var PORT = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    moment = require('moment'),
    now = moment();

app.use(express.static(__dirname + '/public'));

var currentDate = now.format('h:mma');

io.on('connection', function(socket){
    console.log('CONNECTED BRO');
    
    socket.on('message', function(message){
       console.log('RECEIVED HAHA' + message.text); 
       io.emit('text_update', message);//io.emit broadcast to everyone including user, socket.broadcast sends
          //to everyone except the user. I think there is no formatting here, sends 
          //whole 'message' object back to the front end with the sync identifier "message"
    });
    
    socket.emit('message', { //socket.on receives stuff and does something while socket.emit sends stuff
       date: currentDate,
       text:'Welcome to the Chat app'  // and does something
    });
});

http.listen(PORT, function(){
    console.log('server started');
});