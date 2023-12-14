// chuyen dong scroll len dau trang
let header_element = document.querySelector("#head"); // lấy id của header
let buton = document.querySelector(".button-to-top"); // lấy class của nút trở lên trang nhất
buton.onclick = () => {
    delayLoop(0, 1);
};

/// cho nay ben lien he chua co do chua co JS login
window.addEventListener("resize", function () {
    if (isLogin() != null) {
        this.document.querySelector(".login").style.display = "none";
    } else {
        if (this.window.innerWidth > 1024) {
            this.document.querySelector(".login").style.display = "flex";
        } else {
            this.document.querySelector(".login").style.display = "none";
        }
    }
});

window.addEventListener("load", function () {
    if (this.window.innerWidth >= 1026) {
        this.document.querySelector(".login").style.display = "flex";
        iconLogin();
    } else {
        this.document.querySelector(".login").style.display = "none";
        // iconLogin();
    }
});

function delayLoop(iterations, delay) {
    let count = window.scrollY;

    const intervalId = setInterval(function () {
        //   console.log('Lần lặp thứ', count);
        window.scrollTo(0, count);
        count -= 10;

        if (count <= iterations) {
            clearInterval(intervalId); // Dừng lặp khi đạt số lần lặp
            buton.style.display = "none";
        }
    }, delay);
}
// chuyen dong header
window.addEventListener("scroll", function () {
    const x = window.scrollX;
    const y = window.scrollY;

    if (this.window.innerWidth >= 1026) {
        if (Math.round(y) > 50) {
            header_element.classList.add("closes");
            buton.style.display = "flex";
        } else {
            header_element.classList.remove("closes");
            buton.style.display = "none";
        }
    } else {
        if (Math.round(y) > 10) {
            header_element.classList.add("close_mobile");
            buton.style.display = "flex";
        } else {
            header_element.classList.remove("close_mobile");
            buton.style.display = "none";
        }
    }
});

// post chinh
function postMain_articles(container) {
    // truy suat container chua no
    let containerPosts = document.querySelector(container);
    // lấy dữ liệu các bài đăng
    let posts = window.localStorage.getItem("post");
    let postArr = JSON.parse(posts);
    let sizeArr = postArr.length;
    let post = null;
    while (true) {
        let randomNumber = Math.floor(Math.random() * sizeArr);
        post = postArr[randomNumber];
        if (post.isPost == "1") {
            break;
        }
    }
    let pathText = post.path;
    if (containerPosts) {
        fetch(pathText)
            .then((response) => response.text())
            .then((content) => {
                let paragraphs = content.split("\n");
                let array = [];
                let pictureURL = "";
                let pictureString = "";
                let valueHeading = "";
                let HeadingString = "";
                let introductory_paragraph = "";
                paragraphs.forEach((item) => {
                    if (item.startsWith("Picture") && pictureURL == "") {
                        // Xử lý khi gặp dòng bắt đầu bằng 'Picture'
                        // ...
                        var startIdxURL = item.indexOf('"');
                        var endIdxURL = item.indexOf('"', startIdxURL + 1);
                        pictureURL = item.substring(startIdxURL + 1, endIdxURL);
                        console.log(pictureURL);

                        pictureString = `
                                                        <div class="image-news">
                                                               <img src="${pictureURL}" alt="">
                                                        </div>
                                                 `;
                    } else if (
                        item.startsWith("Heading") &&
                        valueHeading == ""
                    ) {
                        // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
                        // ...
                        var startIdxHeading = item.indexOf('"');
                        var endIdxHeading = item.indexOf(
                            '"',
                            startIdxHeading + 1
                        );
                        valueHeading = item.substring(
                            startIdxHeading + 1,
                            endIdxHeading
                        );

                        HeadingString = `
                                                        <div class="name-news">
                                                               <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                                                      <h3>${valueHeading}</h3>
                                                               </a>
                                                        </div>
                                                 `;
                    } else if (introductory_paragraph == "") {
                        introductory_paragraph = item.slice(0, 100) + "...";
                    }
                });
                // form
                array.push(pictureString);
                array.push(HeadingString);

                // luot xem va ngay post
                let watch_date = `
                                          <div class="calender-watch">
                                                 <span class="calender">
                                                        <i class="fa fa-calendar" aria-hidden="true"><span>${post.datePost}</span></i>
                                                 </span>
                                                 <span class="watch">
                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                        <span>${post.view} lượt xem</span>
                                                 </span>
                                          </div>
                                   `;
                array.push(watch_date);

                // text giới thiệu
                let introductory = `
                                          <p>${introductory_paragraph}</p>
                                   `;
                array.push(introductory);

                // them bai post

                containerPosts.innerHTML = ` ${array.join("")} 
                                   
                                   <div class="button-watch-more">
                                          <a href="#" id="${
                                              post.id
                                          }" onclick="setStatePost(event,'${
                    post.id
                }')">Xem chi tiết <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                                   </div>
                                   
                                   `;
            })
            .catch((error) => {
                console.error("Lỗi:", error);
            });
    }
}

