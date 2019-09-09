const x = {f: ()} //this = x
const x = { f: () => {} } //this = creation context

const onClickHandler = function(ev) {
    console.log(this); //this clicked element
    //ev.currentTarget = this
    //ev.currentTarget will typically be equal to the this of the function.
    //If you are using jQuery.proxy or another form of scope manipulation, 
    //this will be equal to whatever context you have provided, 
    //not event.currentTarget
};