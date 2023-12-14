// chuyen dong scroll len dau trang
let header_element = document.querySelector("#head"); // lấy id của header
let buton = document.querySelector(".arrow-up"); // lấy class của nút trở lên trang nhất
buton.onclick = () => {
    delayLoop(0, 1);
};

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

    // thêm phần này vào CSS
    let command_close_header = `
              .close_header {
                     transform: translateY(-65%);
                     position: sticky;
                     top: 0;
                     z-index: 1000;
              }
       `;

    if (Math.round(y) > 50) {
        // header_element.style.display = 'none';
        header_element.classList.add("close_header");
        buton.style.display = "flex";
    } else {
        header_element.classList.remove("close_header");
        buton.style.display = "none";
    }
});

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

// document.getElementById('fileInput').addEventListener('change', function (e) {
//        var file = e.target.files[0];
//        var filePath = URL.createObjectURL(file);
//        console.log(e);
//        var reader = new FileReader();
//        let container_text = document.querySelector('.container-left .text');
//        let heading_title = document.querySelector('#heading-title');
//        console.log(container_text);
//        reader.onload = function (e) {
//               var content = e.target.result;
//               console.log(e);
//               var paragraphs = content.split('\n');
//               var index = 0;
//               var array = [];
//               paragraphs.forEach((item) => {
//                      if (item.startsWith('Picture')) {
//                             console.log(item);

//                             var startIdxURL = item.indexOf('"');
//                             var endIdxURL = item.indexOf('"', startIdxURL + 1);
//                             var valueURL = item.substring(startIdxURL + 1, endIdxURL);
//                             console.log(valueURL); // "hhh"

//                             var startIdxTitleL = item.indexOf('"', endIdxURL + 1);
//                             var endIdxTitle = item.indexOf('"', startIdxTitleL + 1);
//                             var valueTitle = item.substring(startIdxTitleL + 1, endIdxTitle);
//                             console.log(valueTitle); // "hhh"
//                             index++;
//                             // item.replace(item,'');
//                             let temp = `
//                                    <figure>
//                                           <img src="${valueURL}" alt="">
//                                           <figcaption>
//                                                  <h4>${valueTitle}</h4>
//                                           </figcaption>
//                                    </figure>
//                             `;
//                             array.push(temp);
//                      }
//                      else if (item.startsWith('Author')) {
//                             var startIdxAuthor = item.indexOf('"');
//                             var endIdxAuthor = item.indexOf('"', startIdxAuthor + 1);
//                             var valueAuthor = item.substring(startIdxAuthor + 1, endIdxAuthor);
//                             // console.log(valueURL); // "hhh"
//                             let temp = `
//                             <span class="author">
//                                    <span>${valueAuthor}</span> (Theo Bloomberg) – Vnexpress
//                             </span>
//                             `;
//                             array.push(temp);
//                      }
//                      else if (item.startsWith('Heading')) {
//                             var startIdxHeading = item.indexOf('"');
//                             var endIdxHeading = item.indexOf('"', startIdxHeading + 1);
//                             var valueHeading = item.substring(startIdxHeading + 1, endIdxHeading);
//                             heading_title.innerHTML = valueHeading;
//                      }
//                      else {
//                             array.push('<span>' + item + '</span>');
//                      }

//               });
//               let string = array.join('<br><br>');

//               container_text.innerHTML = string;
//               // console.log(content);

//        };

//        reader.readAsText(file);
// });

