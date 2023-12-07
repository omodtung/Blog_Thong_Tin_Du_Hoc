const post = [
       {
              id : '1',
              path : "../storage/post_1/text.txt",
              state : '0',
              view : '0',
              datePost : '2017-10-11',
              namePost : 'VÌ SAO AUSTRALIA MUỐN MỞ CỬA BIÊN GIỚI ĐÓN DU HỌC SINH',
              isPost : '1'
       },
       {
              id : '2',
              path : "../storage/post_2/text.txt",
              state : '0',
              view : '0',
              datePost : '2017-10-11',
              namePost : 'TẦM QUAN TRỌNG CỦA HOẠT ĐỘNG NGOẠI KHÓA TRONG HỒ SƠ DU HỌC',
              isPost : '1'
       },
       {
              id : '3',
              path : "../storage/post_3/text.txt",
              state : '0',
              view : '0',
              datePost : '2017-10-11',
              namePost : 'CÁCH VIẾT BÀI TỰ LUẬN ẤN TƯỢNG VÀO ĐẠI HỌC MỸ',
              isPost : '1'
       },
       {
              id : '4',
              path : "../storage/post_4/text.txt",
              state : '0',
              view : '0',
              datePost : '2017-10-11',
              namePost : 'HỘI THẢO ONLINE CÙNG UNIVERSITY OF MELBOURNE – TRINITY COLLEGE',
              isPost : '1'
       },
       {
              id : '5',
              path : "../storage/post_5/text.txt",
              state : '0',
              view : '0',
              datePost : '2017-10-11',
              namePost : 'ĐẠI HỌC ADELAIDE, AUSTRALIA CẤP HỌC BỔNG ĐẾN 50%',
              isPost : '1'
       }
];

let temp = JSON.stringify(post);
window.localStorage.setItem('post',temp);