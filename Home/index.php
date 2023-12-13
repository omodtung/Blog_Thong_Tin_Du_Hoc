<?php
session_start();

include("../Tung/DB_connection.php");
function layThongTinPhiaUser($conn)
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


$user = layThongTinPhiaUser($conn);

print_r ($user);


$tenDangNhap = $user[0];

$pass = $user[4];


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">

    <script>

window.addEventListener("load", function() {
            setTimeout(
                function open(event) {
                    document.querySelector(".form-login").style.display = "block";
                },
                1000
            )
        });

    </script>
</head>

<body>
    <!-- header start -->
    <header id="header">
        <div class="line"></div>
        <div class="header-1">
            <div class="logo">
                <img src="./image/logo.png" alt="logo" width="112px" height="104px">
            </div>
            <div class="hotline">
                <img src="./image/call_header.png" alt="phone-icon">
                <div class="phone-number">
                    <h3>Hotline</h3>
                    <h3 class="sdt">0948.468.558</h3>
                </div>
            </div>
            <div class="vertical-lines"></div>
            <div class="Email">
                <img src="./image/mail_header.png" alt="mail-icon">
                <div class="email-name">
                    <h3>Email</h3>
                    <h3 class="mail">lienhe@crv.vn</h3>
                </div>

            </div>
            <div class="search">
                <form action="#">
                    <input type="text" placeholder="Enter key search">
                    <button>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
            </div>
            <div class="login">
                <img width="50px" src="./image/login.png" alt="">
            </div>
        </div>
        <div class="header-2">
            <ul>
                <li>
                    <a href="../Home/index.html"><i class="fa fa-home" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="#">
                        <h3>GIỚI THIỆU</h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>DỊCH VỤ</h3>
                    </a>

                </li>
                <li>
                    <a href="#">
                        <h3>QUỐC GIA DU HỌC</h3>
                    </a>
                    <ul class="sub-menu">
                        <li><a href="#">Du học Hàn Quốc</a></li>
                        <li><a href="#">Du học Nhật Bản</a></li>
                        <li><a href="#">Du học Đài Loan</a></li>
                    </ul>

                </li>
                <li>
                    <a href="#">
                        <h3>HỘI THẢO DU HỌC</h3>
                    </a>

                </li>
                <li>
                    <a href="#">
                        <h3>THƯ VIỆN</h3>
                    </a>

                </li>
                <li>
                    <a href="#">
                        <h3>TIN TỨC THỜI SỰ</h3>
                    </a>

                </li>
                <li>
                    <a href="../LienHe/index.html">
                        <h3>LIÊN HỆ</h3>
                    </a>
                </li>
                <li class ="admin-setting">
                    <a href="#">
                        <h3>ADMIN</h3>
                    </a>
                </li>
                <li class ="user-setting">
                    <a href="../UserPage/index.html">
                        <h3>USER</h3>
                    </a>
                </li>
            </ul>
        </div>


    </header>
    <!-- header end -->

    <!-- form login and register -->

    <!-- code Login using local storage by APu -->
    <!-- <div class="form-login">
        <img class="back-to-login" width="20px" src="./image/arrow.png" alt="">
        <img class="close-form" width="20px" src="./image/close.png" alt="">
        <h3>Đăng Nhập</h3>
        <form onsubmit="return handleSubmit()">
            <div class="login-userName">
                <input type="text" placeholder="Họ tên">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Họ tên không được để trống</span>
                </div>
            </div>
            <div class="login-id">
                <input type="text" placeholder="Tên đăng nhập" value ="<?= $tenDangNhap?>">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Tên đăng nhập không được để trống</span>
                </div>
            </div>
            <div class="login-password">
                <input type="text" placeholder="Mật khẩu" value ="<?= $pass ?>">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Mật khẩu không được để trống</span>
                </div>
            </div>
            <div class="login-repeatpass">
                <input type="text" placeholder="Nhập lại mật khẩu">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Mật khẩu lặp lại không đúng</span>
                </div>
            </div>
            <button type="submit">ĐĂNG KÝ</button>
            <div class="register" onclick="register(event)">
                <span>Bạn chưa có tài khoản ?</span>
                <a href="#">Đăng ký</a>
            </div>
        </form>
    </div> -->
    


    <div class="form-login">
        <img class="back-to-login" width="20px" src="./image/arrow.png" alt="">
        <img class="close-form" width="20px" src="./image/close.png" alt="">
        <h3>Đăng Nhập</h3>
        <form onsubmit="return handleSubmit()">
            <div class="login-userName">
                <input disabled type="text" placeholder="Họ tên" value="">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Họ tên không được để trống</span>
                </div>
            </div>
            <div class="login-id">
                <input type="text" disabled placeholder="Tên đăng nhập" value="<?= $tenDangNhap ?>">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Tên đăng nhập không được để trống</span>
                </div>
            </div>


            <div class="login-repeatpass">
                <input type="text" disabled placeholder="NL mật khẩu" value="">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Mật khẩu lặp lại không đúng</span>
                </div>
            </div>
            <div class="login-password">
                <input type="text" disabled placeholder="Mật khẩu" value="<?= $pass ?>">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Mật khẩu không được để trống</span>
                </div>
            </div>
            <!-- <div class="login-repeatpass">
                <input type="text" placeholder="Nhập lại mật khẩu" value="">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Mật khẩu lặp lại không đúng</span>
                </div>
            </div> -->
            <button type="submit">Oke</button>
            <div class="register" onclick="register(event)">
                <span>Bạn chưa có tài khoản ?</span>
                <a href="#">Đăng ký</a>
            </div>
        </form>
    </div>

