

let printer = document.querySelector(".printer ")

let inputEl = document.querySelector("#text")

printer.addEventListener("click", handleClick)


function handleClick(e) {
    if(e.target.dataset.index === undefined){
        inputEl.value += ""
    } else {
        inputEl.value += e.target.dataset.index
    }
    
    if(e.target.dataset.index === "=") {
        let indexOfOperators = index(inputEl.value)
        let value1 = inputEl.value.slice(0,indexOfOperators)
        let value2 = inputEl.value.slice(indexOfOperators+1, inputEl.value.length- 1)
        
        if(inputEl.value.includes("+")) {
            inputEl.value = Number(value1) + Number(value2)
        } else if(inputEl.value.includes("-")) {
            inputEl.value = value1 - value2
        } else if(inputEl.value.includes("*")) {
            inputEl.value = value1 * value2
        } else if(inputEl.value.includes("/")) {
            inputEl.value = value1 / value2
        }
    }

    if(e.target.dataset.index == "AC") {
        inputEl.value = ""
    }
    if(e.target.dataset.index == "DE") {
        inputEl.value = inputEl.value.slice(0,-3)
    }
}


function index(deger) {
    if(deger.includes("+")) {
        return deger.indexOf("+")
    } else if(deger.includes("-")) {
        return deger.indexOf("-")
    } else if(deger.includes("*")) {
        return deger.indexOf("*")
    } else if(deger.includes("/")) {
        return deger.indexOf("/")
    }
}

