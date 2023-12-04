<?php

session_start();

print_r($_SESSION);
include("../DB_connection.php");
        $id = $_GET['id'];
        $sql = "UPDATE complain SET status = 0 WHERE id =$id ";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
         header("Location:../../AdminPage/CheckComplain.php");
         exit;
        
?>