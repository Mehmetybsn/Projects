// bütün carousel nav buttonlarını bir liste olarak topla
// liste içerisinde döngü kullanarak her buttona click olay dinleyicisi ekle 

const listEl = document.querySelector(".item-list")
const carouselNavBtnList = document.querySelectorAll(".carousel nav button")

for(let i=0; i<carouselNavBtnList.length;i++) {
    carouselNavBtnList[i].addEventListener("click",handleCarouselNavClick)
}

function handleCarouselNavClick(e) {
    const target = e.target
    const targetId = target.dataset.id

    listEl.style.marginLeft = targetId * -100 + "%"
    
}