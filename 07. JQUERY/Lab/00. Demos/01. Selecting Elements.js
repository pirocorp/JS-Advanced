//jQuery selection same as the querySelector in Vanilla JS
$('*') // Selects all elements
$('.class') // Select by class name
$('section') // Select by tag name
$('#id') // Selects a element by given id
$('selector1, selector2') // Combined

//Filter Selectors in jQuery
$('li:even') // Even <li>
$('li:odd') // Odd <li>
$('li:first') // First <li>
$('li:last') // Last <li>
$('li:first-child') // Selects the first child of <li>
$('li:has(p)') // Selects all <li> holding <p> inside
$('li:contains("Sofia")') // Selects <li> holding given text
$('li:eq(2)') // Selects the third <li> element
$('li:not(:checked)') // Elements not matching the selector


//Selecting Elements by Attribute
$("input[name='first_name']");

//Selecting Elements by Compound CSS Selector
$("#contents ul.people li");

//Pseudo-Selectors
$("a.external:first");

// Select all input-like elements in a form (more on this below).
$("#myForm :input");

//When using the :visible and :hidden pseudo-selectors, 
//jQuery tests the actual visibility of the element, 
//not its CSS visibility or display properties. 
//jQuery looks to see if the element's physical height and width 
//on the page are both greater than zero.

//However, this test doesn't work with <tr> elements. 
//In the case of <tr> jQuery does check the CSS display property, 
//and considers an element hidden if its display property 
//is set to none.

//Elements that have not been added to the DOM will always be considered hidden
$("div:visible");

// All except the first three div elements.
$("div:gt(2)");

// All currently animated div elements.
$("div:animated");

//Does My Selection Contain Any Elements?

// Testing whether a selection contains elements.
if ($("div.foo").length) {
    //Do some stuff
}

//Saving Selections
//jQuery doesn't cache elements for you. If you've made a selection 
//that you might need to make again, you should save the selection 
//in a variable rather than making the selection repeatedly.

//you can call jQuery methods on the variable just like you would have
//called them on the original selection

//A selection only fetches the elements that are on the page at the time 
//the selection is made.If elements are added to the page later, 
//you'll have to repeat the selection or otherwise add them to the 
//selection stored in the variable. Stored selections don't magically 
//update when the DOM changes.
let divElements = $("div");

//Refining & Filtering Selections
$("div.foo").has("p");         // div.foo elements that contain <p> tags
$("h1").not(".bar");           // h1 elements that don't have a class of bar
$("ul li").filter(".current"); // unordered list items with class of current
$("ul li").first();            // just the first unordered list item
$("ul li").eq(5);              // the sixth

//Pseudo-selectors that help find elements in forms

//:checked targets checked checkboxes, but keep in mind that this selector 
//works also for checked radio buttons and <select> elements 
//(for <select> elements only, use the :selected selector)
$("form :checked");

//:disabled pseudo-selector targets any <input> elements with the disabled attribute

//In order to get the best performance using :disabled, 
//first select elements with a standard jQuery selector, 
//then use .filter( ":disabled" ), or precede the pseudo-selector 
//with a tag name or some other selector.
$("form :disabled");

//:enabled pseudo-selector targets any elements that do not have a disabled attribute
//In order to get the best performance see disabled
$("form :enabled");

//:input selector selects all <input>, <textarea>, <select>, and <button> elements
//In order to get the best performance see disabled
$("form :input");

//:selected pseudo-selector targets any selected items in <option> elements
//In order to get the best performance see disabled
$("form :selected");

//jQuery provides pseudo selectors to select form - specific elements according to their type:
// :password
// :reset
// :radio
// :text
// :submit
// :checkbox
// :button
// :image
// :file
