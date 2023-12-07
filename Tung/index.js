






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
post_articles_3('.content-right .calendar .desc', 5, '');

