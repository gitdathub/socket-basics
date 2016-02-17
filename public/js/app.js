var socket = io();


socket.on('connect', function(){
   console.log('connected to socket.io!!!!!!!!'); 
});

socket.on('message', function(message){
   console.log('New Message FROM THE GODSSSS');
   console.log(message.text);
});

//Handles incoming messages
var $form = jQuery('#msg-form');
var input_value = document.getElementById('zemessage');

$form.on('submit', function(event){
    event.preventDefault();
    
    socket.emit('message',{ //sends a response to the client/server depending on what side u r on , cont.
        text: $form.find('input[name=message]').val() //apparently 'message' can be anything you want 
    });   //like an identifier. Kinda like getElementById then grabbing it on the other side I think
    
    input_value.value = "";
});