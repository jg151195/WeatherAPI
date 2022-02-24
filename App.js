import City from '/City.js';

const inputCity = document.querySelector('input').value;
const container = document.getElementById('container');
const date = new Date();

const dayStatus = date.getHours() >= 6 && date.getHours() < 12 ? "MORNING" : date.getHours() >= 12 && date.getHours() < 18 ? "AFTERNOON" : "NIGHT";

const city = new City(inputCity);



    setInterval(await city.grabCity(inputCity), 5*60*1000);
    setInterval(await city.grabWeather(inputCity), 5*60*1000);
    console.log(city);


    const headCity = document.createElement('h1');
    headCity.textContent = city.name;
    container.appendChild(headCity);

    const img = document.createElement('img');
    switch (dayStatus) {
        case "MORNING":
            img.src = "/morning.png";
            container.style.backgroundImage = "url(/sunrise.jpg)";
            break;
        case "AFTERNOON":
            img.src = "/sun.png";
            container.style.backgroundImage = "url(/afternoon.jpg)";
            break;
        case "NIGHT":
            img.src = "/night.png";
            container.style.backgroundImage = "url(/night2.webp)";
            break;
    }
    container.appendChild(img);
    const spanTemp = document.createElement('h2');
    spanTemp.textContent = city.temp;
    container.appendChild(spanTemp);
    const today = document.createElement('h3');
    today.textContent = `Today, ${date.getHours()}:00`;
    container.appendChild(today);
    const spanHumidity = document.createElement('h3');
    spanHumidity.textContent = `Humidity: ${city.humidity}`;
    container.appendChild(spanHumidity);
    const spanPressure = document.createElement('h3');
    spanPressure.textContent = `Air Pressure: ${city.pressure}mb`;
    container.appendChild(spanPressure);