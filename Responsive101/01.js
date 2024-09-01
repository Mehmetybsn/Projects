

const navEL = document.querySelector(".nav-main")

const btnNavToggle = document.querySelector(".nav-main .btn-toggle")

btnNavToggle.addEventListener("click", ()=>{
    navEL.classList.toggle("active")
})