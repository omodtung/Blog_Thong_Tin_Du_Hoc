
// chuyen dong header
let header_element = document.querySelector('.header-2');
// let header_element_1 = document.querySelector('.header-1');

// setInterval(()=>{
//        console.log(header_element.pageXOffset);
//        console.log(header_element_1.pageXOffset)
// },1000)

// let x = prompt('Input A:');
// console.log(x);

// if (isNaN(x) == false){
//        alert(`${x} la mot so`);
// }else {
//        alert(`${x} khong la mot so`);
// }

window.addEventListener('scroll', function () {
       const x = window.scrollX;
       const y = window.scrollY;

       console.log('Tọa độ cuộn X:', x);
       console.log('Tọa độ cuộn Y:', y);

       if(Math.round(y) > 50){
              header_element.style.display = 'none';
       }
       else{
              header_element.style.display = 'flex';
       }
});