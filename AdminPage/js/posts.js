// set up data

let post = window.localStorage.getItem('post');
let posts = JSON.parse(post);

let comment = window.localStorage.getItem('coment');
let comments = JSON.parse(comment);


function showPost_isPush() {
       let tableData = document.querySelector('.post-management-page table');

}

function test() {
       let count = 0;
       while (count < 11) {
              count += 1;
              
              let path = `../storage/post_${count}/text.txt`;
              let pathText = path;

              fetch(pathText)
                     .then(response => response.text())
                     .then(content => {
                            console.log(pathText);
                            let paragraphs = content.split('\n');
                            let valueHeading = '';
                            paragraphs.forEach((item) => {
                                   if (item.startsWith('Heading') && valueHeading == '') {
                                          // Xử lý khi gặp dòng bắt đầu bằng 'Heading'
                                          // ...
                                          var startIdxHeading = item.indexOf('"');
                                          var endIdxHeading = item.indexOf('"', startIdxHeading + 1);
                                          valueHeading = item.substring(startIdxHeading + 1, endIdxHeading);
                                          // valueHeading = valueHeading.slice(0, 47) + '...';
                                          // HeadingString = `
                                          //        <a href="#" id="${post.id}" onclick="setStatePost(event,'${post.id}')">
                                          //               ${valueHeading}
                                          //        </a>
                                          // `;
                                          console.log(valueHeading);
                                   }
                            
                            })
                            
                     })
                     .catch(error => {
                            console.error('Lỗi:', error);
                     });
       }
}
test();