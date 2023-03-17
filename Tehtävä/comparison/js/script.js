var elm = document.getElementById("volume");
elm.addEventListener("input", onvalChanged);
var warned = false;
String.prototype.equalsIgnoreCase = function (compareString) { return this.toUpperCase() === compareString.toUpperCase();}; 
var promtVal = prompt("Wathca name");


if(promtVal.equalsIgnoreCase("roope")) {
    alert("jeesus christus")
}




function onvalChanged(t) {
    if(t.target.value > 9  && !warned) {
        alert("loud");
        warned = true;
    }
    document.getElementById("vol").innerText = t.target.value;
}