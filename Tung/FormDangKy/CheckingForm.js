

// document.getElementById("callcheckingjs").addEventListener("onClick",CheckingForm);

// document.forms.
function CheckingForm() {
  let firstName = document.forms["registerForm"]["fname"].value;
  let lastName = document.forms["registerForm"]["lastName"].value;
  if (firstName.length < 2 || firstName.length > 30) {
    let a = " firname thuoc 2 den 30 ky tu";

    alert ("Firtname co 2 den 30 ky tu")
    // document.getElementById("kqfirstName").innerHTML = a;

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


function KiemTra()
{
  var x =  document.getElementById('firstName').value;
 if (x=='')
 {
  document.getElementById('status').innerHTML = "Ten Khong Duoc De Trong ";
      
  return false;
 }
  if (x.length<2 || x.length>30) {
      // document.getElementById('status').innerHTML = "Name cannot be empty";
      // 
      document.getElementById('status').innerHTML = "Ten Khong Dung Quy Dinh ";
      
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
        document.getElementById('status').innerHTML = "Email khong Dung Quy Dinh";
  return false;
}
  }
  x =  document.getElementById('lastName').value;
  if (x == "") {
      document.getElementById('status').innerHTML = "last Name  cannot be empty";
      return false;
  }

  
  x =  document.getElementById('password').value;
  if (x == "") {
      document.getElementById('status').innerHTML = "Pass word Khong Duoc De  Trong";
      return false;
  }


  x =  document.getElementById('ngaysinh').value;
  if (x == "") {
      document.getElementById('status').innerHTML = "Ngay sinh khong Duoc Trong";
      return false;
  }


  x1=document.getElementById('btnradio1').value;
  x2 =document.getElementById('btnradio2').value;
  if (x1=="" || x2=="")
  {
    document.getElementById('status').innerHTML = "Gioi Tinh khong Trong ";
      return false;
  }
document.getElementById('status').innerHTML = "Sending...";
  document.getElementById('contact-form').submit();


}







