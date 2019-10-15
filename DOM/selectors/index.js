/*

        SOME BASIC DOM STUFF
 
var h1  = document.querySelector('h1');
h1.style.color='pink';


var body  = document.querySelector('body');
var isBlue = false;

setInterval(() => {
    if(isBlue){
        body.style.background = 'white';
    }else{
        body.style.background = '#3498db';
    }
    isBlue = !isBlue;
}, 5000);
*/

var tag = document.getElementById("highlight");

var bold = document.getElementsByClassName("bolded");
// this returns a HTMLCollection

var li = document.getElementsByTagName("li");
// this returns a HTMLCollection NOT A NODE LIST

// console.dir(tags[0]);
// .dir returns the object instead of the nicer looking html

var hashTag = document.querySelector("#highlight");
var dotTag = document.querySelector(".bolded");
var elTag = document.querySelector("h1");
// css-style selector
// this will only give us the first match

var nestedTag = document.querySelector("li a.special");
// nested tag selects a anchor tag with class of speacial
// that is nested inside of a li
