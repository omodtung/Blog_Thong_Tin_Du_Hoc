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

// checking validation for complain by the tung
function validateForm() {
  var x =  document.getElementById('name').value;
  if (x == "") {
      document.getElementById('status').innerHTML = "Name cannot be empty";
      return false;
  }
  x =  document.getElementById('email').value;
  if (x == "") {
      document.getElementById('status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      let email  =document.forms["contact-form"]["email"].value;
      // console.log("test"+email);
      // if(!re.test(x)){
      //     document.getElementById('status').innerHTML = "Email format invalid";
      //     return false;
      // }

      if(email.search(/^.+@.+\..+$/i) == -1) {
  alert("Email chưa đúng định dạng <sth>@<sth>.<sth>");
  return false;
}
  }
  x =  document.getElementById('subject').value;
  if (x == "") {
      document.getElementById('status').innerHTML = "Subject cannot be empty";
      return false;
  }
  x =  document.getElementById('message').value;
  if (x == "") {
      document.getElementById('status').innerHTML = "Message cannot be empty";
      return false;
  }
//get input field values data to be sent to server
//     document.getElementById('status').innerHTML = "Sending...";
//     formData = {
//         'name'     : $('input[name=name]').val(),
//         'email'    : $('input[name=email]').val(),
//         'subject'  : $('input[name=subject]').val(),
//         'message'  : $('textarea[name=message]').val()
//     };


//    $.ajax({
//     url : "mail.php",
//     type: "POST",
//     data : formData,
//     success: function(data, textStatus, jqXHR)
//     {

//         $('#status').text(data.message);
//         if (data.code) //If mail was sent successfully, reset the form.
//         $('#contact-form').closest('form').find("input[type=text], textarea").val("");
//     },
//     error: function (jqXHR, textStatus, errorThrown)
//     {
//         $('#status').text(jqXHR);
//     }
// });

document.getElementById('status').innerHTML = "Sending...";
  document.getElementById('contact-form').submit();


}