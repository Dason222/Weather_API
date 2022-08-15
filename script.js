let weather ={
    "apiKey":"dbe074d77aba338f5964c183234e2baf",
    fetchWeather: function(city) {

       fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
       + city + "&units=metric&appid=" + this.apiKey 
            ) 

       .then((response) => response.json())
       .then ((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { description } =  data.weather[0];
        const {temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + "m/s";

   },

   search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
   },

};

document.querySelector(".search button")
.addEventListener("Click", function(){
    weather.search();
} );