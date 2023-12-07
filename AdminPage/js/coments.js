

function setUpPost_toFilter() {
       let optionPost = document.querySelector('.comments-management-page .action-filter-coments .choice-post select');
       let optionLike = document.querySelector('.comments-management-page .action-filter-coments .choice-like select');
       let optionDislike = document.querySelector('.comments-management-page .action-filter-coments .choice-dislike select');
       let optionEmotion = document.querySelector('.comments-management-page .action-filter-coments .choice-emotion select');

       // clear giá trị  cũ
       optionPost.innerHTML = '';
       // optionLike.innerHTML = '';
       // optionDislike.innerHTML = '';
       // optionEmotion.innerHTML = '';

       // set value choice
       // posts
       let post = window.localStorage.getItem('post');
       let posts = JSON.parse(post);

       let optionTemp = document.createElement('option');
       optionTemp.value = '';
       optionPost.appendChild(optionTemp);
       posts.forEach((value) => {
              if (value.isPost == '1') {
                     let option = document.createElement('option');
                     option.value = value.id;
                     option.innerHTML = value.namePost;
                     optionPost.appendChild(option);
              }
       });
}
setUpPost_toFilter();

function filter() {
       let postNumber = document.querySelector(".comments-management-page .action-filter-coments .choice-post select").value;
       let sortLike = document.querySelector('.comments-management-page .action-filter-coments .choice-like select').value;
       let sortDislike = document.querySelector('.comments-management-page .action-filter-coments .choice-dislike select').value;
       let sortState = document.querySelector('.comments-management-page .action-filter-coments .choice-state select').value;
       let sortEmotion = document.querySelector('.comments-management-page .action-filter-coments .choice-emotion select').value;

       let arrComent = filterPost(postNumber);

       let sortArrComent_toLike = filterLike(arrComent, sortLike);

       let sortArrComent_toDislike = filterDislike(sortArrComent_toLike, sortDislike);

       let filter_State = filterState(sortArrComent_toDislike, sortState);

       let sortArrComent_toEmotion = filterEmotion(filter_State, sortEmotion);



       showDataTable(sortArrComent_toEmotion);
       // console.log(sortArrComent_toLike);
}

// loc ra binh luan theo bai do --> arr
function filterPost(idPost) {
       let arrComent = [];

       let comment = window.localStorage.getItem('coment');
       let coments = JSON.parse(comment);

       coments.forEach((value) => {
              if (value.idPost == idPost) {
                     arrComent.push(value);
              }
       });

       return arrComent;
}

// sap xep theo so luot like --> sort arr
function filterLike(arrComent, sortLike) {
       if (sortLike == 'ASC') {
              arrComent.sort((a, b) => {
                     return Number(a.NumberLike) - Number(b.NumberLike);
              });
              return arrComent;
       }
       else if (sortLike == 'DES') {
              arrComent.sort((a, b) => {
                     return Number(b.NumberLike) - Number(a.NumberLike);
              });
              return arrComent;
       } else {
              return arrComent;
       }
}

// sap xep theo so luot dislike --> sort arr
function filterDislike(arrComent, sortDisike) {
       if (sortDisike == 'ASC') {
              arrComent.sort((a, b) => {
                     return Number(a.NumberDislike) - Number(b.NumberDislike);
              });
              return arrComent;
       }
       else if (sortDisike == 'DES') {
              arrComent.sort((a, b) => {
                     return Number(b.NumberDislike) - Number(a.NumberDislike);
              });
              return arrComent;
       } else {
              return arrComent;
       }
}
// loc binh luan theo trang thai
function filterState(arrComent, sortState) {
       let arr = [];
       if (sortState == 'show') {
              arrComent.forEach((value) => {
                     if (value.state == '1') {
                            arr.push(value);
                     }
              });
              return arr;
       }
       else if (sortState == 'hide') {
              arrComent.forEach((value) => {
                     if (value.state == '0') {
                            arr.push(value);
                     }
              });
              return arr;
       } else {
              return arrComent;
       }
}

