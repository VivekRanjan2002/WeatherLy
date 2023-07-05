// const cloud_pct = document.getElementById("cloud_pct")
 const searchbtn=document.getElementById("searchbtn")
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9f0bad8f94msh9c339c825f71affp170486jsn5ee36ca3fad3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    heading_city.innerHTML=city
    fetch(url, options)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp
        humidity.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
    })
    .catch(err => console.log(err));
}

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('searchbtn');
    if (el) {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            getWeather(city.value)
        })
    }
});
