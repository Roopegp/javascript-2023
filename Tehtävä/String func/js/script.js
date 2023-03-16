var doc = document.getElementById("stringfunc");
var doctext = doc.innerText;
var toUppercase = doctext.toUpperCase();
var lowerCase = doctext.toLowerCase();
var firstTenChars = doctext.substring(10);
const splitString = doctext.split(" ");
var splitAsString ="("+ splitString.join(")"+"(") +")"; 



splitString.forEach( (t) => {
        console.log(t);
});
//console.log(splitString[0])
