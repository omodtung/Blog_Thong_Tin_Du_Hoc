// chuyen dong scroll len dau trang
let header_element = document.querySelector("#head"); // lấy id của header
let buton = document.querySelector(".button-to-top"); // lấy class của nút trở lên trang nhất
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
            header_element.classList.add("closes");
            buton.style.display = "flex";
            console.log("hehe");
        } else {
            header_element.classList.remove("closes");
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

// hieu ung click chon cac muc tren thanh menubar
let list_menubar = document.querySelectorAll(".header-2 > ul > li");
console.log(list_menubar);
for (let i = 0; i < list_menubar.length; i++) {
    // list_menubar[i].setAttribute('value','0');
    const tab_switcher = list_menubar[i];
    list_menubar[i].onclick = () => {
        document
            .querySelector(".header-2-li-is-active")
            .classList.remove("header-2-li-is-active");
        tab_switcher.classList.add("header-2-li-is-active");
        // list_menubar[i].setAttribute('value','1');
    };
}

function validateForm() {
    var x = document.getElementById("name").value;
    if (x == "") {
        document.getElementById("status").innerHTML = "Name cannot be empty";
        return false;
    }
    x = document.getElementById("email").value;
    if (x == "") {
        document.getElementById("status").innerHTML = "Email cannot be empty";
        return false;
    } else {
        // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let email = document.forms["contact-form"]["email"].value;
        // console.log("test"+email);
        // if(!re.test(x)){
        //     document.getElementById('status').innerHTML = "Email format invalid";
        //     return false;
        // }

        if (email.search(/^.+@.+\..+$/i) == -1) {
            alert("Email chưa đúng định dạng <sth>@<sth>.<sth>");
            return false;
        }
    }
    x = document.getElementById("subject").value;
    if (x == "") {
        document.getElementById("status").innerHTML =
            "So Dien Thoai cannot be empty";
        return false;
    } else {
    }
    x = document.getElementById("message").value;
    if (x == "") {
        document.getElementById("status").innerHTML = "Message cannot be empty";
        return false;
    }

    document.getElementById("status").innerHTML = "Sending...";
    document.getElementById("contact-form").submit();
}
window.addEventListener("load", function () {
    if (this.window.innerWidth >= 1026) {
        this.document.querySelector(".login").style.display = "flex";
    } else {
        this.document.querySelector(".login").style.display = "none";
    }
});
