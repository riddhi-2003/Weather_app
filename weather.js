const apiKey = "5d3430b203d27f7fe4d4915eeee027c4";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector ("#search input")
const searchBtn = document.querySelector ("#search button")


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

// checkWeather("Bangalore"); 









