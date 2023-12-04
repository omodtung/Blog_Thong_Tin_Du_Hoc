<?php 
session_start();

print_r($_POST);
if (isset($_POST['uname']) &&
    isset($_POST['pass']) &&
    isset($_POST['role'])) {

	include_once "../DB_connection.php";
	
	$uname = $_POST['uname'];
	$pass = $_POST['pass'];
	$role = $_POST['role'];

	if (empty($uname)) {
		$em  = "Username is required";
		header("Location:../DangNhap.php?error=$em");
		
		exit;
	}else if (empty($pass)) {
		$em  = "Password is required";
		header("Location: ../DangNhap.php?error=$em");
		exit;
	}else if (empty($role)) {
		$em  = "An error Occurred";
		header("Location: ../DangNhap.php?error=$em");
		exit;
	}else {
        
        if($role == '1'){
        	$sql = "SELECT * FROM admin
        	        WHERE fname = ?";
        	$role = "Admin";
        }else if($role == '2'){
        	$sql = "SELECT * FROM user
        	        WHERE fname = ?";
        	$role = "User";
        }
        $stmt = $conn->prepare($sql);
        $stmt->execute([$uname]);

        if ($stmt->rowCount() == 1) {
        	$user = $stmt->fetch();
        	$username = $user['fname'];
        	$password = $user['pass'];
        	
            if ($username === $uname) {
             if ($password === $pass) {
            		$_SESSION['role'] = $role;
            		if ($role == 'Admin') {
                        $id = $user['id'];
                        $_SESSION['id'] = $id;
						// $_SESSION['admin_name']=array($user['fname'],$user['lname']);
                        header("Location: ../../AdminPage/posts.html");
                        exit;
                    }else if ($role == 'User') {
                        $id = $user['id'];
                        $_SESSION['id'] = $id;
                        // header("Location:../userTest.php");

						header("Location:../../Home/index.php");
                        exit;
                    }
                    else
                    {
                    	$em  = "Incorrect Username or Password";
				        header("Location: ../DangNhap.php?error=$em");
				        exit;
                    }
				    
            	}else {
		        	$em  = "Incorrect Username or Password";
				    header("Location: ../DangNhap.php?error=$em");
				    exit;
		        }
            }else {
	        	$em  = "Incorrect Username or Password";
			    header("Location: ../DangNhap.php?error=$em");
			    exit;
	        }
        }else {
        	$em  = "Incorrect Username or Password";
		    header("Location: ../DangNhap.php?error=$em");
		    exit;
        }
	}


}else{
	header("Location: ../DangNhap.php");
	exit;
}


?>