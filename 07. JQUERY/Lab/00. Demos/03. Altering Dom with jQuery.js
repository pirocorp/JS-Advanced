//Appends p element containing text: It's party time :) 
//into div elements inside #wrapper
$('#wrapper div').append("<p>It's party time :)</p>");

//h1 with text Greetings added before all children of elements with tag body
$('<h1>Greetings</h1>').prependTo('body');

//remove all div elements
$('div').remove();
