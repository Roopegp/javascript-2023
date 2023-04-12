const slides =document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
//kaikki napit sekä kuvat ^^ 


slides.forEach(function(slide,index) {
	//kaikille left style indexin mukaan
    slide.style.left=  `${index * 100}%`;
});
//indexi kuvalle
let counter = 0;
nextBtn.addEventListener("click",function() {
	//index++
    counter++;
	//vaihda kuvaa indexin mukaan
    cycle();
});
prevBtn.addEventListener("click",function() {
    counter--;
    cycle();
});

function cycle() {
	
    if(counter == slides.length) counter =0 ; // ollaan päästy loppuun
    if(counter < 0) counter =slides.length -1;//mennään taaksepäin ensimmäisessä
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}