// BURGER MENU
const burgerMenu = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".header-nav")
const burgerItem = document.querySelector(".burger-item")

burgerMenu.addEventListener("click", () => {
    if (!burgerMenu.classList.contains("active")) {
        burgerMenu.classList.add("active")
        navMenu.style.transform = "translate(0)"
        burgerItem[0].style.transform = "rotate(45deg) translateY(11px)"
        burgerMenu[2].style.transform = "rotate(-45deg) translateY(-11px)"
        // burgerItem[1].style.transform = "translateX(9px)"
        burgerItem[1].style.opacity = "0"
    } else {
        burgerMenu.classList.remove("active")
        navMenu.style.transform = "translate(100%)"
        burgerItem[0].style.transform = "rotate(0deg)"
        burgerItem[2].style.transform = "rotate(0deg)"
        // burgerItem[1].style.transform = "translateX(0)"
        burgerItem[1].style.opacity = "1"

    }
})