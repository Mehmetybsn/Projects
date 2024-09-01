const listEl = document.querySelector(".item-list")

const carouselNavEl = document.querySelector(".carousel nav")

// Event delegation (olay yetkilendirme)
carouselNavEl.addEventListener("click", handleNavClick)


function handleNavClick(e) {
    const target = e.target
    const targetId = target.dataset.id
    if(!targetId) return /* tek satır olduğu için {} kullanmadık */

    listEl.style.marginLeft = targetId * -100 +"%"
}
