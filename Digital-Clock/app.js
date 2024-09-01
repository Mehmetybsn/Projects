let hour = document.querySelector(".hours h1")

let minute = document.querySelector(".minutes h1")

let second = document.querySelector(".seconds h1")




setInterval(() => {
    let date = new Date()
    hour.textContent = checkNumber(date.getHours())
    minute.textContent = checkNumber(date.getMinutes())
    second.textContent = checkNumber(date.getSeconds())
}, 100)


function checkNumber(number) {
    if (number < 10) {
        return "0" + number
    } 
    return number
}
