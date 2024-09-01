
let lists = document.getElementsByClassName("list")

let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")


for(list of lists) {
    list.addEventListener("dragstart", handleDrag)
}

function handleDrag(e) {
    let selected = e.target

    rightBox.addEventListener("dragover", (e)=> {
        e.preventDefault()
    })

    rightBox.addEventListener("drop", (e)=> {
        e.preventDefault()
        rightBox.appendChild(selected)
        selected = null
    })

    leftBox.addEventListener("dragover", (e)=> {
        e.preventDefault()
    })

    leftBox.addEventListener("drop", (e)=> {
        e.preventDefault()
        leftBox.appendChild(selected)
        selected = null
    })
}

