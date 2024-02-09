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

// Вызываем функцию для каждого города
cities.forEach((city) => {
    getWeather(city);
});






// Формирование списка select с помощью JavaScript:
const selectElement = document.createElement('select');

const container = document.getElementById('#myContainer'); // Получаем контейнер по его ID


const optionLondon = document.createElement('option');
optionLondon.value = '23232';
optionLondon.textContent = 'London';
selectElement.appendChild(optionLondon);

const optionMinsk = document.createElement('option');
optionMinsk.value = '33456';
optionMinsk.textContent = 'Minsk';
selectElement.appendChild(optionMinsk);

const optionGdansk = document.createElement('option');
optionGdansk.value = '87968';
optionGdansk.textContent = 'Gdansk';
selectElement.appendChild(optionGdansk);

const optionBozen = document.createElement('option');
optionBozen.value = '39849';
optionBozen.textContent = 'Bozen';
selectElement.appendChild(optionBozen);




