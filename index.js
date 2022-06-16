var ld = require('lodash'); // like lodash as ld

var css_style = document.querySelector(".css-style");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
console.log('lets test the build scripts')
var array = [1,2,3,4,6,7,9,10]
console.log('answer: ', ld.without(array,5));

function setGradient() {
    body.style.background = "Linear-gradient(to right, "+ color1.value + ", "+ color2.value+")";
    css_style.innerHTML = "<h2><code>"+body.style.background+";"+"</code></h2>";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