// show posts khac ở mục cẩm nang du học
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
                                    // console.log(pictureURL);

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
                            // console.log(i);
                            li.innerHTML = `${array.join("")}
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
post_articles(
    ".container-article .container-left .news-in-the-same-category ul",
    4,
    `<div class="line"></div>`
);

// show post ở thanh cẩm nang du học

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
post_articles_3(".content-right .calendar .desc", 5, "");

// xu ly path

function handlePath(string, id) {
    let path = document.querySelector(".main-content-body .container-path ul");
    let pathScore = document.createElement("li");
    let linkScore = `
              <a href="#" id="${id}" onclick="setStatePost(event,'${id}')">
                     <span>${string}</span>
              </a>`;
    pathScore.innerHTML = linkScore;
    path.appendChild(pathScore);
}
// xu ly bai post
function showPost(path, id) {
    window.onload = () => {
        var filePath = path;
        var containerText = document.querySelector(".container-left .text");
        var headingTitle = document.querySelector("#heading-title");
        if (containerText) {
            fetch(filePath)
                .then((response) => response.text())
                .then((content) => {
                    var paragraphs = content.split("\n");
                    var array = [];

                    paragraphs.forEach((item) => {
                        if (item.startsWith("Picture")) {
                            // Xử lý khi gặp dòng bắt đầu bằng 'Picture'
                            // ...
                            console.log(item);

                            var startIdxURL = item.indexOf('"');
                            var endIdxURL = item.indexOf('"', startIdxURL + 1);
                            var valueURL = item.substring(
                                startIdxURL + 1,
                                endIdxURL
                            );
                            console.log(valueURL); // "hhh"

                            var startIdxTitleL = item.indexOf(
                                '"',
                                endIdxURL + 1
                            );
                            var endIdxTitle = item.indexOf(
                                '"',
                                startIdxTitleL + 1
                            );
                            var valueTitle = item.substring(
                                startIdxTitleL + 1,
                                endIdxTitle
                            );
                            console.log(valueTitle); // "hhh"
                            // item.replace(item,'');
                            let temp = `
                                                        <figure>
                                                               <img src="${valueURL}" alt="">
                                                               <figcaption>
                                                                      <h4>${valueTitle}</h4>
                                                               </figcaption>
                                                        </figure>
                                                 `;
                            array.push(temp);
                        } else if (item.startsWith("Author")) {
                            // Xử lý khi gặp dòng bắt đầu bằng 'Author'
                            // ...
                            var startIdxAuthor = item.indexOf('"');
                            var endIdxAuthor = item.indexOf(
                                '"',
                                startIdxAuthor + 1
                            );
                            var valueAuthor = item.substring(
                                startIdxAuthor + 1,
                                endIdxAuthor
                            );
                            // console.log(valueURL); // "hhh"
                            let temp = `
                                                        <span class="author">
                                                               <span>${valueAuthor}</span> (Theo Bloomberg) – Vnexpress
                                                        </span>
                                                 `;
                            array.push(temp);
                        } else if (item.startsWith("Heading")) {
                            // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
                            // ...
                            var startIdxHeading = item.indexOf('"');
                            var endIdxHeading = item.indexOf(
                                '"',
                                startIdxHeading + 1
                            );
                            var valueHeading = item.substring(
                                startIdxHeading + 1,
                                endIdxHeading
                            );
                            headingTitle.innerHTML = valueHeading;

                            // set up path
                            handlePath(valueHeading, id);
                        } else {
                            // Xử lý khi gặp các dòng còn lại
                            // ...
                            array.push("<span>" + item + "</span>");
                        }
                    });
                    containerText.innerHTML = array.join("<br><br>");
                    // ...
                })
                .catch((error) => {
                    console.error("Lỗi:", error);
                });
        }
    };
}

// xử lý quay về trang trước
function backPage() {
    let button = document.querySelector(
        ".container-left .back-page span:nth-child(2) "
    );
    button.addEventListener("click", () => {
        history.back();
    });
}
backPage();

// set up post
let ID_POST = "";
let ID_Coment = "";
function setUp() {
    // show bài post
    let storePost = window.localStorage.getItem("post");
    let arr = JSON.parse(storePost);
    arr.forEach((value) => {
        if (value.state == 1) {
            ID_POST = value.id;
            showPost(value.path, value.id);
            // show bình luận bài post tương ứng
            loadComent(value.id, 4);
        }
    });
}
setUp();

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

// xử lý like vs dislike
let likeButtons = document.getElementsByClassName("like-button");
let likeCount = 0;
let dislikeButtons = document.getElementsByClassName("dislike-button");
let dislikeCount = 0;

// Hàm xử lý khi nút like được click
function likeButtonClicked(likeButton, idComent) {
    // đăng nhập rồi mới được like
    if (isLogin() != null) {
        // Tăng số lượt like lên 1
        let countElement = likeButton.querySelector(".count-like");
        // text hiển thị số lượng like
        countElement.textContent = parseInt(countElement.textContent) + 1;
        updateNumberLike(idComent, 1);
    } else {
        window.alert("Bạn phải đăng nhập để có thể like bình luận");
    }
}

// Hàm xử lý khi nút dislike được click (tương tự)
function dislikeButtonClicked(dislikeButton, idComent) {
    // dang nhap roi moi dc dislike
    if (isLogin() != null) {
        let countElement = dislikeButton.querySelector(".count-dislike");
        countElement.textContent = parseInt(countElement.textContent) + 1;
        updateNumberLike(idComent, 0);
    } else {
        window.alert("Bạn phải đăng nhập để có thể dislike bình luận");
    }
}

function updateNumberLike(idComent, check) {
    // cập nhật vào data
    let storagrComent = localStorage.getItem("coment");
    let arr = JSON.parse(storagrComent);
    if (check == 0) {
        // dislike
        arr.forEach((value) => {
            if (value.idComent == idComent) {
                let temp = Number(value.NumberDislike);
                value.NumberDislike = String(temp + 1);
            }
        });
    } else {
        arr.forEach((value) => {
            if (value.idComent == idComent) {
                let temp = Number(value.NumberLike);
                value.NumberLike = String(temp + 1);
            }
        });
    }
    let temp1 = JSON.stringify(arr);
    window.localStorage.setItem("coment", temp1);
}

// xử lý ẩn hiện nút coment và nút cancel khi ấn vào bình luận
let btnComent = document.querySelector(
    ".container-article .container-left .coment-container .write-coment .btn-coment"
);
let btnCancel = document.querySelector(
    ".container-article .container-left .coment-container .write-coment .btn-cancel"
);
let inpComent = document.querySelector(
    ".container-article .container-left .coment-container .write-coment input"
);

inpComent.addEventListener("focus", () => {
    btnComent.style.display = "block";
    btnCancel.style.display = "block";
});

inpComent.addEventListener("blur", () => {
    let text = document.querySelector(
        ".container-article .container-left .coment-container .write-coment input"
    ).value;
    if (text === "") {
        btnComent.style.display = "none";
        btnCancel.style.display = "none";
    }
});

// xử lý hủy bình luận
function cancelComent() {
    btnCancel.addEventListener("click", () => {
        document.querySelector(
            ".container-article .container-left .coment-container .write-coment input"
        ).value = "";
    });
}
cancelComent();

// xử lý đăng bình luận
// cau trúc bài bình luận

function postStructure(
    idComent,
    userName,
    dateString,
    valueText,
    numberLike,
    numberDislike
) {
    let containerComent = document.querySelector(
        ".container-article .container-left .coment-container .coment-content ul"
    );
    let post_structure = [];

    // anh dai dien
    let img = `<img src="./image/profile.png" alt="">`;
    post_structure.push(img);

    // tao the div chứa tên user, ngày đăng, nội dung bài bình luận, nút like và nút đislike
    let componentComent = `     
              <div>
                     <div class="name-user">
                            <span>${userName}</span>
                            <span>${dateString}</span>
                     </div>
                     <div>
                            <p class="coment">
                                  ${valueText}
                            </p>
                            <div class="like-dislike">
                                   <div class="like-button" id="likeButton" onclick="likeButtonClicked(this,'${idComent}')">
                                          <span class="icon">&#x1F44D;</span>
                                          <span
                                                 class="count count-like">${numberLike}</span>
                                   </div>
                                   <div class="dislike-button" id="dislikeButton" onclick="dislikeButtonClicked(this,'${idComent}')">
                                          <span class="icon">&#x1F44E;</span>
                                          <span
                                                 class="count count-dislike">${numberDislike}</span>
                                   </div>
                            </div>
                     </div>
              </div>
       `;
    post_structure.push(componentComent);

    let li = document.createElement("li");

    li.innerHTML = post_structure.join("");

    containerComent.appendChild(li);
}
// dăng bài bình luận
function postComments() {
    btnComent.addEventListener("click", () => {
        // tìm ra người đăng nhập
        let user = isLogin();

        // các giá trị mặc định, khi nào có đăng nhập thì tính tiếp
        let idUser = "";
        if (user != null) {
            idUser = user.idUser;
        }
        let text = document.querySelector(
            ".container-article .container-left .coment-container .write-coment input"
        ).value;

        if (text === "") {
        } else {
            if (idUser == "") {
                window.alert("Bạn cần đăng nhập để đăng bình luận");
            } else {
                // tạo idComent mới cho bình luận mới
                let temp = Number(ID_Coment) + 1;
                let newIDComent = String(temp);
                document.querySelector(
                    ".container-article .container-left .coment-container .write-coment input"
                ).value = "";
                var currentDate = new Date();

                // Lấy thông tin ngày, tháng và năm từ đối tượng Date
                var day = currentDate.getDate();
                var month = currentDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
                var year = currentDate.getFullYear();

                let dateString = year + "-" + month + "-" + day;

                postStructure(newIDComent, idUser, dateString, text, 0, 0);
                objComent(newIDComent, idUser, ID_POST, dateString, text);
                loadComent(ID_POST, 4);
            }
        }
    });
}
postComments();
// tạo obj bình luận

function objComent(idComent, idUser, idPost, dateComent, valueText) {
    let obj = {
        idComent: idComent,
        idPost: idPost,
        idUser: idUser,
        valueText: valueText,
        NumberLike: 0,
        NumberDislike: 0,
        datePost: dateComent,
        state: 1,
    };
    let storagrComent = localStorage.getItem("coment");
    let arr = JSON.parse(storagrComent);
    arr.push(obj);
    let temp = JSON.stringify(arr);
    window.localStorage.setItem("coment", temp);
}

// load binh luan

function loadComent(idPost, numberShow) {
    let storagrComent = localStorage.getItem("coment");
    let arr = JSON.parse(storagrComent);
    let numberComent = document.querySelector(
        ".container-article .container-left .coment-container .number-coment .number"
    );
    // lam moi
    let containerComent = document.querySelector(
        ".container-article .container-left .coment-container .coment-content ul"
    );
    containerComent.innerHTML = "";
    // count coment
    let count = 1;

    // sắp xếp các giá trị bài đăng
    let commentsSortedByDate = arr.sort((a, b) => {
        // Chuyển đổi giá trị datePost thành đối tượng Date để so sánh
        let dateA = new Date(a.datePost);
        let dateB = new Date(b.datePost);

        // So sánh các giá trị datePost
        return dateB - dateA;
    });

    commentsSortedByDate.forEach((value) => {
        if (value.idPost == idPost && value.state == 1) {
            numberComent.innerHTML = count;
            count += 1;
            if (count <= numberShow) {
                postStructure(
                    value.idComent,
                    value.idUser,
                    value.datePost,
                    value.valueText,
                    value.NumberLike,
                    value.NumberDislike
                );
            }
        }
    });

    // watch more
    let moreButton = document.querySelector(
        ".container-article .container-left .coment-container .coment-content  .watch-coment-more"
    );

    if (count <= numberShow) {
        moreButton.innerHTML = "";
    } else {
        let string = `
                     <span onclick = "watchAllComent()" style="cursor: pointer;" >Xem tất cả bình luận</span>
                     <div class="line"></div>
              `;
        moreButton.innerHTML = string;
    }

    ID_Coment = String(count);
}

// xử lý nút xem bình thêm bình luận
function watchAllComent() {
    // let watchMoreComent = document.querySelector('.container-article .container-left .coment-container .coment-content  .watch-coment-more span');
    // if(watchMoreComent != null){
    //        watchMoreComent.addEventListener('click', () => {
    //               loadComent(ID_POST, 100);
    //        });
    // }

    loadComent(ID_POST, 100);
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
