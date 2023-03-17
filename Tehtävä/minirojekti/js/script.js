var elm = document.getElementById("link");
try{
    var prompval = prompt("please input a link");
    var p = prompval.split("www.");
    var link = getfixedLink(p[p.length -1]);
    elm.setAttribute("href",link);
    elm.innerText = "your link";
} catch(Exeption) {}
function getfixedLink(e) {
    var s = String(e);  
    s.replace("https://","")
    var returnvalue = "https://www."+s;
    return returnvalue;
}


