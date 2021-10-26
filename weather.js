class Weather {
    constructor(city, state) {
        this.apiKey = '3232a54a15b301c9062ac096bbe75995';
        this.city = city;
        this.state = state;
    }

    async getWeather () {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
        const responseData = await response.json();
        // console.log(response)
        // console.log(responseData)
        return responseData;
    }
}