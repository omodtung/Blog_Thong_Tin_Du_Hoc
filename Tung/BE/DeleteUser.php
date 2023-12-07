<?php

session_start();
include("../DB_connection.php");
        $id = $_GET["id"];
        $sql = "UPDATE user SET status = 0 WHERE id = $id";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
         header("Location:../../AdminPage/User.php");
         exit;
        
?>