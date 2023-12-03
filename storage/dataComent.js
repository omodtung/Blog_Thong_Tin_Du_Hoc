let coments = [
       {
              idComent : '1',
              idPost: '1',
              idUser: 'User123',
              valueText: 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
              NumberLike: 0,
              NumberDislike: 0,
              datePost: '2023-11-20',
              state : 1
       },
       {
              idComent : '2',
              idPost: '1',
              idUser: 'User456',
              valueText: 'Bài viết thật là hay !!',
              NumberLike: 0,
              NumberDislike: 0,
              datePost: '2023-11-19',
              state : 1
       },
       {
              idComent : '3',
              idPost: '1',
              idUser: 'User789',
              valueText: 'Tôi cảm thấy thật tuyệt vời',
              NumberLike: 0,
              NumberDislike: 0,
              datePost: '2023-11-20',
              state : 1
       },
       {
              idComent : '4',
              idPost : '1',
              idUser : 'User111',
              valueText : 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-11-11',
              state : 1  
       },
       {
              idComent : '5',
              idPost : '2',
              idUser : 'User123',
              valueText : 'Hay !!',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-11-12',
              state : 1   
       },
       {
              idComent : '6',
              idPost : '2',
              idUser : 'User222',
              valueText : 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-11-13' ,
              state : 1  
       },
       {
              idComent : '7',
              idPost : '3',
              idUser : 'User123',
              valueText : 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-10-20' ,
              state : 1  
       },
       {
              idComent : '8',
              idPost : '3',
              idUser : 'User333',
              valueText : 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-10-20' ,
              state : 1  
       },
       {
              idComent : '9',
              idPost : '3',
              idUser : 'User444',
              valueText : 'Tôi dang học ở trường đó nè !!',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-09-20' ,
              state : 1 
       },
       {
              idComent : '10',
              idPost : '4',
              idUser : 'User555',
              valueText : 'Có ai muốn đăng ký học cùng tôi không ?',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-11-10',
              state : 1   
       },
       {
              idComent : '11',
              idPost : '4',
              idUser : 'User666',
              valueText : 'Thật tuyệt vời !!',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-02-20'  ,
              state : 1 
       },
       {
              idComent : '12',
              idPost : '5',
              idUser : 'User777',
              valueText : 'Tôi cảm thấy bài viết thật hay và chi tiết.',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-11-10',
              state : 1   
       },
       {
              idComent : '13',
              idPost : '5',
              idUser : 'User888',
              valueText : 'Viết chi tiết lắm',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-11-14',
              state : 1   
       },
       {
              idComent : '14',
              idPost : '5',
              idUser : 'User999',
              valueText : 'Rất thuyết phục !!',
              NumberLike : 0,
              NumberDislike : 0,
              datePost : '2023-08-20'  ,
              state : 1 
       },
];

let temp = JSON.stringify(coments);
window.localStorage.setItem('coment',temp);