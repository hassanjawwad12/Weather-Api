const apiKey = '5e5f0df100bf9d89890b533f5d4d1524';

const submitButton = document.querySelector('#submit');
const resultDiv = document.querySelector('#result');

submitButton.addEventListener('click', () => {
	const cityInput = document.querySelector('#city');
	const city = cityInput.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const iconCode = data.weather[0].icon;
			const temperature = Math.round(data.main.temp);
			const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
			const iconAlt = data.weather[0].description;

			const weatherIcon = `<div class="weather-icon" style="background-image: url('${iconUrl}')" alt="${iconAlt}"></div>`;
			const temperatureText = `<div class="temperature">${temperature}&deg;C</div>`;

			resultDiv.innerHTML = weatherIcon + temperatureText;

		})
		.catch(error => {
			console.log(error);
			resultDiv.innerHTML = '<div class="error">City not found</div>';
		});
});