// post phu
function post_articles(container, numberOfPost, footerContainer) {
    // truy suat container chua no
    let containerPosts = document.querySelector(container);
    // lấy dữ liệu các bài đăng
    let posts = window.localStorage.getItem("post");
    let postArr = JSON.parse(posts);
    let sizeArr = postArr.length;
    let isPost = []; // kiểm tra xem bài đăng nào đã được đăng lên container
    // khởi tạo mảng với giá trị các bài đăng ban đầu đều là false
    postArr.forEach((value) => {
        isPost.push(false);
    });
    // chọn bài đăng một cách ngẫu nhiên
    for (let i = 0; i < numberOfPost; ) {
        let randomNumber = Math.floor(Math.random() * sizeArr);
        if (isPost[randomNumber] == false) {
            isPost[randomNumber] = true;
            let post = postArr[randomNumber];
            if (post.isPost == "1") {
                let pathText = post.path;
                i++;
                if (containerPosts) {
                    fetch(pathText)
                        .then((response) => response.text())
                        .then((content) => {
                            let paragraphs = content.split("\n");
                            let array = [];
                            let pictureURL = "";
                            let pictureString = "";
                            let valueHeading = "";
                            let HeadingString = "";
                            let introductory_paragraph = "";
                            paragraphs.forEach((item) => {
                                if (
                                    item.startsWith("Picture") &&
                                    pictureURL == ""
                                ) {
                                    // Xử lý khi gặp dòng bắt đầu bằng 'Picture'
                                    // ...
                                    var startIdxURL = item.indexOf('"');
                                    var endIdxURL = item.indexOf(
                                        '"',
                                        startIdxURL + 1
                                    );
                                    pictureURL = item.substring(
                                        startIdxURL + 1,
                                        endIdxURL
                                    );
                                    console.log(pictureURL);

                                    pictureString = `
                                                        <div class="image-news">
                                                               <img src="${pictureURL}" alt="">
                                                        </div>
                                                 `;
                                } else if (
                                    item.startsWith("Heading") &&
                                    valueHeading == ""
                                ) {
                                    // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
                                    // ...
                                    var startIdxHeading = item.indexOf('"');
                                    var endIdxHeading = item.indexOf(
                                        '"',
                                        startIdxHeading + 1
                                    );
                                    valueHeading = item.substring(
                                        startIdxHeading + 1,
                                        endIdxHeading
                                    );
                                    valueHeading =
                                        valueHeading.slice(0, 47) + "...";
                                    HeadingString = `
                                                        <div class="name-news">
                                                               <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                                                      <h3>${valueHeading}</h3>
                                                               </a>
                                                        </div>
                                                 `;
                                } else if (introductory_paragraph == "") {
                                    introductory_paragraph =
                                        item.slice(0, 100) + "...";
                                }
                            });
                            // form
                            array.push(pictureString);
                            array.push(HeadingString);

                            // luot xem va ngay post
                            let watch_date = `
                                          <div class="calender-watch">
                                                 <span class="calender">
                                                        <i class="fa fa-calendar" aria-hidden="true"><span>${post.datePost}</span></i>
                                                 </span>
                                                 <span class="watch">
                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                        <span>${post.view} lượt xem</span>
                                                 </span>
                                          </div>
                                   `;
                            array.push(watch_date);

                            // text giới thiệu
                            let introductory = `
                                          <p>${introductory_paragraph}</p>
                                   `;
                            array.push(introductory);

                            // them bai post

                            let li = document.createElement("li");
                            li.className = "content";
                            console.log(i);
                            if (i < numberOfPost) {
                                li.innerHTML = `${array.join("")}
                                                        ${footerContainer}
                                                        `;
                            } else {
                                li.innerHTML = `${array.join("")}
                                                        `;
                            }
                            containerPosts.appendChild(li);
                        })
                        .catch((error) => {
                            console.error("Lỗi:", error);
                        });
                }
            }
        }
    }
}
// posts thong tin tuyen sinh
post_articles(
    ".posts-1 .admissions-news .container-right ul",
    3,
    `<div class="line"></div>`
);
postMain_articles(".posts-1 .admissions-news .container-left");
// posts cam nang du hoc
post_articles(
    ".posts-2 .admissions-news .container-right ul",
    3,
    `<div class="line"></div>`
);
postMain_articles(".posts-2 .admissions-news .container-left");

