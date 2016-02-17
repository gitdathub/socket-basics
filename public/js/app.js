var socket = io();


socket.on('connect', function(){
   console.log('connected to socket.io!!!!!!!!'); 
});

socket.on('message', function(message){
   console.log('New Message FROM THE GODSSSS');
   console.log(message.text);
});