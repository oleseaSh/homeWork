// текущая дата и время
const currentDate = new Date();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[currentDate.getMonth()];
const day = currentDate.getDate();
let hours = currentDate.getHours();

const ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12; 

const minutes = currentDate.getMinutes();
const formattedDateTime = `${month} ${day}, ${hours}:${minutes}${ampm}`;


const dateTimeElement = document.getElementById('dateTime');
dateTimeElement.textContent = formattedDateTime;


// фунция получения погоды по APIKey

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const APIKey = 'd4573c968916531f2db16825c3a3282f';
const cities = ['London', 'Minsk', 'Gdansk', 'Kyiv', 'Bozen'];

function getWeather(cityName) {
    const CityRequest = `q=${cityName}&appid=${APIKey}`;

    const city = document.querySelector('.city-name');
    const temperature = document.querySelector('.temperature');
    const image = document.querySelector('.image');
    const description = document.querySelector('.description');
    const windDirection = document.querySelector('.wind_direction');
    const windSpeed = document.querySelector('.wind_speed');
    const pressure = document.querySelector('.pressure');

    fetch(`${BASE_URL}${CityRequest}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            city.innerText = `${data.name}, ${data.sys.country}`;
            temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}&deg;C`;
            description.innerText = `${data.weather[0].description}`;
            image.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='Weather icon' />`;
            windDirection.innerText = `Wind Direction: ${data.wind.deg}°`;
            windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;
            pressure.innerText = `Pressure: ${data.main.pressure} hPa`;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

// Формирование списка select с помощью JavaScript:


const citySelector = document.getElementById('citySelector'); // Получаем контейнер по его ID


const optionLisbon = document.createElement('option');
optionLisbon.value = 'Lisbon';
optionLisbon.textContent = 'Lisbon';
citySelector.appendChild(optionLisbon);

const optionMadrid = document.createElement('option');
optionMadrid.value = 'Madrid';
optionMadrid.textContent = 'Madrid';
citySelector.appendChild(optionMadrid);

const optionCatania = document.createElement('option');
optionCatania.value = 'Catania';
optionCatania.textContent = 'Catania';
citySelector.appendChild(optionCatania);

const optionBozen = document.createElement('option');
optionBozen.value = 'Bozen';
optionBozen.textContent = 'Bozen';
citySelector.appendChild(optionBozen);

const firstCity = citySelector.options[0].value; // Получаем значение первого города в списке
    getWeather(firstCity);


citySelector.addEventListener('change', function() {
    const selectedCity = this.value; // Получаем выбранный город из списка
    getWeather(selectedCity);
});


// document.addEventListener('DOMContentLoaded', function() {
//     const citySelector = document.getElementById('citySelector');
//     const firstCity = citySelector.options[0].value; // Получаем значение первого города в списке
//     getWeather(firstCity);

//     
//     citySelector.addEventListener('change', function() {
//         const selectedCity = this.value; 
//         getWeather(selectedCity);
//     });
// });













