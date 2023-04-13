// joulu - helmi == talvi
//maalis - touko kevät
//kesä - elo kesä
// syys-marras syksy
var btn = document.getElementById("add");
var res = document.getElementById("res");

btn.addEventListener("click",function(e) {
    res.innerHTML = parseInput();
});
const talvi = ["joulukuu","tammikuu","helmikuu","december","january","february"];
const kevat = ["maaliskuu","huhtikuu","toukokuu","march","april","may"];
const kesa = ["kesäkuu","heinäkuu","elokuu","june","july","august"];
const syksy = ["syyskuu","lokakuu","marraskuu","september","october","november"];

function parseInput() {
    var textInput = document.querySelector("input");
    var value = textInput.value;
    if(!Number.isNaN(Number(value))) {
        var num = Number(value);
        if(num == 12 ||   num < 3 ) {return "olet TalvenLapsi";}
        if(num > 2 &&  num < 6 ) {return "olet KeväänLapsi";}
        if(num > 5 &&  num < 9 ) {return "olet kesäLapsi";}
        if(num > 8 &&  num < 12  ) {return "olet SyysLapsi";}
        //ei ollut numero.. jatketaan
    }
    value = value.toLowerCase();
    if(talvi.includes(value)) return "olet TalvenLapsi";
    if(kevat.includes(value)) return "olet KevätLapsi";
    if(kesa.includes(value)) return "olet KesäLapsi";
    if(syksy.includes(value)) return "olet SyysLapsi";
    return "Kirjoita kuukausi";
}


