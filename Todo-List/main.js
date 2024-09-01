let todos = document.querySelector(".todos")
let buttonEl = document.querySelector("button")
let inputEl = document.querySelector("input")

buttonEl.addEventListener("click", handleClick)


function handleClick() {
    if(inputEl.value === "") {
        alert("Todo Girin")
    } else {
    let sectionEl = document.createElement("section")
    let articleEl = document.createElement("article")
    let spanEl = document.createElement("span")
    
    let pEl = document.createElement("p")
    pEl.textContent = inputEl.value
    pEl.style.fontSize = "1.3rem"
    
    spanEl.style.fontSize = "1.3rem"
    spanEl.textContent = "\u00D7"
    spanEl.style.padding = "8px 0" 
    
    let circle = document.createElement("div")
    circle.classList.add("circle")
    

    articleEl.append(circle)
    articleEl.append(pEl)
    sectionEl.append(articleEl)
    sectionEl.append(spanEl)
    todos.appendChild(sectionEl)

    articleEl.addEventListener("click" , ()=> {
        articleEl.classList.toggle("active")
    })

    spanEl.addEventListener("click",() => {
        sectionEl.style.display = "none"
    })

    }
    
    inputEl.value = ""
}





