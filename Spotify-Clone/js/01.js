const hamburgerNavEl = document.querySelector(".hamburger-nav")

const btnToggleEl = document.querySelector(".btn-toggle-hamburger")

btnToggleEl.addEventListener("click",(e) => {
    hamburgerNavEl.classList.toggle("active")
})