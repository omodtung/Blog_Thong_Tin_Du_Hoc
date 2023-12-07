// set up data





function showPost_isPush() {
       let tableDataIsPost = document.querySelector('.post-management-page table');
       let tableDataNotPost = document.querySelector('.action-post table');
       tableDataIsPost.innerHTML = '';   // clear table
       tableDataNotPost.innerHTML = '';
       // them heading table isPost
       let tdString = `
                            <th>
                                   <span>Tên bài đăng</span>
                            </th>
                            <th>
                                   <span>Số lượng lượt xem</span>
                            </th>
                            <th>
                                   <span>Số lượng bình luận</span>
                            </th>
                            <th>
                                   <span>Số lượng lượt thích</span>
                            </th>
                            <th>
                                   <span>Số lượng lượt không thích</span>
                            </th>
                            <th>
                                   <span>Hành động</span>
                            </th>
       `;
       let trHeading = document.createElement('tr');
       trHeading.innerHTML = tdString;
       tableDataIsPost.appendChild(trHeading);

       let tdString1 = `
              <th>
                     <span>Tên bài đăng</span>
              </th>
              <th>
                     <span>Hành động</span>
              </th>
       `;

       let trHeading1 = document.createElement('tr');
       trHeading1.innerHTML = tdString1;
       tableDataNotPost.appendChild(trHeading1);
       test(tableDataIsPost, tableDataNotPost);
}
showPost_isPush();


// function test() {
//        let count = 0;
//        let stopFlag = false;
//        while (count < 11 && !stopFlag) {
//               count += 1;

//               let path = `../storage/post_${count}/text.txt`;
//               let pathText = path;

//               fetch(pathText)
//                      .then(response => response.text())
//                      .then(content => {
//                             console.log(pathText);
//                             let paragraphs = content.split('\n');
//                             let valueHeading = '';
//                             paragraphs.forEach((item) => {
//                                    if (item.startsWith('Heading') && valueHeading == '') {
//                                           // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
//                                           // ...
//                                           var startIdxHeading = item.indexOf('"');
//                                           var endIdxHeading = item.indexOf('"', startIdxHeading + 1);
//                                           valueHeading = item.substring(startIdxHeading + 1, endIdxHeading);
//                                           // valueHeading = valueHeading.slice(0, 47) + '...';
//                                           // HeadingString = `
//                                           //        <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
//                                           //               ${valueHeading}
//                                           //        </a>
//                                           // `;
//                                           console.log(valueHeading);
//                                    }

//                             })

//                      })
//                      .catch(error => {
//                             // console.error('Lỗi: bị lỗi', error);
//                             stopFlag = true;
//                      });
//        }
// }
// test();
// {
//        id : '1',
//        path : "../storage/post_1/text.txt",
//        state : '0',
//        view : '0',
//        datePost : '17/11/2023',
//        namePost : 'VÌ SAO AUSTRALIA MUỐN MỞ CỬA BIÊN GIỚI ĐÓN DU HỌC SINH',
//        isPost : '1'
// },
function test(containerIsPost, containerNotIsPost) {
       let count = 0;
       let stopFlag = false;
       let post = window.localStorage.getItem('post');
       let posts = JSON.parse(post);

       let comment = window.localStorage.getItem('coment');
       let comments = JSON.parse(comment);

       const processPost = (pathText, count) => {
              fetch(pathText)
                     .then(response => {
                            if (!response.ok) {
                                   throw new Error(`Không thể tải tệp từ đường dẫn: ${pathText}`);
                            }
                            return response.text();
                     })
                     .then(content => {
                            let flag = 0;
                            // console.log(String(count));
                            posts.forEach((value) => {
                                   if (value.id == String(count)) {
                                          if (value.isPost == '1') {
                                                 // console.log(pathText + " : post");
                                                 // console.log(JSON.stringify(value))
                                                 flag = 1;
                                                 let numberComment = 0;
                                                 let numberLike = 0;
                                                 let numberDislike = 0;
                                                 comments.forEach((value2) => {
                                                        if (value2.idPost == value.id) {
                                                               numberComment += 1;
                                                               numberLike += Number(value2.NumberLike);
                                                               numberDislike += Number(value2.NumberDislike);
                                                        }
                                                 });
                                                 let string = `
                                                 <td class="name-post">
                                                        <span class="value">${value.namePost}</span>
                                                 </td>
                                                 <td class="number-watch">
                                                        <span class="value">${value.view}</span>
                                                 </td>
                                                 <td class="number-comment">
                                                        <span class="value">${numberComment}</span>
                                                 </td>
                                                 <td class="number-like">
                                                        <span class="value">${numberLike}</span>
                                                 </td>
                                                 <td class="number-dislike">
                                                        <span class="value">${numberDislike}</span>
                                                 </td>
                                                 <td class="action-delete-post">
                                                        <span onclick = "hidePost(${value.id})"><i class="fa fa-ban" aria-hidden="true"></i></span>
                                                 </td>
                                          `;
                                                 let tr = document.createElement('tr');
                                                 tr.innerHTML = string;
                                                 containerIsPost.appendChild(tr);
                                          } else {
                                                 flag = 1;
                                                 let string = `
                                                        <td class="name-post">
                                                               <span class="value">${value.namePost}</span>
                                                        </td>
                                                        <td class="action-push-post">
                                                               <span onclick = "addPost(${value.id})" ><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                               <span onclick = "showBeforePost(${value.id})" ><i class="fa fa-eye" aria-hidden="true"></i></span>
                                                        </td>
                                          
                                                        `;
                                                 let tr = document.createElement('tr');
                                                 tr.innerHTML = string;
                                                 containerNotIsPost.appendChild(tr);
                                          }

                                   }
                            });
                            let paragraphs = content.split('\n');
                            let valueHeading = '';
                            paragraphs.forEach((item) => {
                                   if (item.startsWith('Heading') && valueHeading == '') {
                                          var startIdxHeading = item.indexOf('"');
                                          var endIdxHeading = item.indexOf('"', startIdxHeading + 1);
                                          valueHeading = item.substring(startIdxHeading + 1, endIdxHeading);
                                          // console.log(valueHeading);
                                   }
                            });
                            if (flag == 0) {
                                   // nếu chưa có trong data mà tìm thấy file trên máy
                                   // tiến hành tạo obj mới và thêm vào data
                                   // với thuộc tính isPost = '0'
                                   let currentDate = new Date();
                                   let dayString = currentDate.getDate();
                                   let monthString = currentDate.getMonth();
                                   let yearString = currentDate.getFullYear();
                                   let obj = {
                                          id: String(count),
                                          path: pathText,
                                          state: '0',
                                          view: '0',
                                          datePost: `${yearString}-${monthString}-${dayString}`,
                                          namePost: valueHeading,
                                          isPost: '0'
                                   };
                                   let string = `
                                          <td class="name-post">
                                                 <span class="value">${valueHeading}</span>
                                          </td>
                                          <td class="action-push-post">
                                                 <span onclick = "addPost(${obj.id})"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                 <span onclick = "showBeforePost(${obj.id})"><i class="fa fa-eye" aria-hidden="true"></i></span>
                                          </td>
                                   `;
                                   let tr = document.createElement('tr');
                                   tr.innerHTML = string;
                                   containerNotIsPost.appendChild(tr);
                                   // console.log(JSON.stringify(obj));
                                   arrNewPost.push(JSON.stringify(obj));
                                   // thêm obj vào dữ liệu
                                   posts.push(obj);
                                   let temp = JSON.stringify(posts);
                                   window.localStorage.setItem('post', temp);
                            }
                     })
                     .catch(error => {
                            console.error(`Lỗi: ${error.message}`);
                            stopFlag = true;
                     });
       };
       while (count < 11 && !stopFlag) {
              count += 1;
              let path = `../storage/post_${count}/text.txt`;
              let pathText = path;
              processPost(pathText, count);

       }
       console.log(posts);
}

