// BURGER MENU
const burgerMenu = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".header-nav")
const burgerItem = document.querySelectorAll(".burger-item")

burgerMenu.addEventListener("click", () => {
    if (!burgerMenu.classList.contains("active")) {
        burgerMenu.classList.add("active")
        navMenu.style.transform = "translate(0)"
        burgerItem[0].style.transform = "rotate(45deg) translateY(11px)"
        burgerItem[2].style.transform = "rotate(-45deg) translateY(-11px)"
        burgerItem[1].style.transform = "translateX(9px)"
        burgerItem[1].style.opacity = "0"
    } else {
        burgerMenu.classList.remove("active")
        navMenu.style.transform = "translate(100%)"
        burgerItem[0].style.transform = "rotate(0deg) translateY(0)"
        burgerItem[2].style.transform = "rotate(0deg) translateY(0)"
        burgerItem[1].style.transform = "translateX(0)"
        burgerItem[1].style.opacity = "1"

    }
})

// WINDOWS SCROLL
let  progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function (){
    let progressHeight = (window.pageYOffset /
        totalHeight) * 100;
    progress.style.height = progressHeight + "%"
}