// sap xep coment theo huong tieu cuc va tich cuc
function filterEmotion(arrComent, sortEmotion) {
       // setup các từ tiêu cực
       let string = "đụ má đỉ mẹ dcm cc dở dỡ tệ ngu ngốc đánh im không đéo địt hạch nhu haiz haizz fuck hay";
       if (sortEmotion == 'positive') {
              arrComent.sort((a, b) => {
                     return Number(demSoLanXuatHien(string, a.valueText)) - Number(demSoLanXuatHien(string, b.valueText));
              });
              return arrComent;
       }
       else if (sortEmotion == 'negative') {
              arrComent.sort((a, b) => {
                     return Number(demSoLanXuatHien(string, b.valueText)) - Number(demSoLanXuatHien(string, a.valueText));
              });
              return arrComent;
       }
       else {
              return arrComent;
       }
}

function demSoLanXuatHien(chuoi, tuCanDem) {
       // do bình luận là một chuỗi nên phải tách bình luận thành mảng để kiểm tra từng từ trong đó
       // tach binh luan thanh mang chua cac chuoi
       let arrString = tuCanDem.split(' ');
       // biến đếm tổng các từ xuất hiện
       let count = 0;

       arrString.forEach((value) => {
              // biến đếm với mỗi từ trong mảng xuất hiện bao nhiu lần
              let soLanXuatHien = 0;

              let index = chuoi.indexOf(value);

              while (index !== -1) {
                     soLanXuatHien++;
                     index = chuoi.indexOf(value, index + 1);
              }
              count += soLanXuatHien;
       });

       return count;
}

function showDataTable(arrComent) {

       let tableData = document.querySelector('.comments-management-page .total-coments table');
       tableData.innerHTML = '';

       let stringHeading = `
              <th>
                     <span>Nội dung bình luận</span>
              </th>
              <th>
                     <span>Like</span>
              </th>
              <th>
                     <span>Dislike</span>
              </th>
              <th>
                     <span>ID User</span>
              </th>
              <th>
                     <span>Tên người bình luận</span>
              </th>
              <th>
                     <span>Trạng thái</span>
              </th>
              <th>
                     <span>Hành động</span>
              </th>
       `;

       let trHeading = document.createElement('tr');
       trHeading.innerHTML = stringHeading;
       tableData.appendChild(trHeading);

       // đổ dữ liệu vào
       arrComent.forEach((value) => {
              let stringValue = `
                     <td class="comment-content">
                            <span class="value">${value.valueText}</span>
                     </td>
                     <td class="like-content">
                            <span class="value">${value.NumberLike}</span>
                     </td>
                     <td class="dislike-content">
                            <span class="value">${value.NumberDislike}</span>
                     </td>
                     <td class="idUser">
                            <span class="value">${value.idUser}</span>
                     </td>
                     <td class="name-user">
                            <span class="value">${findUser(value.idUser)}</span>
                     </td>
                     <td class="state-comment">
                            <span class="value">${returnState(value.state)}</span>
                     </td>
                     <td class="action-delete-coment">
                            <span onclick = "hideComment(${value.idComent})"><i class="fa fa-ban" aria-hidden="true"></i></span>
                            <span onclick = "showComment(${value.idComent})"><i class="fa fa-eye" aria-hidden="true"></i></span>
                     </td>
              `;

              let trValue = document.createElement('tr');
              trValue.innerHTML = stringValue;
              tableData.appendChild(trValue);
       });
}

function returnState(value) {
       if (value == '1') {
              return 'Đang đăng';
       }
       return 'Đã ẩn';
}

function findUser(idUser) {
       let user = window.localStorage.getItem('user');
       let users = JSON.parse(user);
       let nameUser = '';
       users.forEach((value) => {
              if (value.idUser == idUser) {
                     nameUser = value.fullName;
              }
       });
       return nameUser;
}

// action hide commetn'
function hideComment(idComment) {
       let comment = window.localStorage.getItem('coment');
       let coments = JSON.parse(comment);

       coments.forEach((value) => {
              if (value.idComent == idComment) {
                     value.state = Number('0');
              }
       });

       let temp = JSON.stringify(coments);
       window.localStorage.setItem('coment', temp);
       filter();
}

// action show comment
function showComment(idComment) {
       let comment = window.localStorage.getItem('coment');
       let coments = JSON.parse(comment);

       coments.forEach((value) => {
              if (value.idComent == idComment) {
                     value.state = Number('1');
              }
       });

       let temp = JSON.stringify(coments);
       window.localStorage.setItem('coment', temp);
       filter();
}