const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const API_KEY = '&appid=28d6d7d9bc4738548cb0f7c4d55f7abe';
const weatherAPI_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const geocodingAPI_URL = `http://api.openweathermap.org/geo/1.0/direct?q=`;

let data, res, weatherID;
let nameOfTheCity;
let lat, lon, numLat, numLon;

function getWeather() {
	nameOfTheCity = input.value;
	cityName.classList.remove('hidden');
	warning.classList.add('hidden');
	geocodingAPIfetch();
}

async function geocodingAPIfetch() {
	try {
		res = await fetch(geocodingAPI_URL + nameOfTheCity + API_KEY);
		data = await res.json();
		numLat = JSON.parse(data[0].lat);
		numLon = JSON.parse(data[0].lon);
		weatherAPIfetch();
	} catch {
		cityName.classList.add('hidden');
		warning.classList.remove('hidden');
		temperature.textContent = '';
		humidity.textContent = '';
		weather.textContent = '';
		photo.setAttribute('src', './img/season.png');
		console.error('error');
	}
}
async function weatherAPIfetch() {
	try {
		lat = `&lat=${numLat}`;
		lon = `&lon=${numLon}`;
		res = await fetch(weatherAPI_URL + lat + lon + API_KEY);
		data = await res.json();
		refreshData();
	} catch {
		console.error('error');
	}
}

function refreshData() {
	const arrFromData = {
		temp: data.main.temp,
		hum: data.main.humidity,
		nameOfCity: data.name,
		weatherDescr: data.weather[0].main,
	};
	const { temp, hum, nameOfCity, weatherDescr } = arrFromData;

	cityName.textContent = nameOfCity;
	temperature.textContent = Math.ceil(temp) + `°C`;
	humidity.textContent = Math.ceil(hum) + '%';
	weather.textContent = weatherDescr;
	input.value = '';
	changeImg();
}

function changeImg() {
	weatherID = data.weather[0].id;

	if (weatherID >= 200 && weatherID < 300) {
		photo.setAttribute('src', './img/thunderstorm.png');
	} else if (weatherID >= 300 && weatherID < 500) {
		photo.setAttribute('src', './img/showerRain.png');
	} else if (weatherID >= 500 && weatherID < 600) {
		photo.setAttribute('src', './img/rain.png');
	} else if (weatherID >= 600 && weatherID < 700) {
		photo.setAttribute('src', './img/snow.png');
	} else if (weatherID >= 700 && weatherID < 800) {
		photo.setAttribute('src', './img/mist.png');
	} else if (weatherID === 800) {
		photo.setAttribute('src', './img/clearSky.png');
	} else if (weatherID > 800 && weatherID < 900) {
		photo.setAttribute('src', './img/brokenClouds.png');
	} else {
		console.error('error');
	}
}

button.addEventListener('click', getWeather);
document.addEventListener('keydown', function (e) {
	'Enter' === e.key && getWeather();
});
