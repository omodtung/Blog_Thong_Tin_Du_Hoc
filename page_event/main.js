window.addEventListener("scroll", function () {
    const x = window.scrollX;
    const y = window.scrollY;
  
    if (this.window.innerWidth >= 1026) {
        if (Math.round(y) > 50) {
            header_element.classList.add("close");
            buton.style.display = "flex";
        } else {
            header_element.classList.remove("close");
            buton.style.display = "none";
        }
    } else {
        if (Math.round(y) > 10) {
            header_element.classList.add("close_mobile");
            buton.style.display = "flex";
        } else {
            header_element.classList.remove("close_mobile");
            buton.style.display = "none";
        }
    }
  });

// Xem thêm lịch
let isHidden = true;
function showMoreSchedule(){
    const items = document.querySelectorAll('.row-calen');
    const showMoreBtn = document.querySelector('.btn-show');

    items.forEach((item, index) => {
      if (isHidden || index < 5) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    isHidden = !isHidden; // Đảo ngược trạng thái

    if (isHidden) {
      showMoreBtn.textContent = 'XEM THÊM';
    } else {
      showMoreBtn.textContent = 'THU GỌN';
    }
}