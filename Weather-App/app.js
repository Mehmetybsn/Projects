const apiKey = "31994130f108464d83d110a33a06c3a2"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const responseData = await fetch(apiURL + city +`&appid=${apiKey}`)
    console.log(responseData)
    if(responseData.status === 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        
    let data = await responseData.json()


    document.querySelector(".city").innerHTML = data.name
    
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"

    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src =  "svg/cloud.svg"
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src =  "svg/sunny.svg"
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src =  "svg/rainy.svg"
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src =  "svg/rainy.svg"
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src =  "svg/mist.svg"
    } else if(data.weather[0].main == "Snow") {
        weatherIcon.src =  "svg/snow.svg"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"    
}
    
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
    searchBox.value = ""
})

