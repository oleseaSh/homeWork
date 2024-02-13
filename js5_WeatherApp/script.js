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

const optionBolzano = document.createElement('option');
optionBolzano.value = 'Bolzano';
optionBolzano.textContent = 'Bolzano';
citySelector.appendChild(optionBolzano);

const firstCity = citySelector.options[0].value; // Получаем значение первого города в списке
    getWeather(firstCity);


citySelector.addEventListener('change', function() {
    const selectedCity = this.value; // Получаем выбранный город из списка
    getWeather(selectedCity);
});

//  меняем bg:
document.addEventListener('DOMContentLoaded', function() {
    const citySelector = document.getElementById('citySelector');
    const container = document.querySelector('.container'); // Получаем элемент, у которого меняется фон

    // Добавляем обработчик события change для выбора города
    citySelector.addEventListener('change', function() {
        const selectedCity = this.value; // Получаем выбранный город из списка

        // В зависимости от выбранного города, меняем фоновое изображение
        switch(selectedCity) {
            case 'Madrid':
                container.style.backgroundImage = 'url("./images/Madrid.jpg")';
                break;
            case 'Catania':
                container.style.backgroundImage = 'url("./images/Catania.jpg")';
                break;
            case 'Bolzano':
                container.style.backgroundImage = 'url("./images/Bolzano.jpg")';
                break;
            case 'Lisbon':
                container.style.backgroundImage = 'url("./images/Lissabon.jpg")';
                break;
            default:
                container.style.backgroundImage = 'url("./images/Lissabon.jpg")'; // По умолчанию используем фоновое изображение для Лиссабона
                break;
        }
    });

    // Добавляем обработчик события click для кнопки с классом 'label'
    const labelButton = document.querySelector('.label');
    labelButton.addEventListener('click', function() {
        const selectedIndex = citySelector.selectedIndex; // Получаем индекс текущего выбранного города
        const nextIndex = (selectedIndex + 1) % citySelector.options.length; // Вычисляем индекс следующего города
        citySelector.selectedIndex = nextIndex; // Устанавливаем выбранный город на следующий
        const selectedCity = citySelector.value; // Получаем выбранный город
        getWeather(selectedCity); // Вызываем функцию getWeather для нового выбранного города
        setCityBackground(selectedCity); // Устанавливаем фоновое изображение для нового выбранного города
    });
});
