import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const Language = ({name}) => {
return <li>{name}</li>
}

const Country = ({country}) => {
    
    const weatherAPK = process.env.REACT_APP_WEATHER
    const [weather,setWeather] = useState('')
    useEffect(()=>{axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${weatherAPK}`)
    .then(response => {
    setWeather(response.data)
  })},[country,weatherAPK])

return <div>
    <h2>{country.name}</h2>
    <p>capital <span>{country.capital}</span></p>
    <p>population <span>{country.population}</span></p>
    <h3>Languages</h3>
    <ul>
        {country.languages
        .map(language =><Language key={language.name} name={language.name} />)}
    </ul>
    <img style={{"width": "200px"}} src={country.flag} alt="flag" />
    <Weather weather={weather} city={country.capital} />
</div>

}

export default Country