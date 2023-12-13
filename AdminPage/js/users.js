// logout
function logOut(){
       let user = window.localStorage.getItem('user');
       let users = JSON.parse(user);

       users.forEach((value)=>{
              if(value.stateLogin == '1'){
                     value.stateLogin = '0';
              }
       })

       let temp = JSON.stringify(users);
       window.localStorage.setItem('user',temp);
       window.location.href = '../HomeForGuest/index.html';
}

// ngan chankhi nguoi dung back lai trang sao khi logout
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
// Thêm sự kiện ngăn chặn người dung quay lại
function backUserSetting(){
       if(isLogin() == null){
              window.alert('Bạn chưa đăng nhập, hãy đăng nhập trước !!');
              window.location.href = '../HomeForGuest/index.html';
       }
}
backUserSetting();


function showDataTable(arrComent) {

       
       let tableData = document.querySelector('.user-management-page .total-user table');
       tableData.innerHTML = '';

       let stringHeading = `
                     <th>
                            <span>ID Người dùng</span>
                     </th>
                     <th>
                            <span>Họ tên</span>
                     </th>
                     <th>
                            <span>Mật khẩu</span>
                     </th>
                     <th>
                            <span>Vai trò</span>
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
                     <td class="id-user">
                            <span class="value">${value.idUser}</span>
                     </td>
                     <td class="full-name">
                            <span class="value">${value.fullName}</span>
                     </td>
                     <td class="password">
                            <span class="value">${value.Password}</span>
                     </td>
                     <td class="role">
                            <span class="value">${value.role}</span>
                     </td>
                     <td class="state-user">
                            <span class="value">${value.state}</span>
                     </td>
                     <td class="action-delete-user">
                            <span onclick = "hideUser('${value.idUser}')"><i class="fa fa-ban" aria-hidden="true"></i></span>
                            <span onclick = "deleteUser('${value.idUser}')" ><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                     </td>
              `;

              let trValue = document.createElement('tr');
              trValue.innerHTML = stringValue;
              tableData.appendChild(trValue);
       });
}



function hideUser(idUser) {
       console.log(1);
       let user = window.localStorage.getItem('user');
       let users = JSON.parse(user);

       users.forEach((value) => {
              if (value.idUser == idUser) {
                     if(value.state == '1'){
                            value.state = '0';
                     }else{
                            value.state = '1';
                     }
                     
              }
       });

       let temp = JSON.stringify(users);
       window.localStorage.setItem('user', temp);
       showDataTable(users);
}
function deleteUser(idUser) {
       let decision = window.confirm("Bạn có chắc muốn xóa tài khoảng này");
       if (decision == true) {
              let user = window.localStorage.getItem('user');
              let users = JSON.parse(user);
              let usersAterDelete = [];
              users.forEach((value) => {
                     if (value.idUser != idUser) {
                            usersAterDelete.push(value);
                     }
              });

              let temp = JSON.stringify(usersAterDelete);
              window.localStorage.setItem('user', temp);
              window.alert("Xóa thành công");
              showDataTable(usersAterDelete);
       }
}


function setUpUser_toFilter() {

       // data get
       let user = window.localStorage.getItem('user');
       let users = JSON.parse(user);

       showDataTable(users);
}
setUpUser_toFilter();

function filter(){
       let condition = document.querySelector('.user-management-page .action-filter-user input').value;
       console.log(condition);
       let arrFillter = [];

       let user = window.localStorage.getItem('user');
       let users = JSON.parse(user);

       users.forEach((value)=>{
              if(value.idUser.toLowerCase().includes(condition.toLowerCase() ) || value.fullName.toLowerCase().includes(condition.toLowerCase()) || value.Password.toLowerCase().includes(condition.toLowerCase()) || value.role.toLowerCase().includes(condition.toLowerCase()) || value.state.toLowerCase().includes(condition.toLowerCase())){
                     arrFillter.push(value);
              }
       });

       showDataTable(arrFillter);  
}