<?php
session_start();
print_r($_POST);
print_r($_SESSION);


print_r($_SESSION['id']);
?>


<?php




include_once "DB_connection.php";
	
function getuser($conn)
{

    $sql = "SELECT * FROM user WHERE id =".$_SESSION['id'];
   $stmt = $conn->prepare($sql);
   $stmt->execute();

   if ($stmt->rowCount() == 1) {
     $user = $stmt->fetch();
     return $user;
   }else {
   	return 0;
   }
}
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Trang nay danh chu user </h1>

<?php
$var = getuser($conn);

echo " in ra toan bo mang";
print_r ($var);
echo "<br>";
echo " lay mang thu 1";
print_r($var[1]);




?>


</body>
</html>
<?php
?>