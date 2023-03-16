var elm = document.getElementById("input");


elm.addEventListener("click",function(clickfunc) {
    var p = prompt("Whatcha name");
    elm.innerText = p;
})