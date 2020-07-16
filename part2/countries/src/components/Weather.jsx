import React from 'react'

const Weather = ({weather,city}) => {
    if(weather==='')
    return null

    return <div>
        <h4>Weather in {city} </h4>
        <p><strong>temperature: </strong> {weather.main.temp} Celsius</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather.description} />
        <p><strong>wind: </strong> {weather.wind.speed}</p>
    </div>
}

export default Weather
