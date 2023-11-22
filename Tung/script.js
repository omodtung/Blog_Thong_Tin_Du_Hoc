var slideIndex = 1;
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
  var i;
  var dots = document.getElementsByClassName("demo");
  var slides = document.getElementsByClassName("mySlides");
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

/* plus and minus btns */
var value = document.getElementById('value').value;
var plusbtn = document.getElementById('plus-btn');
plusbtn.onclick = () =>{
  value++
  document.getElementById('value').value = value
}
var minusbtn = document.getElementById('minus-btn');
minusbtn.onclick = () =>{
  if(value > 0){
    value-- 
  document.getElementById('value').value = value
  }
}

/* slideshow display */
function displayslide() {
  let slide = document.querySelector('aside')
  slide.classList.toggle('toggleaside')
}


function displayMap(num)
{
  let button = document.querySelectorAll(".contact button");
  let iframe = document.querySelectorAll(".map iframe");
  for (let i= 0 ; i<button.length;i++)
  {

    if(i == num -1) continue;
    iframe[i].classList.add("d-none");

  }
  iframe[num-1].classList.toggle("d-none");
  
}