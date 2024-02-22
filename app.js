document.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})

document.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("scrolledsecond")
    } else {
        header.classList.remove("scrolledsecond")
    }
})

document.addEventListener("scroll", () => {
    let header = document.querySelector(".fading");
    if (window.scrollY > 700) {
        header.classList.add("scrolledfade")
    } else {
        header.classList.remove("scrolledfade")
    }
})

let menuIcon = document.getElementById("menuIcon");
let secNavbar = document.querySelector(".secnavbar");
let dissapear = document.querySelector(".hellotext");

menuIcon.addEventListener("click", function () {
    secNavbar.classList.toggle("active");
    dissapear.classList.toggle("active");
    
});

let wishlistAdd = document.getElementById("addBtn")
let quantity = document.getElementById("counter")

wishlistAdd.addEventListener("click", function(){
    quantity.innerText++;
});