// const menuBtn = document.querySelector(".menu-btn")
// let menuOpen = false
// menuBtn.addEventListener("click", () => {
//     if(!menuOpen) {
//         menuBtn.classList.add("open")
//         menuOpen = true
//     } else {
//         menuBtn.classList.remove("open")
//         menuOpen = false
//     }
// })

const mainMenu = document.querySelector(".mainMenu")
const closeMenu = document.querySelector(".closeMenu")
const openMenu = document.querySelector(".openMenu")

openMenu.addEventListener("click", show)
closeMenu.addEventListener("click", close)

function show(){
    mainMenu.style.display = "flex"
    mainMenu.style.top = "0"
}
function close(){
    mainMenu.style.top = "-100%"
}
