var socket = io();



var chat_name = getQueryVariable('name');
var chat_room = getQueryVariable('room');


var text_box = $('.messages');

socket.on('connect', function(){
   console.log('connected to socket.io!!!!!!!!'); 
});

socket.on('message', function(message){
   console.log('New Message FROM THE GODSSSS');
   console.log(message.text);
    
    
   text_box.append('<p><strong>' + message.date + ' ' + message.text + '</strong> ' +  '</p>');
    
});


socket.on('text_update', function(message){
    text_box.append('<p><strong>' + message.name + ' ' + message.text + '</strong> ' +  '</p>');
});
//Handles incoming messages
var $form = jQuery('#msg-form');
var input_value = document.getElementById('zemessage');

$form.on('submit', function(event){
    event.preventDefault(); //think it redirects with the A href nature of the submit button?
    
    socket.emit('message',{ //sends a response to the client/server depending on what side 
        text: $form.find('input[name=message]').val(), 
        name: chat_name//apparently 'message' can be anything 
    });   //like an identifier. Kinda like getElementById then grabbing it on the other side I 
    
    input_value.value = "";
});