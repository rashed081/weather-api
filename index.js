function changeTempUnit(kelvin){
   const celsius =kelvin-273.15;
   return celsius;
}
function showDetails(){
    const cityName = document.getElementById('city-name').value;
    console.log(cityName);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=be4bd5762d605ac92f39ca5d5338fe3d`)
    .then(res => res.json())
    .then(data =>{
        const currentTemp=changeTempUnit(data.main.temp);
        document.getElementById('current-temp').innerText=currentTemp.toFixed(2);
        const currentLocation=data.name;
        document.getElementById('current-city').innerText=currentLocation;
        const currentWeather=data.weather[0].description;
        document.getElementById('current-weather').innerText=currentWeather.toUpperCase();
        document.getElementById('city-name').value='';
    
    })
}



