let header_element = document.querySelector("#head");

let buton = document.querySelector(".hello");
console.log(buton);
console.log("1");
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

    if (Math.round(y) > 50) {
        // header_element.style.display = 'none';
        header_element.classList.add("close");
        buton.style.display = "flex";
    } else {
        header_element.classList.remove("close");
        buton.style.display = "none";
    }
});
