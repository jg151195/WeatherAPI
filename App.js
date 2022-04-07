import City from './City.js';


const container = document.getElementById('container');



const button = document.getElementById('button');


button.addEventListener('click', async()=>{
    console.log('clicked');
    const inputCity = document.querySelector('input').value;
    const city = new City(inputCity);
    setInterval(await city.grabCity(inputCity), 5*60*1000);
    setInterval(await city.grabWeather(), 5*60*1000);
    console.log(city);
    
   

    

    const headCity = document.querySelector('h1');
    headCity.textContent = city.name;

    if(city.temp >= 30){
        container.style.backgroundImage = "url(./imgs/hell.jpg)";
        document.querySelector('img').src = "./imgs/hell-icon.png";

    }

    else if (city.temp <30 && city.temp > 20){
        container.style.backgroundImage = "url(./imgs/goodtemp.jpg)";
        document.querySelector('img').src = "./imgs/goodtemp-icon.png";
        
    }

    else if(city.temp<20){
        container.style.backgroundImage = "url(./imgs/cold.jpg)";
        document.querySelector('img').src = "./imgs/cold-icon.png";
    }
    
    const spanTemp = document.querySelector('h2');
    spanTemp.textContent = `${city.temp} °C`;
    const spanHumidity = document.getElementById('humidity');
    spanHumidity.textContent = `Humidity: ${city.humidity}`;
    
    const spanPressure = document.getElementById('pressure');
    spanPressure.textContent = `Air Pressure: ${city.pressure}mb`;
    console.log(await city);    
    
    console.log(city.date);
})
   
    

    

    