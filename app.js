
const display_1 = document.getElementById('display-1');
const display_2 = document.getElementById('display-2');
const display_3 = document.getElementById('display-3');
const display_4 = document.getElementById('display-4');

// console.log(display_1)
// let html = `
//             <h1 class="py-1" id="w-location">${weather.name}</h1>
//             <h3 class="text-dark" id="w-description">${weather.weather[0].description}</h3>
//             <h3 id="w-temperature">${weather.main.temp}&deg;C</h3>
//             <img id="w-icon">
//             <ul class="list-group mt-3" id="w-details">
//                 <li class="list-group-item" id="w-humidity">${weather.main.humidity} %</li>
//                 <li class="list-group-item" id="w-pressure">${weather.main.pressure} Pa</li>
//                 <li class="list-group-item" id="w-feels-like">${weather.main.feels_like} &deg;C</li>
//                 <li class="list-group-item" id="w-wind">Wind ${weather.wind.speed} m/s</li>
//             </ul>   
// `

const cities = ['adelaide', 'new york', 'london', 'los angeles', 'moscow'];
// const randomCity = cities[Math.floor(Math.random() * cities.length)];


setInterval(function() {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const weather = new Weather(randomCity);
    const ui = new UI();
   

    function getWeather() {
        weather.getWeather()
        .then(results => {
            let html = `
            <h1 class="py-1" style='color:#fcd352; font-family: Verdana, Geneva, Tahoma, sans-serif;' id="w-location">${results.name}</h1>
            <h3 class="text-dark" id="w-description">${results.weather[0].description}</h3>
            <h3 id="w-temperature">Temperature <span class='api-data'>${results.main.temp} &deg;C</span>
            </h3>
            <img id="w-icon" src="http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png">
            <ul class="list-group mt-3" id="w-details">
                <li class="list-group-item" id="w-humidity">Humidity <span class='api-data'>${results.main.humidity} %</span></li>
                <li class="list-group-item" id="w-pressure">Pressure <span class='api-data'>${results.main.pressure} Pa</span></li>
                <li class="list-group-item" id="w-feels-like">Feels-like <span class='api-data'>${results.main.feels_like} &deg;C</span></li>
                <li class="list-group-item" id="w-wind">Wind <span class='api-data'>${results.wind.speed} m/s</span></li>
            </ul>   
                 `;
            
            
            const displays = document.querySelectorAll('#display-1')
            displays.forEach((node)=> {
                node.innerHTML = html;
            
                node.style.animation = "fadeIn 5s";
            })
         
        })
        .catch(err=> console.log(err))
    }
    getWeather();
}, 3000)


  


  