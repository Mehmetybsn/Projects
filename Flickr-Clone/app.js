

let main = document.querySelector("main")
let contentTitle = document.querySelector(".content-title>a")
let userName = document.querySelector(".username>a")
let bubble = document.querySelector(".footer-nav .bubble-container")
let languageOptions = document.querySelector(".footer-nav .language-options")

let backgroundImage = [
    {
        url: "url('./images/Boet&Harvey.jpg')",
        title: "Boet & Harvey",
        userName:"by Barbara van der Linde"
    },
    {
        url: "url('./images/backtothefuture.jpg')",
        title: "Back to The Future",
        userName:"by Foggy Lens Photography"
    },
    {
        url: "url('./images/wingsofvienn.jpg')",
        title: "…wingsofvienna…",
        userName:"by *ines_maria"
    },
    {
        url: "url('./images/PigeonsatBolhao.jpg')",
        title: "Pigeons at Bolhao",
        userName:"by Rui Palha"
    },
    {
        url: "url('./images/TropicalTendrilTreasure.jpg')",
        title: "Tropical Tendril Treasure",
        userName:"by Sally Rose Dolak"
    },
    {
        url: "url('./images/SnowBeauty-MLK Embrace Monument,Boston Common,Boston,MA.jpg')",
        title: "Snow Beauty - MLK Embrace Monument, Boston Common, Boston, MA",
        userName:"by Sean Sweeney"
    }
]


let currentIndex = Math.round(Math.random()*5)
main.style.backgroundImage = backgroundImage[currentIndex].url
contentTitle.textContent = backgroundImage[currentIndex].title
userName.textContent = backgroundImage[currentIndex].userName

function changeBackground() {
    currentIndex++  
    if(currentIndex == backgroundImage.length) {
        currentIndex = 0
    }

    main.style.backgroundImage = backgroundImage[currentIndex].url
    contentTitle.textContent = backgroundImage[currentIndex].title
    userName.textContent = backgroundImage[currentIndex].userName
    
}

setInterval(changeBackground, 5000)

languageOptions.addEventListener("click",handleClick)

function handleClick(e) {
    bubble.classList.toggle("active")
    console.log(e.target)
}



