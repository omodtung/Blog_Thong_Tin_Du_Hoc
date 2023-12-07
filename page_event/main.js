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