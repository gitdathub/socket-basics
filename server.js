var PORT = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket){
    console.log('CONNECTED BRO');
    
    socket.on('message', function(message){
       console.log('RECEIVED HAHA '+ message.text); 
       socket.broadcast.emit('message', message);
    });
    
    socket.emit('message', {
       text:'Welcome to the Chat app' 
    });
});

http.listen(PORT, function(){
    console.log('server started');
})