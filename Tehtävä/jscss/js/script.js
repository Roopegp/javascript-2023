var bgCol = document.querySelector(".js-bg-color");
var txtCol = document.querySelector(".js-text-color");
var body = document.querySelector("body");
//muuttujia


bgCol.addEventListener("keyup",function(e) { //eventti bg-color texti boxille
    body.style.backgroundColor = String(e.target.value); //inputti castattyna stringiin 
    //console.log("BgColor", e.target.value);
})
txtCol.addEventListener("keyup",function(e) { // eventti txtcolorille
    body.style.color = String(e.target.value);
    //console.log("txtColor", e.target.value);
})