// function click chon xem bai

function setStatePost(event, valueId) {
    // Ngăn chặn hành động mặc định của thẻ a
    event.preventDefault();

    let storePost = window.localStorage.getItem("post");
    let arr = JSON.parse(storePost);

    arr.forEach((value) => {
        if (value.id == valueId) {
            console.log(value);
            value.state = 1;
            let numberView = Number(value.view) + 1;
            value.view = numberView;
        } else {
            value.state = 0;
        }
    });
    let temp = JSON.stringify(arr);
    window.localStorage.setItem("post", temp);
    window.location.href = "../ThongTinBai/index.html";
}

// data dùng cho đăng nhập
const temp = window.localStorage.getItem("user");
const users = JSON.parse(temp);

// show đăng nhập và đăng ký

// reset input
function resetInput() {
    let userId = document.querySelector(".form-login form .login-id input");
    let passWord = document.querySelector(
        ".form-login form .login-password input"
    );
    let fullName = document.querySelector(
        ".form-login form .login-userName input"
    );
    let repeatPass = document.querySelector(
        ".form-login form .login-repeatpass input"
    );
    userId.value = "";
    passWord.value = "";
    fullName.value = "";
    repeatPass.value = "";
}

// login form
function loginForm() {
    let section = document.querySelector("section");
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");
    let body = document.querySelector("body");
    section.classList.add("disable");
    header.classList.add("disable");
    footer.classList.add("disable");
    body.style.overflow = "hidden";

    // vô hiệu hóa tên và nhập lại mật khẩu (đăng ký)
    let userInput = document.querySelector(".form-login form .login-userName");
    let repeatPass = document.querySelector(
        ".form-login form .login-repeatpass"
    );
    userInput.style.display = "none";
    repeatPass.style.display = "none";

    // chỉnh lại tên form
    let nameForm = document.querySelector(".form-login h3");
    nameForm.innerHTML = "Đăng Nhập";

    // chỉnh tên nút
    let buttonSubmit = document.querySelector(".form-login form button");
    buttonSubmit.innerHTML = "Đăng nhập";

    // hiện dòng "bạn muốn đăng ký bên form đăng nhập"
    let sign = document.querySelector(".form-login form .register");
    sign.style.display = "block";

    // ẩn nút back
    let backIcon = document.querySelector(".form-login .back-to-login");
    backIcon.style.display = "none";
}
// register form
function registerForm() {
    // vô hiệu hóa tên và nhập lại mật khẩu (đăng ký)
    let userInput = document.querySelector(".form-login form .login-userName");
    let repeatPass = document.querySelector(
        ".form-login form .login-repeatpass"
    );
    userInput.style.display = "block";
    repeatPass.style.display = "block";

    // chỉnh lại tên form
    let nameForm = document.querySelector(".form-login h3");
    nameForm.innerHTML = "Đăng Ký";

    // ẩn dòng "bạn muốn đăng ký bên form đăng nhập"
    let sign = document.querySelector(".form-login form .register");
    sign.style.display = "none";

    // chỉnh tên nút
    let buttonSubmit = document.querySelector(".form-login form button");
    buttonSubmit.innerHTML = "Đăng ký";

    // hiện nút back
    let backIcon = document.querySelector(".form-login .back-to-login");
    backIcon.style.display = "block";
}

