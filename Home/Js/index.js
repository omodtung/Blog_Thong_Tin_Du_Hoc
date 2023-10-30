
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




