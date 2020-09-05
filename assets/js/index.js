var nav_open = false

const nav_menu = document.querySelector(".menu")
const nav = document.querySelector("nav")

nav_menu.addEventListener("click", () => {
    if(nav_open){
        nav.style.height = '0px'
        nav.classList.remove("nav_open")
    }else{
        nav.classList.add("nav_open")
        nav.style.height = '350px'
      
    }

    nav_open = !nav_open
}, false)
// document.addEventListener("load", ()=>{
// })

const main_header = document.querySelector(".main-header")
const main_header_container = main_header.querySelector(".container")

var scroll_amount
document.addEventListener('scroll', ()=>{
    scroll_amount = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    if(scroll_amount > 536){
        main_header.style.backgroundColor = "rgba(25, 39, 81, 1)"
        main_header.style.padding = "0"
        main_header_container.style.padding = "1em"
    }else{
        main_header.style.padding = "2em 0"
        main_header.style.backgroundColor = "rgba(25, 39, 81, 0)"
        main_header_container.style.padding = "2em"
    }
   
})