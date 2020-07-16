import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Result from './components/Result'

const App = () => {
  const [countries,setCountries] = useState([])
  const [filter,setFilter] = useState('')
  
  useEffect(()=>{axios  
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
    setCountries(response.data)
  })},[])

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  const handleCountryClick = (event) => {
    setFilter(event.target.value)
  }
  // Filter not cleared after country is shown
  return <div>
    <h1>Countries</h1>
    <Filter filter={filter} onChange={handleChange} />
    <Result filter={filter} countries={countries} onClick={handleCountryClick}/>
  </div>
}

export default App
