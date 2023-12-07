// header chuyen dong
let header_element = document.querySelector("#head");
let buton = document.querySelector(".hello");

// buton.onclick = () => {
//     delayLoop(0, 1);
// };

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
            header_element.classList.add("close");
            buton.style.display = "flex";
        } else {
            header_element.classList.remove("close");
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







// set up post
function setStatePost(event, valueId) {
       // Ngăn chặn hành động mặc định của thẻ a
       event.preventDefault();

       let storePost = window.localStorage.getItem('post');
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
       window.localStorage.setItem('post', temp);
       window.location.href = '../ThongTinBai/index.html';
}


// load bài ở cẩm nag du học
function post_articles_2(container, numberOfPost, footerContainer) {

       // truy suat container chua no
       let containerPosts = document.querySelector(container);

       // lấy dữ liệu các bài đăng
       let posts = window.localStorage.getItem('post');
       let postArr = JSON.parse(posts);
       let sizeArr = postArr.length;
       let isPost = [];     // kiểm tra xem bài đăng nào đã được đăng lên container
       // khởi tạo mảng với giá trị các bài đăng ban đầu đều là false
       postArr.forEach((value) => {
              isPost.push(false);
       });
       // chọn bài đăng một cách ngẫu nhiên
       for (let i = 0; i < numberOfPost;) {
              let randomNumber = Math.floor(Math.random() * sizeArr);
              if (isPost[randomNumber] == false) {
                     isPost[randomNumber] = true;
                     let post = postArr[randomNumber];
                     if (post.isPost == '1') {
                            let pathText = post.path;
                            i++;
                            if (containerPosts) {
                                   fetch(pathText)
                                          .then(response => response.text())
                                          .then(content => {
                                                 // console.log(pathText);
                                                 let paragraphs = content.split('\n');
                                                 let array = [];
                                                 let pictureURL = '';
                                                 let pictureString = '';
                                                 let valueHeading = '';
                                                 let HeadingString = '';
                                                 let introductory_paragraph = '';
                                                 paragraphs.forEach((item) => {
                                                        if (item.startsWith('Picture') && pictureURL == '') {
                                                               // Xử lý khi gặp dòng bắt đầu bằng 'Picture'
                                                               // ...
                                                               var startIdxURL = item.indexOf('"');
                                                               var endIdxURL = item.indexOf('"', startIdxURL + 1);
                                                               pictureURL = item.substring(startIdxURL + 1, endIdxURL);
                                                               console.log(pictureURL);

                                                               pictureString = `
                                                                      <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                                                             <img src="${pictureURL}" alt="" />
                                                                      </a>
                                                                `;


                                                        } else if (item.startsWith('Heading') && valueHeading == '') {
                                                               // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
                                                               // ...
                                                               var startIdxHeading = item.indexOf('"');
                                                               var endIdxHeading = item.indexOf('"', startIdxHeading + 1);
                                                               valueHeading = item.substring(startIdxHeading + 1, endIdxHeading);
                                                               valueHeading = valueHeading.slice(0, 47) + '...';
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

                                                 let div = document.createElement('div');
                                                 div.className = 'row-blog';
                                                 // console.log(div);
                                                 div.innerHTML = `${array.join('')}
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
                                          .catch(error => {
                                                 console.error('Lỗi:', error);
                                          });
                            }
                     }

              }
       }
}
post_articles_2('.content-right .tips .desc', 5, '');


// show bài post ở lịch hội thảo

function post_articles_3(container, numberOfPost, footerContainer) {

       // truy suat container chua no
       let containerPosts = document.querySelector(container);

       // lấy dữ liệu các bài đăng
       let posts = window.localStorage.getItem('post');
       let postArr = JSON.parse(posts);
       let sizeArr = postArr.length;
       let isPost = [];     // kiểm tra xem bài đăng nào đã được đăng lên container
       // khởi tạo mảng với giá trị các bài đăng ban đầu đều là false
       postArr.forEach((value) => {
              isPost.push(false);
       });
       // chọn bài đăng một cách ngẫu nhiên
       for (let i = 0; i < numberOfPost;) {
              let randomNumber = Math.floor(Math.random() * sizeArr);
              if (isPost[randomNumber] == false) {
                     isPost[randomNumber] = true;
                     let post = postArr[randomNumber];
                     if (post.isPost == '1') {
                            let pathText = post.path;
                            i++;
                            if (containerPosts) {
                                   fetch(pathText)
                                          .then(response => response.text())
                                          .then(content => {
                                                 let paragraphs = content.split('\n');
                                                 let array = [];
                                                 let valueHeading = '';
                                                 let HeadingString = '';
                                                 paragraphs.forEach((item) => {
                                                        if (item.startsWith('Heading') && valueHeading == '') {
                                                               // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
                                                               // ...
                                                               var startIdxHeading = item.indexOf('"');
                                                               var endIdxHeading = item.indexOf('"', startIdxHeading + 1);
                                                               valueHeading = item.substring(startIdxHeading + 1, endIdxHeading);
                                                               valueHeading = valueHeading.slice(0, 47) + '...';
                                                               HeadingString = `
                                                                      <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                                                             ${valueHeading}
                                                                      </a>
                                                               `;


                                                        }

                                                 });
                                                 // form 

                                                 // date post

                                                 let dateString = post.datePost.split('-');
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

                                                 let div = document.createElement('div');
                                                 div.className = 'row-calen';
                                                 // console.log(div);
                                                 div.innerHTML = `${array.join('')}
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
                                          .catch(error => {
                                                 console.error('Lỗi:', error);
                                          });
                            }
                            
                     }
              }
       }

}
post_articles_3('.content-right .calendar .desc div:nth-child(1)', 5, '');


// show bài post ẩn ở lịch hội thảo

function post_articles_4(container, numberOfPost, footerContainer) {

       // truy suat container chua no
       let containerPosts = document.querySelector(container);

       // lấy dữ liệu các bài đăng
       let posts = window.localStorage.getItem('post');
       let postArr = JSON.parse(posts);
       let sizeArr = postArr.length;
       let isPost = [];     // kiểm tra xem bài đăng nào đã được đăng lên container
       // khởi tạo mảng với giá trị các bài đăng ban đầu đều là false
       postArr.forEach((value) => {
              isPost.push(false);
       });
       // chọn bài đăng một cách ngẫu nhiên
       for (let i = 0; i < numberOfPost;) {
              let randomNumber = Math.floor(Math.random() * sizeArr);
              if (isPost[randomNumber] == false) {
                     isPost[randomNumber] = true;
                     let post = postArr[randomNumber];
                     if (post.isPost == '1') {
                            let pathText = post.path;
                            i++;
                            if (containerPosts) {
                                   fetch(pathText)
                                          .then(response => response.text())
                                          .then(content => {
                                                 let paragraphs = content.split('\n');
                                                 let array = [];
                                                 let valueHeading = '';
                                                 let HeadingString = '';
                                                 paragraphs.forEach((item) => {
                                                        if (item.startsWith('Heading') && valueHeading == '') {
                                                               // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
                                                               // ...
                                                               var startIdxHeading = item.indexOf('"');
                                                               var endIdxHeading = item.indexOf('"', startIdxHeading + 1);
                                                               valueHeading = item.substring(startIdxHeading + 1, endIdxHeading);
                                                               valueHeading = valueHeading.slice(0, 47) + '...';
                                                               HeadingString = `
                                                                      <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                                                             ${valueHeading}
                                                                      </a>
                                                               `;


                                                        }

                                                 });
                                                 // form 

                                                 // date post

                                                 let dateString = post.datePost.split('-');
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

                                                 let div = document.createElement('div');
                                                 div.className = 'row-calen hidden';
                                                 // console.log(div);
                                                 div.innerHTML = `${array.join('')}
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
                                          .catch(error => {
                                                 console.error('Lỗi:', error);
                                          });
                            }
                            
                     }
              }
       }
}
post_articles_4('.content-right .calendar .desc div:nth-child(2)', 5, '');
// function addWatchMore(){
//        let container = document.querySelector('.content-right .calendar .desc');
//        let div = document.querySelector('div');
//        div.className = 'btn-add';
//        div.innerHTML = `
              
//                      <button class="btn" onclick="showMoreSchedule()">
//                      <a href="#!">XEM THÊM</a>
//                      </button>
              
//        `
//        container.appendChild(div);
// }
// addWatchMore();

// Xem thêm lịch
let isHidden = true;
function showMoreSchedule() {
       const items = document.querySelectorAll('.row-calen');
       const showMoreBtn = document.querySelector('.btn');

       items.forEach((item, index) => {
              if (isHidden || index < 5) {
                     item.style.display = 'flex';
              } else {
                     item.style.display = 'none';
              }
       });

       isHidden = !isHidden; // Đảo ngược trạng thái

       if (isHidden) {
              showMoreBtn.textContent = 'XEM THÊM';
       } else {
              showMoreBtn.textContent = 'THU GỌN';
       }
}


// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//        myInput.focus()
// })