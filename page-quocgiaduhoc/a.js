let header_element = document.querySelector("#head");
let buton = document.querySelector(".hello");

buton.onclick = () => {
    delayLoop(0, 1);
};

window.addEventListener("resize", function () {
    // if (this.window.innerWidth > 1024) {
    //     this.document.querySelector(".login").style.display = "flex";
    // } else {
    //     this.document.querySelector(".login").style.display = "none";
    // }
    if (isLogin() != null) {
        icon.style.display = "none";
    } else {
        if (this.window.innerWidth > 1024) {
            this.document.querySelector(".login").style.display = "flex";
        } else {
            this.document.querySelector(".login").style.display = "none";
        }
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

// function showMenu() {
//     document.querySelector(".nav-mobile").classList.add("show");
//     document.querySelector(".screendark").classList.add("on");
// }

// function hiddenMenu() {
//     document.querySelector(".nav-mobile").classList.remove("show");
//     document.querySelector(".screendark").classList.remove("on");
// }

// let flag = false;

// function showSubMenu() {
//     if (!flag) {
//         document.querySelector(".plus").innerHTML = "-";
//         document.querySelector(".nav-mobile .sub-menu").style.display = "block";
//         flag = true;
//     } else {
//         document.querySelector(".plus").innerHTML = "+";
//         document.querySelector(".nav-mobile .sub-menu").style.display = "none";
//         flag = false;
//     }
// }

//Show thêm lịch
let isHidden = true;
function showMoreSchedule() {
    const items = document.querySelectorAll(".row-calen");
    const showMoreBtn = document.querySelector(".btn-show");

    items.forEach((item, index) => {
        if (isHidden || index < 5) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });

    isHidden = !isHidden; // Đảo ngược trạng thái

    if (isHidden) {
        showMoreBtn.textContent = "XEM THÊM";
    } else {
        showMoreBtn.textContent = "THU GỌN";
    }
}

// Pop Up use Bootstrap
// const myModal = document.getElementById("myModal20");
// const myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", () => {
//     myInput.focus();
// });

// set up post
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

// load bài ở cẩm nag du học
function post_articles_2(container, numberOfPost, footerContainer) {
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
                            // console.log(pathText);
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
                                                                   <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                                                          <img src="${pictureURL}" alt="" />
                                                                   </a>
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
                                                                   <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                                                          ${valueHeading}
                                                                   </a>
                                                            `;
                                }
                            });
                            // form
                            array.push(pictureString);
                            array.push(HeadingString);

                            // them bai post

                            let div = document.createElement("div");
                            div.className = "row-blog";
                            // console.log(div);
                            div.innerHTML = `${array.join("")}
                                                            ${footerContainer}
                                                            `;
                            // if (i < numberOfPost) {
                            //        li.innerHTML = `${array.join('')}
                            //               ${footerContainer}
                            //               `;
                            // } else {
                            //        li.innerHTML = `${array.join('')}
                            //               `;
                            // }
                            containerPosts.appendChild(div);
                        })
                        .catch((error) => {
                            console.error("Lỗi:", error);
                        });
                }
            }
        }
    }
}
post_articles_2(".content-right .tips .desc", 5, "");

// show bài post ở lịch hội thảo

function post_articles_3(container, numberOfPost, footerContainer) {
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
                            let valueHeading = "";
                            let HeadingString = "";
                            paragraphs.forEach((item) => {
                                if (
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
                                                                   <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                                                          ${valueHeading}
                                                                   </a>
                                                            `;
                                }
                            });
                            // form

                            // date post

                            let dateString = post.datePost.split("-");
                            let day = dateString[0];
                            let month = dateString[1];
                            let year = dateString[2];

                            let datePost = `
                                                     <div class="calen-box">
                                                            <span class="day">${day}</span>
                                                            <span class="mon-year">${month}/${year}</span>
                                                     </div>
                                              `;

                            // array.push(pictureString);
                            array.push(datePost);
                            array.push(HeadingString);

                            // them bai post

                            let div = document.createElement("div");
                            div.className = "row-calen";
                            // console.log(div);
                            div.innerHTML = `${array.join("")}
                                                            ${footerContainer}
                                                            `;
                            // if (i < numberOfPost) {
                            //        li.innerHTML = `${array.join('')}
                            //               ${footerContainer}
                            //               `;
                            // } else {
                            //        li.innerHTML = `${array.join('')}
                            //               `;
                            // }
                            containerPosts.appendChild(div);
                        })
                        .catch((error) => {
                            console.error("Lỗi:", error);
                        });
                }
            }
        }
    }
}
post_articles_3(".content-right .calendar .desc div:nth-child(1)", 5, "");

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
function login() {
    let startLogin = document.querySelector(".header-phat .login");
    let form = document.querySelector(".form-login");
    let startLogin_toMobile = document.querySelector(".login-mobile");
    startLogin.addEventListener("click", () => {
        form.style.display = "flex";
        loginForm();
    });
    startLogin_toMobile.addEventListener("click", () => {
        form.style.display = "flex";
        loginForm();
    });
}
login();
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
        users.forEach((value) => {
            if (value.idUser == userId && value.Password == passWord) {
                check = 1;
                setStateLogin(userId);
                // kiểm tra xem có phải admin không
                let adminSetting = document.querySelector(".admin-setting");
                let userSetting = document.querySelector(".user-setting");
                if (value.role == "admin") {
                    // hiện trang admin
                    adminSetting.style.display = "block";
                    userSetting.style.display = "none";
                } else {
                    adminSetting.style.display = "none";
                    userSetting.style.display = "block";
                }
            }
        });
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
            };
            users.push(user);
            let temp = JSON.stringify(users);
            window.localStorage.setItem("user", temp);

            // kiểm tra xem có phải admin không
            let adminSetting = document.querySelector(
                ".header-2 .admin-setting"
            );
            let userSetting = document.querySelector(".header-2 .user-setting");
            if (user.role == "admin") {
                // hiện trang admin
                adminSetting.style.display = "block";
                userSetting.style.display = "none";
            } else {
                adminSetting.style.display = "none";
                userSetting.style.display = "block";
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

    if (isLogin() != null) {
        icon.style.display = "none";
    } else {
        icon.style.display = "block";
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
    iconLogin();
    if (isLogin() != null) {
        let objUser = isLogin();
        //  kiểm tra xem có phải admin không
        let adminSetting = document.querySelector(".admin-setting");
        let userSetting = document.querySelector(".user-setting");
        if (objUser.role == "admin") {
            // hiện trang admin
            adminSetting.style.display = "block";
            userSetting.style.display = "none";
        } else {
            adminSetting.style.display = "none";
            userSetting.style.display = "block";
        }
    }
}
setUpLogin();
window.addEventListener("load", function () {
    if (this.window.innerWidth >= 1026) {
        this.document.querySelector(".login").style.display = "flex";
    } else {
        this.document.querySelector(".login").style.display = "none";
    }
});
