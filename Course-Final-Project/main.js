const carouselListEl = document.querySelector("#art-works .carousel .carousel-list")

const btnListEl = document.querySelectorAll("#art-works .carousel nav button")

for(let i=0; i<btnListEl.length;i++) {
    btnListEl[i].addEventListener("click", handleBtnClick)
}

function handleBtnClick(e) {
    let target = e.target
    let targetID = target.dataset.id
    carouselListEl.style.marginLeft = targetID * -100+"%" 

}


const carouselListEl2 = document.querySelector("#inventions .carousel .carousel-list")

const btnListEl2 = document.querySelectorAll("#inventions .carousel nav button")

for(let i=0; i<btnListEl2.length;i++) {
    btnListEl2[i].addEventListener("click", handleBtnClick2)
}

function handleBtnClick2(e) {
    let target = e.target
    let targetID = target.dataset.id
    carouselListEl2.style.marginLeft = targetID * -100+"%" 

}

const buttonEl = document.querySelector("#fav-color")

buttonEl.addEventListener("click",()=>{
    alert("Leonardo Da Vinci'nin en sevdiği renk pempedir...")
})