
// chuyen dong header
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

window.addEventListener('scroll', function () {
       const x = window.scrollX;
       const y = window.scrollY;

       // thêm phần này vào CSS
       let command_close_header = `
              .close_header {
                     transform: translateY(-65%);              // cho header thụt lên bao nhiu phần trăm
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

// hieu ung click chon cac muc tren thanh menubar
let list_menubar = document.querySelectorAll('.header-2 > ul > li');
console.log(list_menubar);
for (let i = 0; i < list_menubar.length ; i++) {
       // list_menubar[i].setAttribute('value','0');
       const tab_switcher = list_menubar[i];
       list_menubar[i].onclick = () => {
              document.querySelector('.header-2-li-is-active').classList.remove('header-2-li-is-active');
              tab_switcher.classList.add('header-2-li-is-active');
              // list_menubar[i].setAttribute('value','1');
       }
}






