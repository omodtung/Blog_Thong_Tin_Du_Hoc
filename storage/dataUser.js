let users = [
       {
              fullName : 'Trương Công Phúc',
              idUser : 'Admin000',
              Password : '123123',
              role : 'admin',
              stateLogin : '0'
       },
       {
              fullName : 'Nguyễn Thanh Sang',
              idUser : 'Admin001',
              Password : '123123',
              role : 'admin',
              stateLogin : '0'
       },
       {
              fullName : 'Trần Tiến Phát',
              idUser : 'Admin002',
              Password : '123123',
              role : 'admin',
              stateLogin : '0'
       },
       {
              fullName : 'Đỗ Thế Tùng',
              idUser : 'Admin003',
              Password : '123123',
              role : 'admin',
              stateLogin : '0'
       },
       {
              fullName : 'Đỗ Tiến Đạt',
              idUser : 'User123',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Trần Thanh Huy',
              idUser : 'User456',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Lê Xuân Thịnh',
              idUser : 'User789',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Nguyễn Anh Tuấn',
              idUser : 'User222',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Trần Khang Thịnh',
              idUser : 'User333',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Lê Triệu Vỹ',
              idUser : 'User444',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Trương Công Đức',
              idUser : 'User555',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Lê Tấn Minh Toàn',
              idUser : 'User666',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Lê Tấn Tài',
              idUser : 'User777',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Trần Thị Tèo',
              idUser : 'User888',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },
       {
              fullName : 'Nguyễn Văn Đớ',
              idUser : 'User999',
              Password : '123123',
              role : 'user',
              stateLogin : '0'
       },

];

let temp1 = JSON.stringify(users);
window.localStorage.setItem('user',temp1);