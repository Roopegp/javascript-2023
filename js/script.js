var age = 30;
var num = 30.23122;
var intro = "this is a javascript intro and my  age is ";
var i = 1;
let arr =[i,num,intro,age];
console.log(getCombinedVar(arr));
var header = this.document.getElementById("JsTweaker");
var old = header.innerHTML;
var state = 0;
header.addEventListener("click", function(w) {
    if(state == 0) {
            header.innerHTML = "minua clickattiin";
            header.style.color = "Black";
            var time = Math.random(800,600);
            header.style.left = time + 'px';
            header.style.transform = "translate(" + 0 + "px,"+0 + "px)";
            console.warn("Changed");
    } else if(state < 8) {
            header.style.transform = "translate(" + getRandomInt(0,1600) + "px," + getRandomInt(0,1200) + "px)";
            header.innerHTML = "Olen täällä";
            generateRainbowText(header);
    } else {
      
            state = 0;
            header.innerHTML = "minua clickattiin";
            header.style.color = "Black";
            header.style.left = time + 'px';
            header.style.transform = "translate(" + 0 + "px,"+0 + "px)";
            console.warn("Changed");
     } 
     state++;
    
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (getRandomInt(0,360) * i / text.length) + ",80%,50%)";
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
  }


function getCombinedVar(a) {
    console.error("ERR")
    return a.join();
}