// show login
function login(event) {
    // let startLogin = document.querySelector(".header-phat .login");
    // let form = document.querySelector(".form-login");
    // let startLogin_toMobile = document.querySelector(".login-mobile");
    // startLogin.addEventListener("click", () => {
    //     form.style.display = "flex";
    //     loginForm();
    // });
    // startLogin_toMobile.addEventListener("click", () => {
    //     form.style.display = "flex";
    //     loginForm();
    // });
    let form = document.querySelector(".form-login");
    event.preventDefault();
    form.style.display = "flex";
    loginForm();
}
// login();
// show register
function register(event) {
    // ngăn chặn hành đông thẻ a
    event.preventDefault();
    registerForm();
}
// quay lại form đăng nhập
function backLogin() {
    let backIcon = document.querySelector(".form-login .back-to-login");
    backIcon.addEventListener("click", () => {
        loginForm();
        resetInput();
    });
}
backLogin();
// close form

function closeForm() {
    let form = document.querySelector(".form-login");
    form.style.display = "none";
    // hiện lại mọi thử xung quanh
    let section = document.querySelector("section");
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");
    let body = document.querySelector("body");
    section.classList.remove("disable");
    header.classList.remove("disable");
    footer.classList.remove("disable");
    body.style.overflow = "auto";
}

function X_closeForm() {
    let closeIcon = document.querySelector(".form-login .close-form");
    closeIcon.addEventListener("click", () => {
        closeForm();
        resetInput();
    });
}
X_closeForm();

// kiểm tra thong tin đăng nhập và đăng ký

function warningUserId(message, isShow) {
    let warning = document.querySelector(".form-login form .login-id .warning");
    let responseMess = document.querySelector(
        ".form-login form .login-id .warning span"
    );
    if (isShow == true) {
        warning.style.visibility = "visible";
        responseMess.innerHTML = message;
    } else {
        warning.style.visibility = "hidden";
    }
}
function warningPass(message, isShow) {
    let warning = document.querySelector(
        ".form-login form .login-password .warning"
    );
    let responseMess = document.querySelector(
        ".form-login form .login-password .warning span"
    );
    if (isShow == true) {
        warning.style.visibility = "visible";
        responseMess.innerHTML = message;
    } else {
        warning.style.visibility = "hidden";
    }
}
function warningFullName(message, isShow) {
    let warning = document.querySelector(
        ".form-login form .login-userName .warning"
    );
    let responseMess = document.querySelector(
        ".form-login form .login-userName .warning span"
    );
    if (isShow == true) {
        warning.style.visibility = "visible";
        responseMess.innerHTML = message;
    } else {
        warning.style.visibility = "hidden";
    }
}
function warningRepeatPass(message, isShow) {
    let warning = document.querySelector(
        ".form-login form .login-repeatpass .warning"
    );
    let responseMess = document.querySelector(
        ".form-login form .login-repeatpass .warning span"
    );
    if (isShow == true) {
        warning.style.visibility = "visible";
        responseMess.innerHTML = message;
    } else {
        warning.style.visibility = "hidden";
    }
}

function checkFullName(value) {
    if (value.length <= 0) {
        warningFullName("Họ và tên không được bỏ trống", true);
        return false;
    } else if (value.length > 20) {
        warningFullName("Tên đăng nhập bé hơn 20 ký tự", true);
        return false;
    }
    warningFullName("", false);
    return true;
}

