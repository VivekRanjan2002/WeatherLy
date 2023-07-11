
const searchbtn = document.getElementById("searchbtn");
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9f0bad8f94msh9c339c825f71affp170486jsn5ee36ca3fad3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    console.log(city);
    heading_city.innerHTML=city
    fetch(url+city, options)
    .then(response => response.json())
        .then(result => {
            console.log(url);
        console.log(result);
        temp.innerHTML = result.temp
        humidity.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        cloud_pct.innerHTML = result.cloud_pct;    
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
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('Delhi');
    if (el) {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            getWeather('Delhi')
        })
    }
});
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('Bangalore');
    if (el) {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            getWeather('Bangalore')
        })
    }
});
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('Seattle');
    if (el) {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            getWeather('Seattle')
        })
    }
});

