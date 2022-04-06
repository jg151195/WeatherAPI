import City from './City.js';


const container = document.getElementById('container');
const date = new Date();

const dayStatus = date.getHours() >= 6 && date.getHours() < 12 ? "MORNING" : date.getHours() >= 12 && date.getHours() < 18 ? "AFTERNOON" : "NIGHT";



const button = document.getElementById('button');


button.addEventListener('click', async()=>{
    console.log('clicked');
    const inputCity = document.querySelector('input').value;
    const city = new City(inputCity);
    setInterval(await city.grabCity(inputCity), 5*60*1000);
    setInterval(await city.grabWeather(), 5*60*1000);
    

    const headCity = document.querySelector('h1');
    headCity.textContent = city.name;
    

    const img = document.querySelector('img');
    switch (dayStatus) {
        case "MORNING":
            img.src = "./morning.png";
            container.style.backgroundImage = "url(./sunrise.jpg)";
            break;
        case "AFTERNOON":
            img.src = "./sun.png";
            container.style.backgroundImage = "url(./afternoon.jpg)";
            break;
        case "NIGHT":
            img.src = "./night.png";
            container.style.backgroundImage = "url(./night2.webp)";
            break;
    }
    const spanTemp = document.querySelector('h2');
    spanTemp.textContent = `${city.temp}`;
    const today = document.getElementById('today');
    today.textContent = `Today, ${date.getHours()}:00`;
    const spanHumidity = document.getElementById('humidity');
    spanHumidity.textContent = `Humidity: ${city.humidity}`;
    
    const spanPressure = document.getElementById('pressure');
    spanPressure.textContent = `Air Pressure: ${city.pressure}mb`;
    console.log(await city);
})
   
    

    

    