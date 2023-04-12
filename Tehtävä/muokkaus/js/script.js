var p = document.getElementById("MTXT");
var pval = prompt("Text");



if(pval.length != 0 ) {
    pval = pval.toUpperCase(); //muuta capsiksi
    pval += pval.charAt(pval.length -1); //lisää viimeinen kirjain
    pval += "."; //lisää piste
    p.innerHTML = pval;
}