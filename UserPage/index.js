
// chuyen dong scroll len dau trang
let header_element = document.querySelector('#header');        // lấy id của header
let buton = document.querySelector('.button-to-top');          // lấy class của nút trở lên trang nhất
buton.onclick = () => {
       delayLoop(0, 1);
};

function delayLoop(iterations, delay) {
       let count = window.scrollY;

       const intervalId = setInterval(function () {
              //   console.log('Lần lặp thứ', count);
              window.scrollTo(0, count)
              count -= 10;

              if (count <= iterations) {
                     clearInterval(intervalId); // Dừng lặp khi đạt số lần lặp
                     buton.style.display = 'none';
              }
       }, delay);
}
// chuyen dong header
window.addEventListener('scroll', function () {
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
              header_element.classList.add('close_header');
              buton.style.display = 'flex';
       }
       else {
              header_element.classList.remove('close_header');
              buton.style.display = 'none';
       }
});

// 
// kiểm tra xem có người đăng nhập hay chưa
function isLogin() {
       let user = window.localStorage.getItem('user');
       let users = JSON.parse(user);
       let flag = 0;
       let objUser = {};
       users.forEach((value) => {
              if (value.stateLogin == '1') {
                     flag = 1;
                     objUser = value;
              }
       });

       if (flag == 1) {
              return objUser;
       }
       else {
              return null;
       }
}

// thiết lập các thông tin về user và show lên trình duyệt
function setUpInforUser() {
       let fullName = document.querySelector('.information-user-content .fullName .value');
       let idUser = document.querySelector('.information-user-content .IdUser .value');
       let passWord = document.querySelector('.information-user-content .Password .value');

       // lấy thông tin người đăng nhập
       let objUser = isLogin();

       if (objUser != null) {
              fullName.innerHTML = objUser.fullName;
              idUser.innerHTML = objUser.idUser;
              passWord.innerHTML = objUser.Password;
              showUserComent(objUser.idUser);
              logOut(objUser.idUser);
       }
}
setUpInforUser();

function clearTableComent() {
       let table = document.querySelector('.activity-user table');
       table.innerHTML = '';
       table.innerHTML = `
              <tr class="heading-table">
                     <th>Tên bài báo</th>
                     <th>Nội dung bình luận</th>
                     <th>Like</th>
                     <th>Dislike</th>
                     <th>Ngày đăng</th>
                     <th>Trạng thái</th>
              </tr>
       `;
}

// thiết lập các binh luận liên quan đến người dùng đó
function showUserComent(idUser) {
       let coment = window.localStorage.getItem('coment');
       let coments = JSON.parse(coment);
       let post = window.localStorage.getItem('post');
       let posts = JSON.parse(post);
       let tableComent = document.querySelector('.activity-user table ');

       // làm sạch table
       clearTableComent();

       // sắp xếp các giá trị bài binh luan
       let commentsSortedByDate = coments.sort((a, b) => {
              // Chuyển đổi giá trị datePost thành đối tượng Date để so sánh
              let dateA = new Date(a.datePost);
              let dateB = new Date(b.datePost);

              // So sánh các giá trị datePost
              return dateB - dateA;
       });
       commentsSortedByDate.forEach((value) => {
              if (value.idUser == idUser) {
                     let arr = [];
                     let namePostString = posts.find((value2) => {
                            return value2.id == value.idPost;
                     });

                     let namePost = `
                            <td class="name-post">
                                   <span>${namePostString.namePost}</span>
                            </td>
                     `;
                     arr.push(namePost);

                     let comentValue = `
                            <td class="coment-value">
                                   <span>${value.valueText}</span>
                            </td>
                     `;
                     arr.push(comentValue);

                     let likeNumber = `
                            <td class="like-number">
                                   <span>${value.NumberLike}</span>
                            </td>
                     `;

                     arr.push(likeNumber);

                     let DislikeNumber = `
                            <td class="dislike-number">
                                   <span>${value.NumberDislike}</span>
                            </td>
                     `;

                     arr.push(DislikeNumber);

                     let dateComent = `
                            <td class="date-coment">
                                   <span>${value.datePost}</span>
                            </td>
                     `;

                     arr.push(dateComent);

                     if (value.state == 1) {
                            let stateComent = `
                                   <td class="state-coment">
                                          <span>Được đăng</span>
                                   </td>
                            `;
                            arr.push(stateComent);
                     }
                     else {
                            let stateComent = `
                                   <td class="state-coment">
                                          <span>Đã bị gỡ do vi phạm tiêu chuẩn cộng đồng</span>
                                   </td>
                            `;
                            arr.push(stateComent);
                     }

                     let tr = document.createElement('tr');
                     tr.innerHTML = arr.join('');

                     tableComent.appendChild(tr);
              }
       });
}

// đăng xuất
function logOut(idUser) {
       let buttonLogOut = document.querySelector('.information-user-content .logout');

       buttonLogOut.addEventListener('click', () => {
              let user = window.localStorage.getItem('user');
              let users = JSON.parse(user);

              users.forEach((value) => {
                     if (value.idUser == idUser) {
                            value.stateLogin = '0';
                     }
              });
              let ex = JSON.stringify(users)
              window.localStorage.setItem('user', ex);
              window.location.href = '../Home/index.html';
       });
}

// Thêm sự kiện ngăn chặn người dung quay lại
function backUserSetting(){
       if(isLogin() == null){
              window.alert('Bạn chưa đăng nhập, hãy đăng nhập trước !!');
              window.location.href = '../Home/index.html';
       }
}
backUserSetting();