// action xem bai truoc khi dang
function showBeforePost(id) {
       const post = window.localStorage.getItem('post');
       const posts = JSON.parse(post);
       posts.forEach((value) => {
              if (value.id == id) {
                     console.log("oke 1");
                     showPost(value.path, id);
              }
       });
}
function showPost(path, id) {
       var filePath = path;
       var containerText = document.querySelector('.container-left .text');
       var headingTitle = document.querySelector('#heading-title');
       // console.log(containerText);
       if (containerText) {
              fetch(filePath)
                     .then(response => response.text())
                     .then(content => {
                            var paragraphs = content.split('\n');
                            var array = [];

                            paragraphs.forEach((item) => {
                                   if (item.startsWith('Picture')) {
                                          // Xử lý khi gặp dòng bắt đầu bằng 'Picture'
                                          // ...
                                          console.log(item);

                                          var startIdxURL = item.indexOf('"');
                                          var endIdxURL = item.indexOf('"', startIdxURL + 1);
                                          var valueURL = item.substring(startIdxURL + 1, endIdxURL);
                                          console.log(valueURL); // "hhh"

                                          var startIdxTitleL = item.indexOf('"', endIdxURL + 1);
                                          var endIdxTitle = item.indexOf('"', startIdxTitleL + 1);
                                          var valueTitle = item.substring(startIdxTitleL + 1, endIdxTitle);
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
                                   } else if (item.startsWith('Author')) {
                                          // Xử lý khi gặp dòng bắt đầu bằng 'Author'
                                          // ...
                                          var startIdxAuthor = item.indexOf('"');
                                          var endIdxAuthor = item.indexOf('"', startIdxAuthor + 1);
                                          var valueAuthor = item.substring(startIdxAuthor + 1, endIdxAuthor);
                                          // console.log(valueURL); // "hhh"
                                          let temp = `
                                                        <span class="author">
                                                               <span>${valueAuthor}</span> (Theo Bloomberg) – Vnexpress
                                                        </span>
                                                 `;
                                          array.push(temp);
                                   } else if (item.startsWith('Heading')) {
                                          // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
                                          // ...
                                          var startIdxHeading = item.indexOf('"');
                                          var endIdxHeading = item.indexOf('"', startIdxHeading + 1);
                                          var valueHeading = item.substring(startIdxHeading + 1, endIdxHeading);
                                          headingTitle.innerHTML = valueHeading;

                                   } else {
                                          // Xử lý khi gặp các dòng còn lại
                                          // ...
                                          array.push('<span>' + item + '</span>');
                                   }
                            });
                            containerText.innerHTML = array.join('<br><br>');
                            // ...
                     })
                     .catch(error => {
                            console.error('Lỗi:', error);
                     });
       }
}

// action dang bai
function addPost(id) {
       let post = window.localStorage.getItem('post');
       let posts = JSON.parse(post);
       posts.forEach((value) => {
              if (value.id == id) {
                     value.isPost = '1';
              }
       });
       let temp = JSON.stringify(posts);
       window.localStorage.setItem('post', temp);
       showPost_isPush();
}

// action hide post
function hidePost(id) {
       let post = window.localStorage.getItem('post');
       let posts = JSON.parse(post);
       posts.forEach((value) => {
              if (value.id == id) {
                     value.isPost = '0';
              }
       });
       let temp = JSON.stringify(posts);
       window.localStorage.setItem('post', temp);
       showPost_isPush();
}


// test();
