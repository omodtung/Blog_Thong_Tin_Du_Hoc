<?php
session_start();
?>

<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
  <title>Document</title>

  <script>

  </script>
</head>

<body>
  <div class="container">
    <form name="registerForm" method="post" action="../BE/addUser.php"  onsubmit="return CheckingForm()">
      <div class="form-group row">
        <label for="firstName" class="col-3 col-form-label">First name:</label>
        <div class="col-9">
          <input type="text" class="form-control col-9" id="firstName" onfocus="this.placeholder=''" onblur="this.placeholder='Enter First name ...'" placeholder="Enter First name ..." name="fname" />
        </div>


        <!--           
          <div class="alert alert-danger showErrol" id="kqfirstName"role="alert">
           
          </div>
           -->

      </div>

      <!-- 
        <div class="form-group row">
          
          <div id="kqfirstName" class="col-9">
            
          </div>
        </div> -->

      <div class="form-group row">
        <label for="lastName" class="col-3 col-form-label">Last name:</label>
        <div class="col-9">
          <input type="text" class="form-control col-9" id="lastName" onfocus="this.placeholder=''" onblur="this.placeholder='Enter Last name ...'" placeholder="Enter Last name ..." name="lname" />
        </div>
        <!-- <div class="alert alert-danger showErrol" id="kqLastName"role="alert">
           
          </div> -->


      </div>

      <div class="form-group row">
        <label for="email" class="col-3 col-form-label">Email:</label>
        <div class="col-9">
          <input type="text" class="form-control col-9" id="email" onfocus="this.placeholder=''" onblur="this.placeholder='Enter Email'" placeholder="Enter Email ..." name="email" />
        </div>
        <!-- <div class="alert alert-danger showErrol" id="kqEmail"role="alert">
           
          </div> -->
      </div>

      <div class="form-group row">
        <label for="password" class="col-3 col-form-label">Password:</label>
        <div class="col-9">
          <input type="password" class="form-control col-9" id="password" onfocus="this.placeholder=''" onblur="this.placeholder='Enter Password'" placeholder="Enter Password ..." name="pass" />
        </div>
        <!-- <div class="alert alert-danger showErrol" id="kqPass"role="alert">
           
          </div> -->
      </div>

      <!-- <div class="form-group row">
          <label class="col-3 col-form-label">BirthDay:</label>
          <div class="col-9 d-flex">
            <select class="form-control col-2" id="day" >
              <option selected disabled hidden>Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select class="form-control col-2" id="month">
              <option selected disabled hidden>Month</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>

            <select class="form-control col-2" id="year">
              <option selected disabled hidden>Year</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>
        </div> -->
      <div class="form-row">




        <div class="col">
          <label class="form-lable">

            BirthDate
          </label>

          <div class="row form-group">

            <label for="date" class="col-sm-1 col-form-label"></label>

            <div class="input-group date" id="datepicker">
              <input type="text" class="form-control" name="birthdate">
              <span class="input-group-append">
                <span class="input-group-text bg-white">
                  <i class="fa fa-calendar"></i>
                </span>
              </span>
            </div>




          </div>

        </div>
        <script type="text/javascript">
          $(function() {
            $('#datepicker').datepicker();
          });
        </script>
        <!-- chon Gioi Tinh -->




        <div class="col" style="text-align: center; margin-top: 50px;">



          <label class="form-lable">

            Gioi Tinh
          </label>

          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

            <input type="radio" class="btn-check" name="genderbtn" value="M" id="btnradio1">
            <label class="btn btn-outline-primary rounded ms-5" for="btnradio1">Nam</label>

            <input type="radio" class="btn-check" name="genderbtn" value="F" id="btnradio2">
            <label class="btn btn-outline-primary rounded ms-2" for="btnradio2">Nu</label>

          </div>






        </div>
      </div>

      <!-- <div
          class="form-check row d-flex"
          style="padding-left: 0; margin-bottom: 15px"
        > -->
      <!-- <label class="col-3 col-form-label">Gender:</label>
          <div class="col-9">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked
              />
              <label class="form-check-label" for="male">Male</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
              <label class="form-check-label" for="female">Female</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="unknow"
                value="unknow"
              />
              <label class="form-check-label" for="unknow">Unknown</label>
            </div>
          </div> -->
      <!-- </div> -->

      <!-- <div class="form-group row">
          <label for="country" class="col-3 col-form-label">Country:</label>
          <div class="col-9">
            <select class="form-control col-9" id="country">
              <option selected>Vietnam</option>
              <option>Australia</option>
              <option>United States</option>
              <option>India</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-3 col-form-label" for="about">About:</label>
          <div class="col-9">
            <textarea class="form-control col-9" id="about" rows="3"></textarea>
          </div>
        </div> -->

      <div class="row">
        <div class="col-12 text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
          <!-- <button type="reset" class="btn btn-warning">Reset</button> -->
        </div>
      </div>
    </form>
  </div>
  <!-- id="callcheckingjs" -->
  <!-- onclick="CheckingForm()"  -->
  <script src="js/CheckingForm.js"></script>
</body>

</html>


?>