function checkIdUser(value) {
    if (value.length <= 0) {
        warningUserId("Tên đăng nhập không được bỏ trống", true);
        return false;
    } else if (value.length > 8) {
        warningUserId("Tên đăng nhập phải bé hơn 8 ký tự", true);
        return false;
    }
    warningUserId("", false);
    return true;
}

function checkPass(value) {
    if (value.length <= 0) {
        warningPass("Mật khẩu không được bỏ trống", true);
        return false;
    } else if (value.length > 15) {
        warningPass("Mật khẩu phải bé hơn 16 ký tự", true);
        return false;
    }
    warningPass("", false);
    return true;
}

function checkRePass(valuePass, valueRepeatPass) {
    if (valuePass == valueRepeatPass) {
        warningRepeatPass("", false);
        return true;
    }
    warningRepeatPass("Mật khẩu lặp lại không đúng", true);
    return false;
}

function checkBan(idUser) {
    let use = window.localStorage.getItem("user");
    let userArr = JSON.parse(use);

    for (let i = 0; i < userArr.length; i++) {
        let value = userArr[i];
        if (value.idUser == idUser) {
            if (value.state == "1") {
                return false;
            } else {
                console.log(1);
                window.alert(
                    "Tài khoản của bạn đã bị khóa! Hãy liên hệ ban quản trị để mở khóa"
                );
                return true;
            }
        }
    }

    // Nếu không tìm thấy người dùng, có thể xem xét trạng thái mặc định nếu cần
    return false;
}

function setStateLogin(userId) {
    users.forEach((value) => {
        if (value.idUser == userId) {
            value.stateLogin = "1";
        } else {
            value.stateLogin = "0";
        }
    });
    let temp = JSON.stringify(users);
    window.localStorage.setItem("user", temp);
}

function checkLogin(userId, passWord) {
    //
    if (checkIdUser(userId) == true && checkPass(passWord) == true) {
        let check = 0;
        if (checkBan(userId) == false) {
            users.forEach((value) => {
                if (value.idUser == userId && value.Password == passWord) {
                    check = 1;
                    setStateLogin(userId);
                    // kiểm tra xem có phải admin không
                    let adminSetting = document.querySelector(".admin-setting");
                    let adminSetting_onMobile = document.querySelector(
                        ".nav_mobile .admin-setting"
                    );
                    let userSetting = document.querySelector(".user-setting");
                    let userSetting_onMobile = document.querySelector(
                        ".nav_mobile .user-setting"
                    );
                    if (value.role == "admin") {
                        // hiện trang admin
                        adminSetting.style.display = "block";
                        adminSetting_onMobile.style.display = "block";
                        userSetting.style.display = "none";
                        userSetting_onMobile.style.display = "none";
                    } else {
                        adminSetting.style.display = "none";
                        adminSetting_onMobile.style.display = "none";
                        userSetting.style.display = "block";
                        userSetting_onMobile.style.display = "block";
                    }
                }
            });
        }
        if (check == 1) {
            return true;
        } else {
            warningUserId("Kiểm tra lại tên đăng nhập", true);
            warningPass("Kiểm tra lại mật khẩu", true);
            return false;
        }
    }
    return false;
}

