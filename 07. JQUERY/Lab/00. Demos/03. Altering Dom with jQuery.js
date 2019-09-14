//Appends p element containing text: It's party time :) 
//into divs inside #wrapper
$('#wrapper div').append("<p>It's party time :)</p>");

//h1 with thext Greetings added before all childs of elements with tag body
$('<h1>Greetings</h1>').prependTo('body');

//remove all divs
$('div').remove();
