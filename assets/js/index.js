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
