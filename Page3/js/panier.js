
let btnPlus = document.querySelector('.qté-plus');
let btnMoins = document.querySelector('.qté-moins');

btnPlus.addEventListener('click', inclureQuantité);
btnMoins.addEventListener('click', enleveQuantité);



function inclureQuantité(){
  document.querySelector('.quantité').value = parseInt(document.querySelector('.quantité').value) +1;

}

function enleveQuantité(){
  if(document.querySelector('.quantité').value > 0){
    document.querySelector('.quantité').value = parseInt(document.querySelector('.quantité').value) -1;
  }
}

// Slides


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
