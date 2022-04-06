export default class City {

    constructor(name) {
        this.name = name;
        this.lat;
        this.long;
        this.temp;
        this.humidity;
        this.pressure;

    }

    async grabCity(name) {
        try {
            const apiCity = `https://api.openweathermap.org/geo/1.0/direct?q=${name}`;
            const apiKey = '&appid=05b42a359cf920c47403016748ae9efb';
            const fullAPICity = apiCity + apiKey;
            const response = await fetch(fullAPICity);
            const data = await response.json();
            this.name = data[0].name;
            this.lat = data[0].lat;
            this.long = data[0].lon;
            
            
        } catch (error) {
            alert("Erro");
        }

    }

    async grabWeather() {

        const apiWeather = 'https://api.openweathermap.org/data/2.5/weather?';
        const coords = `lat=${this.lat}&lon=${this.long}`;
        const apiKey = '&appid=05b42a359cf920c47403016748ae9efb';;
        const fullAPIWeather = apiWeather + coords + apiKey;
        const response = await fetch(fullAPIWeather);
        const data = await response.json();
        this.temp = Math.round(data.main.temp - 273.15) + "°C";
        this.humidity = `${data.main.humidity}%`;
        this.pressure = `${data.main.pressure}`
        
        
    }
}