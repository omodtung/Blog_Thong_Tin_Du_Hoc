

// document.getElementById("callcheckingjs").addEventListener("onClick",CheckingForm);

// document.forms.
function CheckingForm() {
  let firstName = document.forms["registerForm"]["firstName"].value;
  let lastName = document.forms["registerForm"]["lastName"].value;
  if (firstName.length < 2 || firstName.length > 30) {
    let a = " firname thuoc 2 den 30 ky tu";

    // alert ("Firtname co 2 den 30 ky tu")
    document.getElementById("kqfirstName").innerHTML = a;

    return false;
  } else {
    document.getElementById("kqfirstName").innerHTML = "";
  }

  if (lastName.length < 2 || lastName.length > 30) {
    let error = " lastname chua 2 den 30 ky tu";
    document.getElementById("kqLastName").innerHTML
    return false;
  }


  let email  =document.forms["registerForm"]["email"].value;
  if(email.search(/^.+@.+\..+$/i) == -1) {
    alert("Email chưa đúng định dạng <sth>@<sth>.<sth>");
    return false;
}
let password = document.forms["registerForm"]["password"].value;
if(password.length < 2 || password.length > 30) {
    alert("Password phải có 2 - 30 kí tự!");
    return false;
}
// Kiểm tra Birthday
let day = document.getElementById("day").value;
let month = document.getElementById("month").value;
let year = document.getElementById("year").value;
let date = new Date(year, month - 1, day);
if(date.getDate() != day || (date.getMonth() + 1) != month || (date.getFullYear() != year)) {
    alert("Ngày chưa hợp lệ, vui lòng kiểm tra lại!");
    return false;
}
let about = document.getElementById("about").value;
    if(about.length > 10000) {
        alert("About giới hạn 10000 kí tự!");
        return false;
    }
    alert("Complete!");



    return true;
// ajax call
// var xhr = new XMLHttpRequest();
// xhr.open("POST","userTest.php");


// xhr.send(data);
// return false
  


}









