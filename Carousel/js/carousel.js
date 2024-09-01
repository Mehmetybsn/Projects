
// birinci buton tıklandığında class'ı item list olan elemanın margin-left css özelliğini 0 yap




// ikinci buton tıklandığında class'ı item list olan elemanın margin-left css özelliğini -100% yap

// 1- ikinci butonu seç
const listEl = document.querySelector(".item-list")
const btn2El = document.querySelector(".carousel nav button:nth-child(2)")

btn2El.addEventListener("click", handleBtn2Click)

function handleBtn2Click(e) {
    const target = e.target
    console.log(target)
    const targetId = target.dataset.id
    listEl.style.marginLeft = "-100%"
}


const btn1El = document.querySelector(".carousel nav button:nth-child(1)")

btn1El.addEventListener("click", handleBtn1Click)

function handleBtn1Click(e) {
    const target = e.target

    const targetId = target.dataset.id
    listEl.style.marginLeft = "0"
}