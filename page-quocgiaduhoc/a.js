let header_element = document.querySelector("#head");
let buton = document.querySelector(".hello");

buton.onclick = () => {
    delayLoop(0, 1);
};

function delayLoop(iterations, delay) {
    let count = window.scrollY;

    const intervalId = setInterval(function () {
        //   console.log('Lần lặp thứ', count);
        window.scrollTo(0, count);
        count -= 10;

        if (count <= iterations) {
            clearInterval(intervalId); // Dừng lặp khi đạt số lần lặp
            buton.style.display = "none";
        }
    }, delay);
}

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

// function showMenu() {
//     document.querySelector(".nav-mobile").classList.add("show");
//     document.querySelector(".screendark").classList.add("on");
// }

// function hiddenMenu() {
//     document.querySelector(".nav-mobile").classList.remove("show");
//     document.querySelector(".screendark").classList.remove("on");
// }

// let flag = false;

// function showSubMenu() {
//     if (!flag) {
//         document.querySelector(".plus").innerHTML = "-";
//         document.querySelector(".nav-mobile .sub-menu").style.display = "block";
//         flag = true;
//     } else {
//         document.querySelector(".plus").innerHTML = "+";
//         document.querySelector(".nav-mobile .sub-menu").style.display = "none";
//         flag = false;
//     }
// }
