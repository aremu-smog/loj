var nav_open = false

const nav_menu = document.querySelector(".menu")
const nav = document.querySelector("nav")


nav_menu.addEventListener("click", () => {
    if(nav_open){
        nav.style.height = '0px'
        nav.style.transitionDelay = '0.25s'
        nav.classList.remove("nav_open")
        nav_menu.classList.remove("nav_open")
    }else{
        nav.style.transitionDelay = '0s'
        nav.classList.add("nav_open")
        nav_menu.classList.add("nav_open")
        nav.style.height = '350px'
        
    }
    
    nav_open = !nav_open
}, false)
// document.addEventListener("load", ()=>{
    // })
const changeSvgsColor = (color) => {
    const logo = document.querySelector(`#website-logo`)
    const mobile_menu = document.querySelector('#mobile-menu')
    logo.style.fill = color
    mobile_menu.style.fill = color
}

const main_header = document.querySelector(".main-header")
const main_header_container = main_header.querySelector(".container")

var scroll_amount
document.addEventListener('scroll', ()=>{
    scroll_amount = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    if(scroll_amount > 536){
        main_header.style.backgroundColor = "rgba(255, 255, 255, 1)"
        main_header.style.padding = "0"
        main_header.classList.add("nav_open_pc")
        main_header_container.style.padding = "0.5em"
        changeSvgsColor("#192751")
    }else{
        main_header.style.padding = "2em 0"
        main_header.style.backgroundColor = "rgba(255, 255, 255, 0)"
        main_header_container.style.padding = "2em"
        main_header.classList.remove("nav_open_pc")
        changeSvgsColor("white")
    }
   
})


const become_a_client = document.querySelector("#open_popup")
const close_popup = document.querySelector("#close_popup")
become_a_client.addEventListener("click", () =>{popup("open") } , false)
close_popup.addEventListener("click", () =>{popup("close") } , false)

const get_started = document.querySelector("#get_started")

const form = document.querySelector("#contact_form")
const success = document.querySelector("#success_message")

const popup = (action) => {
    const popup = document.querySelector("#popup")
    if(action == 'close'){
        popup.classList.remove('pop-up-open')
    }else if(action == 'open'){
        popup.classList.add('pop-up-open')
    }
    form.style.display = "block"
    success.style.display = "none"
}

const send_request = () => {
    const fields = ["last_name","last_name","email","job_title","company_name","work_phone","about_brand"]
    const errors = []
    const empty_fields = []
    const data = new FormData()
    let field_value
    fields.forEach(field => {
        field_value = document.querySelector(`#${fields}`).value
        if(field_value == ""){
            empty_fields.push(field)
            errors.push("No fields can be empty")
        }else{
            data.append(field, field_value)
        }
    })


    
    if(errors.length > 0){
        alert("No fields can be empty")
    }else{
        fetch("contact.php", 
        {
            "method":"POST",
            "body": data,
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(res => res.text())
        .then(data => {
            form.style.display = "none"
            success.style.display = "block"
            alert(data)
        })
        .catch(error => {
            alert(error.message)
        })
    }
}

get_started.addEventListener("click", ()=> {
    send_request()
}, false)