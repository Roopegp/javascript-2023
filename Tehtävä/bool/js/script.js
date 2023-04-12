var input = document.getElementById("input");

var submit = document.getElementById("sub");
var box = document.getElementById("box");


var list = new Array();


submit.addEventListener("click",function(e) {
        e.preventDefault();
        box.innerText = "";
        var names = input.value;
        list.push(names);
        list.forEach(e => {
            box.innerText += " " + e;
        })
        input.value = "";
});