<!-- code login by The Tung follow to Code Login By Apu -->
<!-- <form onsubmit="return handleSubmit()">
            <div class="login-userName">
                <input disabled type="text" placeholder="Họ tên" value="">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Họ tên không được để trống</span>
                </div>
            </div>
            <div class="login-id">
                <input type="text" disabled placeholder="Tên đăng nhập" value="<?= $tenDangNhap ?>">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Tên đăng nhập không được để trống</span>
                </div>
            </div>


            <div class="login-repeatpass">
                <input type="text" disabled placeholder="NL mật khẩu" value="">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Mật khẩu lặp lại không đúng</span>
                </div>
            </div>
            <div class="login-password">
                <input type="text" disabled placeholder="Mật khẩu" value="<?= $pass ?>">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Mật khẩu không được để trống</span>
                </div>
            </div>
            <!-- <div class="login-repeatpass">
                <input type="text" placeholder="Nhập lại mật khẩu" value="">
                <div class="warning">
                    <img src="./image/exclamation.png" alt="">
                    <span>Mật khẩu lặp lại không đúng</span>
                </div>
            </div> -->
            <button type="submit">Oke</button>
            <div class="register" onclick="register(event)">
                <span>Bạn chưa có tài khoản ?</span>
                <a href="#">Đăng ký</a>
            </div>
        <!-- </form> --> -->

    <!-- section body start -->
    <section id="body" class="main-content-body">
        
        <div class="image-study-abroad">
            <img src="./image/banner-du-học.png" alt="image-1">
            <img src="./image/banner-web-du-hoc-1900x630.jpg" alt="image-2">
            <img src="./image/banner.jpg" alt="image-3">
        </div>
        <div class="About-us">
            <div class="infor">
                <div class="text-1">
                    <h3>VỀ CHÚNG TÔI</h3>
                    <div class="line"></div>
                </div>
                <div class="text-2">
                    <h2>CREATIVE VIỆT NAM</h2>
                </div>
                <div class="paragraph">
                    <p>Công ty CP Đào tạo và Cung ứng nhân lực quốc tế OKIO là doanh nghiệp thành lập từ năm 2007 hoạt
                        động trong lĩnh vực đào tạo du học, với thị trường chiến lược là Nhật Bản. OKIO được Sở Giáo dục
                        và Đào tạo Hà Nội cấp giấy phép đào tạo ngoại ngữ số 5489/CN-SGD&ĐT và giấy phép tư vấn du học
                        số 2910/CN-SGD&ĐT. Tới nay, sau hơn 12 năm, OKIO tự hào là doanh nghiệp hàng đầu về du học Nhật
                        Bản tại Hà Nội nói riêng và cả nước nói chung, là nơi chắp cánh cho hơn 4000 bạn trẻ đến Nhật
                        Bản học tập và làm việc.</p>
                </div>
                <div class="button-watch-more">
                    <a href="#">Xem thêm <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div class="image-about-us">
                <img src="./image/anhgioithieu.jpg" alt="">
            </div>
        </div>
        <div class="study-abroad-modules">
            <ul>
                <li class="abroad-module-1">
                    <div class="image-abroad">
                        <img src="./image/japan-page-header-200x200.jpg" alt="image-japan">
                        <img src="./image/boxshadow_thumb.jpg" alt="">
                    </div>
                    <div class="name-abroad">
                        <a href="#">
                            <h3>DU HỌC NHẬT BẢN</h3>
                        </a>
                    </div>
                    <div class="infor-abroad">
                        <p>Nhật Bản – xứ sở hoa anh đào là đất nước phát triển bậc nhất trên thế giới cả về kinh tế và
                            giáo dục. Du học Nhật Bản là ước mơ của không ít bạn trẻ Việt Nam</p>
                    </div>
                    <div class="button-watch-more">
                        <a href="#">Xem thêm <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>

                </li>
                <li class="abroad-module-2">
                    <div class="image-abroad">
                        <img src="./image/3228-1-200x200.jpg" alt="image-HanQuoc">
                        <img src="./image/boxshadow_thumb.jpg" alt="">
                    </div>
                    <div class="name-abroad">
                        <a href="#">
                            <h3>DU HỌC HÀN QUỐC</h3>
                        </a>
                    </div>
                    <div class="infor-abroad">
                        <p>Du học Hàn Quốc ngày càng được nhiều sinh viên và phụ huynh quan tâm. Nền giáo dục bậc cao
                            của Hàn Quốc ngày nay đã sánh ngang với các nước phát triển trên thế giới.</p>
                    </div>
                    <div class="button-watch-more">
                        <a href="#">Xem thêm <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </li>
                <li class="abroad-module-3">
                    <div class="image-abroad">
                        <img src="./image/3085-200x200.jpg" alt="image">
                        <img src="./image/boxshadow_thumb.jpg" alt="">
                    </div>
                    <div class="name-abroad">
                        <a href="#">
                            <h3>DU HỌC ĐÀI LOAN</h3>
                        </a>
                    </div>
                    <div class="infor-abroad">
                        <p>Du học Đài Loan đang ngày càng được các bạn trẻ quan tâm bởi chất lượng đào tạo vượt trội của
                            các trường đại học nơi đây.</p>
                    </div>
                    <div class="button-watch-more">
                        <a href="#">Xem thêm <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="admissions-information posts-1">
            <div class="admissions-news">
                <h2>THÔNG TIN TUYỂN SINH</h2>
                <div class="line"></div>
                <div class="container-news">
                    <div class="container-left">
                        <!-- <div class="image-news">
                            <img src="./image/457-1593405900-1661-1593422718-326x220.png" alt="">
                        </div>
                        <div class="name-news">
                            <a href="#">
                                <h3>TẦM QUAN TRỌNG CỦA HOẠT ĐỘNG NGOẠI KHÓA TRONG HỒ SƠ DU HỌC</h3>
                            </a>
                        </div>
                        <div class="calender-watch">
                            <span class="calender">
                                <i class="fa fa-calendar" aria-hidden="true"><span>06/07/2020</span></i>
                            </span>
                            <span class="watch">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                                <span>3 lượt xem</span>
                            </span>
                        </div>
                        <p>
                            Bên cạnh điểm SAT, hoạt động ngoại khoá nổi bật là điều kiện cần thiết khi nộp hồ sơ vào...
                        </p>
                        <div class="button-watch-more">
                            <a href="#">Xem chi tiết <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        </div> -->
                    </div>
                    <div class="container-right">
                        <ul>
                            <!-- <li class="content">
                                <div class="image-news">
                                    <img src="./image/a1-5783-1593596508-140x93.jpg" alt="">
                                </div>
                                <div class="name-news">
                                    <a href="#">
                                        <h3>CÁCH VIẾT MỘT BÀI TỰ LUẬN ẤN TƯỢNG VÀO ĐẠI HỌC MỸ</h3>
                                    </a>
                                </div>
                                <div class="calender-watch">
                                    <span class="calender">
                                        <i class="fa fa-calendar" aria-hidden="true"><span>06/07/2020</span></i>
                                    </span>
                                    <span class="watch">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <span>3 lượt xem</span>
                                    </span>
                                </div>
                                <p>
                                    Một bài luận ấn tượng cần súc tích, đồng nhất, trung thực và thể hiện sự thông minh,
                                    cuốn hút...
                                </p>
                                <div class="line"></div>
                            </li>
                            <li class="content">
                                <div class="image-news">
                                    <img src="./image/image002-2916-1593775180-140x93.jpg" alt="">
                                </div>
                                <div class="name-news">
                                    <a href="#">
                                        <h3>HỘI THẢO ONLINE CÙNG UNIVERSITY OF MELBOURNE-...</h3>
                                    </a>
                                </div>
                                <div class="calender-watch">
                                    <span class="calender">
                                        <i class="fa fa-calendar" aria-hidden="true"><span>06/07/2020</span></i>
                                    </span>
                                    <span class="watch">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <span>3 lượt xem</span>
                                    </span>
                                </div>
                                <p>
                                    Đại hội thảo online, đại diện University of Melbourne & Trinity College sẽ giải đáp
                                    các thắc mắc về học...
                                </p>
                                <div class="line"></div>
                            </li>
                            <li class="content">
                                <div class="image-news">
                                    <img src="./image/2-1593659130-5746-1593659246-140x93.jpg" alt="">
                                </div>
                                <div class="name-news">
                                    <a href="#">
                                        <h3>VÌ SAO AUTRALIA MUỐN MỞ CỬA BIÊN GIỚI ĐÓN DU HỌC...</h3>
                                    </a>
                                </div>
                                <div class="calender-watch">
                                    <span class="calender">
                                        <i class="fa fa-calendar" aria-hidden="true"><span>06/07/2020</span></i>
                                    </span>
                                    <span class="watch">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <span>3 lượt xem</span>
                                    </span>
                                </div>
                                <p>
                                    Đại hội thảo online, đại diện University of Melbourne & Trinity College sẽ giải đáp
                                    các thắc mắc về học...
                                </p>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form-admissions">
                <div class="name-form">
                    <h2>ĐĂNG KÝ TƯ VẤN</h2>
                </div>
                <p>
                    Vui lòng để lại thông tin để nhận được những ưu đãi tốt nhất từ chúng tôi
                </p>
                <form action="#">
                    <input type="text" placeholder="Họ và tên">
                    <input type="text" placeholder="Điện thoại">
                    <input type="text" placeholder="Email của bạn">
                    <textarea name="" id="" cols="30" rows="5" placeholder="Nội dung"></textarea>
                    <button type="submit" class="button-watch-more">
                        <a href="#">Gửi yêu cầu</a>
                    </button>
                </form>
            </div>
        </div>
        <div class="statistical">
            <ul>
                <li class="customer">
                    <img src="./image/icon_khachhang.png" alt="customer">
                    <h2>1000</h2>
                    <h3>KHÁCH HÀNG TIN TƯỞNG</h3>
                </li>
                <li class="partner">
                    <img src="./image/icon_doitac.png" alt="customer">
                    <h2>100</h2>
                    <h3>ĐỐI TÁC TRONG KHU VỰC</h3>
                </li>
                <li class="experience">
                    <img src="./image/icon_kinhnghiem.png" alt="customer">
                    <h2>10</h2>
                    <h3>TRÊN 10 NĂM KINH NGHIỆM</h3>
                </li>
                <li class="enthusiastic-staff">
                    <img src="./image/icon_nhanvien.png" alt="customer">
                    <h2>100</h2>
                    <h3>NHÂN VIÊN NHIỆT HUYẾT</h3>
                </li>
            </ul>
        </div>
        <div class="study-abroad-guide">
            <h2>CẨM NANG DU HỌC</h2>
            <a href="#">Xem thêm</a>
            <div class="line"></div>
        </div>
        <div class="admissions-information posts-2">
            <div class="admissions-news">
                <div class="container-news">
                    <div class="container-left">
                        <!-- <div class="image-news">
                            <img src="./image/457-1593405900-1661-1593422718-326x220.png" alt="">
                        </div>
                        <div class="name-news">
                            <a href="#">
                                <h3>TẦM QUAN TRỌNG CỦA HOẠT ĐỘNG NGOẠI KHÓA TRONG HỒ SƠ DU HỌC</h3>
                            </a>
                        </div>
                        <div class="calender-watch">
                            <span class="calender">
                                <i class="fa fa-calendar" aria-hidden="true"><span>06/07/2020</span></i>
                            </span>
                            <span class="watch">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                                <span>3 lượt xem</span>
                            </span>
                        </div>
                        <p>
                            Bên cạnh điểm SAT, hoạt động ngoại khoá nổi bật là điều kiện cần thiết khi nộp hồ sơ vào...
                        </p>
                        <div class="button-watch-more">
                            <a href="#">Xem chi tiết <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        </div> -->
                    </div>
                    <div class="container-right">
                        <ul>
                            <!-- <li class="content">
                                <div class="image-news">
                                    <img src="./image/a1-5783-1593596508-140x93.jpg" alt="">
                                </div>
                                <div class="name-news">
                                    <a href="#">
                                        <h3>CÁCH VIẾT MỘT BÀI TỰ LUẬN ẤN TƯỢNG VÀO ĐẠI HỌC MỸ</h3>
                                    </a>
                                </div>
                                <div class="calender-watch">
                                    <span class="calender">
                                        <i class="fa fa-calendar" aria-hidden="true"><span>06/07/2020</span></i>
                                    </span>
                                    <span class="watch">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <span>3 lượt xem</span>
                                    </span>
                                </div>
                                <p>
                                    Một bài luận ấn tượng cần súc tích, đồng nhất, trung thực và thể hiện sự thông minh,
                                    cuốn hút...
                                </p>
                                <div class="line"></div>
                            </li>
                            <li class="content">
                                <div class="image-news">
                                    <img src="./image/image002-2916-1593775180-140x93.jpg" alt="">
                                </div>
                                <div class="name-news">
                                    <a href="#">
                                        <h3>HỘI THẢO ONLINE CÙNG UNIVERSITY OF MELBOURNE-...</h3>
                                    </a>
                                </div>
                                <div class="calender-watch">
                                    <span class="calender">
                                        <i class="fa fa-calendar" aria-hidden="true"><span>06/07/2020</span></i>
                                    </span>
                                    <span class="watch">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <span>3 lượt xem</span>
                                    </span>
                                </div>
                                <p>
                                    Đại hội thảo online, đại diện University of Melbourne & Trinity College sẽ giải đáp
                                    các thắc mắc về học...
                                </p>
                                <div class="line"></div>
                            </li>
                            <li class="content">
                                <div class="image-news">
                                    <img src="./image/sinh-vien-2886-1593765145-140x93.jpg" alt="">
                                </div>
                                <div class="name-news">
                                    <a href="#">
                                        <h3>ĐẠI HỌC ADELAIDE, AUSTRALIA CẤP HỌC BỔNG LÊN TỚI 50% </h3>
                                    </a>
                                </div>
                                <div class="calender-watch">
                                    <span class="calender">
                                        <i class="fa fa-calendar" aria-hidden="true"><span>06/07/2020</span></i>
                                    </span>
                                    <span class="watch">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <span>3 lượt xem</span>
                                    </span>
                                </div>
                                <p>
                                    Trường ĐH Adelaide cấp học bổng đến 50% học phí cho chương trình cử nhân và thạc sĩ
                                    tín chỉ....
                                </p>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
            <div class="image-japan">
                <img src="./image/anh2.jpg" alt="japan">
            </div>
        </div>
    </section>
    <!-- section body end -->
    <!-- footer start -->
    <footer>
        <div class="footer-1">
            <div class="partner-container">
                <img src="./image/doitac1.png" alt="">
                <img src="./image/doitac2.jpg" alt="">
                <img src="./image/doitac3.jpg" alt="">
                <img src="./image/doitac4.jpg" alt="">
                <img src="./image/doitac5.jpg" alt="">
                <img src="./image/doitac6.jpg" alt="">
            </div>
        </div>
        <div class="footer-2">
            <div class="company-information">
                <h3>CÔNG TY DU HỌC VIỆT NAM</h3>
                <div class="line"></div>
                <ul>
                    <li>
                        <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span>
                        <span class="text">Địa chỉ : N06, 82 Nguyễn Tuân, Thanh Xuân, HN</span>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <span class="text">Hotline : 0973872184 - 0834570092</span>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <span class="text">Email: lienhe@crv.vn</span>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-globe" aria-hidden="true"></i></span>
                        <span class="text">Website: thietkewebsite.pro.vn</span>
                    </li>
                </ul>
            </div>
            <div class="access-quickly">
                <h3>TRUY CẬP NHANH</h3>
                <div class="line"></div>
                <ul>
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Dịch vụ</a></li>
                    <li>
                        <a href="#">Quốc gia du học</a>
                        <ul class="list-study-abroad-country">
                            <li><a href="#">Du học Hàn Quốc</a></li>
                            <li><a href="#">Du học Nhật Bản</a></li>
                            <li><a href="#">Du học Đài Loan</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Hội thảo du học</a></li>
                    <li><a href="#">Thư viện</a></li>
                    <li><a href="#">Tin tức, sự kiện</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
            </div>
            <div class="fanpage">
                <h3>FANPAGE</h3>
                <div class="line"></div>
                <a href="https://www.facebook.com/"><img src="./image/Ảnh chụp màn hình 2023-10-19 120620.png"
                        alt=""></a>
            </div>
            <div class="button-to-top">
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
            <div class="people-create">
                <h3>Copyright @PhucApuTruong. All rights reserved.</h3>
            </div>
        </div>
    </footer>
    <script lang="Javascript" src="./Js/index.js"></script>
     <!-- <script src="../storage/datapost.js"></script> -->
    <!-- <script src="../storage/dataComent.js"></script> -->
    <!-- <script src="../storage/dataUser.js"></script>  -->
</body>

</html>