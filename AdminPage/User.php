<?php


session_start();

// include("../Tung/DB_connection.php");

include_once("../Tung/DB_connection.php");
function getAllUser($conn)
{

       $sql = "SELECT * FROM user WHERE status =1";
       $stmt = $conn->prepare($sql);
       $stmt->execute();

       if ($stmt->rowCount() >= 1) {
              $user = $stmt->fetchAll();
              return $user;
       } else {
              return 0;
       }
}

$allUser = getAllUser($conn);

// print_r($allUser);

?>


<!DOCTYPE html>
<html lang="en">

<head>


       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Admin</title>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">



       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
       <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>


       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
       <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

       <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"> -->
       <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
       <link rel="stylesheet" href="./css/posts.css">

       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
       <script>
              $(document).ready(function() {
                     $("#myInput").on("keyup", function() {
                            var value = $(this).val().toLowerCase();
                            $("#myTable tr").filter(function() {
                                   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                            });
                     });
              });
       </script>
</head>

<body>
       <!-- start heading -->
       <header>
              <span>Admin Setting</span>
       </header>
       <!-- end -->
       <!-- start body -->
       <section class="main-content-body">
              <div class="sidebar">
                     <h3>MENU</h3>
                     <ul>
                            <li>
                                   <a href="posts.html">
                                          <span class="icon"><i class="fa fa-file-text-o" aria-hidden="true"></i></span>
                                          <span class="title">Quản lý bài đăng</span>
                                   </a>

                            </li>
                            <li>
                                   <a href="coments.html">
                                          <span class="icon"><i class="fa fa-comments" aria-hidden="true"></i></span>
                                          <span class="title">Quản lý bình luận</span>
                                   </a>

                            </li>
                            <li>
                                   <a href="User.php">
                                          <span class="icon"><i class="fa fa-users" aria-hidden="true"></i></span>
                                          <span class="title">Quản lý người dùng</span>
                                   </a>

                            </li>


                            <li>
                                   <a href="CheckComplain.php">
                                          <span class="icon"><i class="fa fa-users" aria-hidden="true"></i></span>
                                          <span class="title">Quản lý Liên Hệ</span>
                                   </a>

                            </li>

                           
                            <li>
                                   <a href="../HomeForGuest/index.html">
                                   <a href="../HomeForGuest/index.html">
                                          <span class="icon"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
                                          <span class="title">Trở về trang chủ</span>
                                   </a>

                            </li>
                     </ul>
              </div>
              <div class="post-management-page2" style="width: 80%; background-color:#2F353A ;">

                     <h3 style="text-align: center; color:wheat">Quản Lý User</h3>

                     <input id="myInput" type="text" placeholder="Search..">

                     <!-- </div> -->



                     <table class="table table-bordered ">
                            <thead>
                                   <tr class="table-success">


                                          <th scope="col">First name </th>
                                          <th scope="col">last name</th>
                                          <th scope="col">email </th>
                                          <th scope="col">Password</th>
                                          <th scope="col">Ngay sinh </th>
                                          <th scope="col">gender</th>

                                          <th scope="col">Action</th>
                                   </tr>
                            </thead>
                            <tbody id="myTable">

                                   <?php foreach ($allUser as $user) { ?>

                                          <tr style="color: white;">
                                                 <!-- <th scope="row">1</th> -->

                                                 <td><?= $user['fname'] ?></td>
                                                 <td><?= $user['lname'] ?></td>
                                                 <td><?= $user['email'] ?></td>
                                                 <td><?= $user['pass'] ?></td>
                                                 <td><?= $user['ngaysinh'] ?></td>
                                                 <td><?= $user['gender'] ?></td>
                                                 <td>


                                                        <a href="../Tung/BE/DeleteUser.php?id=<?= $user['id'] ?>" class="btn btn-danger">Ban</a>
                                                        <!-- <a href="./BL/deleteteacher.php?id=<?= $teacher['id'] ?>" class="btn btn-danger">Delete</a> -->

                                                 </td>
                                          </tr>

                                   <?php } ?>
                            </tbody>
                     </table>
              </div>
              <!-- 
              </div> -->
       </section>
       <script src="./js/posts.js"></script>
</body>

</html>