function checkRegister(fullName, userId, passWord, repeatPass) {
    if (
        checkIdUser(userId) == true &&
        checkPass(passWord) == true &&
        checkFullName(fullName) == true &&
        checkRePass(passWord, repeatPass)
    ) {
        // kiểm tra xem có trùng idUser không
        let check = 0;
        users.forEach((value) => {
            if (value.idUser == userId) {
                check = 1;
            }
        });
        if (check == 1) {
            warningUserId("Tên đăng nhập đã được sử dụng", true);
            return false;
        } else {
            // tạo object user mới
            let user = {
                fullName: fullName,
                idUser: userId,
                Password: passWord,
                role: "user",
                stateLogin: "0",
                state: "1",
            };
            users.push(user);
            let temp = JSON.stringify(users);
            window.localStorage.setItem("user", temp);

            // kiểm tra xem có phải admin không
            let adminSetting = document.querySelector(".admin-setting");
            let adminSetting_onMobile = document.querySelector(
                ".nav_mobile .admin-setting"
            );
            let userSetting_onMobile = document.querySelector(
                ".nav_mobile .user-setting"
            );
            let userSetting = document.querySelector(".user-setting");
            if (user.role == "admin") {
                // hiện trang admin
                adminSetting.style.display = "block";
                adminSetting_onMobile.style.display = "block";
                userSetting.style.display = "none";
                userSetting_onMobile.style.display = "none";
            } else {
                adminSetting.style.display = "none";
                adminSetting_onMobile.style.display = "none";
                userSetting.style.display = "block";
                userSetting_onMobile.style.display = "block";
            }

            setStateLogin(userId);
            return true;
        }
    } else {
        return false;
    }
}

function handleSubmit() {
    // Thực hiện xử lý form, kiểm tra giá trị, gửi dữ liệu, ...
    let submitButton = document.querySelector(".form-login form button");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        let userId = document.querySelector(
            ".form-login form .login-id input"
        ).value;
        let passWord = document.querySelector(
            ".form-login form .login-password input"
        ).value;
        let fullName = document.querySelector(
            ".form-login form .login-userName input"
        ).value;
        let repeatPass = document.querySelector(
            ".form-login form .login-repeatpass input"
        ).value;
        if (
            userId != "" &&
            passWord != "" &&
            fullName == "" &&
            repeatPass == ""
        ) {
            if (checkLogin(userId, passWord) == true) {
                console.log("ok ne");
                window.alert("Đăng nhập thành công");
                closeForm();
                iconLogin();
                resetInput();
            }
        } else {
            if (checkRegister(fullName, userId, passWord, repeatPass) == true) {
                window.alert("Đăng ký thành công");
                closeForm();
                iconLogin();
                resetInput();
            }
        }
    });
    // Ngăn chặn chuyển trang
    return false;
}

// ẩn biểu tượng đăng nhập khi thực hiện đăng nhập thành công
function iconLogin() {
    let icon = document.querySelector(".login");
    let login_inMobile = document.querySelector(".nav_mobile .login-mobile");
    if (isLogin() != null) {
        icon.style.display = "none";
        login_inMobile.style.display = "none";
    } else {
        icon.style.display = "block";
        login_inMobile.style.display = "block";
    }
}

// kiểm tra xem có người đăng nhập hay chưa
function isLogin() {
    let user = window.localStorage.getItem("user");
    let users = JSON.parse(user);
    let flag = 0;
    let objUser = {};
    users.forEach((value) => {
        if (value.stateLogin == "1") {
            flag = 1;
            objUser = value;
        }
    });

    if (flag == 1) {
        return objUser;
    } else {
        return null;
    }
}

// set  up
function setUpLogin() {
    let adminSetting = document.querySelector(".admin-setting");
    let adminSetting_onMobile = document.querySelector(
        ".nav_mobile .admin-setting"
    );
    let userSetting = document.querySelector(".user-setting");
    let userSetting_onMobile = document.querySelector(
        ".nav_mobile .user-setting"
    );
    iconLogin();
    if (isLogin() != null) {
        let objUser = isLogin();
        //  kiểm tra xem có phải admin không

        if (objUser.role == "admin") {
            // hiện trang admin
            adminSetting.style.display = "block";
            adminSetting_onMobile.style.display = "block";
            userSetting.style.display = "none";
            userSetting_onMobile.style.display = "none";
        } else {
            adminSetting.style.display = "none";
            adminSetting_onMobile.style.display = "none";
            userSetting.style.display = "block";
            userSetting_onMobile.style.display = "block";
        }
    } else {
        adminSetting.style.display = "none";
        adminSetting_onMobile.style.display = "none";
        userSetting.style.display = "none";
        userSetting_onMobile.style.display = "none";
    }
}
setUpLogin();
