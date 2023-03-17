var elm = document.getElementById("t");
var promptval = prompt("What u doing","Javascript");


if(promptval.toLowerCase() != "javascript") {
    elm.innerText = "dumbass";
} else {
    elm.innerText = "right";
}