module.exports = async function getData(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f74b15174e9b474dedc94690d0584fca&units=metric`)

    const jsonData = await data.json();
    console.log(`\nCity: ${jsonData.name}`);
    console.log(`Temperature: ${jsonData.main.temp}°C`);
    console.log(`Feels like: ${jsonData.main.feels_like}°C`);
    console.log(`Humidity: ${jsonData.main.humidity}%`);
    console.log(`Wind speed: ${jsonData.wind.speed} knots`);
    console.log(`Description: ${jsonData.weather[0].description}\n`);

}
