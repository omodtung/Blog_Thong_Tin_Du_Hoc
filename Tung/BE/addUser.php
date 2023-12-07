<?php

 session_start();


 print_r($_POST);

//  print_r($_POST['fname']);
//  print_r(sess)
//  include '<div class="">DB_connection.php';
include "../DB_connection.php";
//  $nameClasses = $_POST['nameClass'];


 $fname = $_POST['fname'];
 $lname = $_POST['lname'];
 $email =  $_POST['email'];
//  $makhoi =$_POST['makhoi'];
 $pass =$_POST['pass'];
 $birthdate =$_POST['birthdate'];
 $gender = $_POST['genderbtn'];

 $status = 1;
 $sql = "INSERT INTO `user`(`fname`, `lname`, `email`, `pass`, `ngaysinh`, `gender`, `status`)  VALUES(?,?,?,?,?,?,?)";

 // $sql2 = "INSERT INTO `avgscore` (`student_id`) VALUES (?)";
 $stmt = $conn->prepare($sql);
 $stmt->execute([$fname, $lname, $email,$pass, $birthdate, $gender, $status]);



?>